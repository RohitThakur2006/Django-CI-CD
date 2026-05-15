from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import TokenError

# Create your views here.
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny] # Allowing the view to be accessed by Anyone


class DashboardView(APIView):
    permission_classes = [IsAuthenticated] # This allows the View to accessed only when the user is Logged in (authenticated)

    def get(self, request):
        return Response({"message": "Welcome to the dashboard"})


class LoginView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)

        if not user:
            return Response({"error": "Invalid credentials"}, status=401)
        
        refresh = RefreshToken.for_user(user) # fetch the refresh and access token for the user
        access = refresh.access_token

        response = Response({"message": "Login Successful"})

        response.set_cookie(
            key="access_token",
            value=str(access),
            httponly=True,
            secure=True, # Make True in production
            samesite='None',
            path='/'
        )

        response.set_cookie(
            key="refresh_token",
            value=str(refresh),
            httponly=True,
            secure=True,
            samesite='None',
            path='/'
        )

        return response
    
class RefreshView(APIView):
    def post(self, request):
        refresh_string = request.COOKIES.get("refresh_token")

        if not refresh_string:
            return Response({"error": "No refresh token sent"}, status=401)
        
        try:
            refresh = RefreshToken(refresh_string)
            access = refresh.access_token

            response = Response({"message": "Token refreshed"})

            response.set_cookie(
                key='access_token',
                value=str(access),
                httponly=True,
                secure=True,
                samesite='None',
                path='/'
            )

            return response
        except TokenError:
            return Response({'error': 'Invalid token'}, status=401)


class LogoutView(APIView):
    def post(self, request):
        response = Response({"message": "Logged out"})
        response.delete_cookie("access_token", path='/', samesite='None')
        response.delete_cookie("refresh_token", path='/', samesite='None')
        return response
    
