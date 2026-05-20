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
from decouple import config

COOKIE_DOMAIN = config("COOKIE_DOMAIN", default=None)

class LoginView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)

        if not user:
            return Response({"error": "Invalid credentials"}, status=401)

        refresh = RefreshToken.for_user(user)
        access = refresh.access_token

        response = Response({"message": "Login Successful"})

        cookie_kwargs = {
            "httponly": True,
            "secure": True,
            "samesite": "None",
            "path": "/",
        }
        if COOKIE_DOMAIN:
            cookie_kwargs["domain"] = COOKIE_DOMAIN

        response.set_cookie("access_token", str(access), **cookie_kwargs)
        response.set_cookie("refresh_token", str(refresh), **cookie_kwargs)
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

            cookie_kwargs = {
                "httponly": True,
                "secure": True,
                "samesite": "None",
                "path": "/",
            }
            if COOKIE_DOMAIN:
                cookie_kwargs["domain"] = COOKIE_DOMAIN

            response.set_cookie("access_token", str(access), **cookie_kwargs)
            return response
        except TokenError:
            return Response({"error": "Invalid token"}, status=401)


class LogoutView(APIView):
    def post(self, request):
        response = Response({"message": "Logged out"})

        if COOKIE_DOMAIN:
            response.delete_cookie("access_token", domain=COOKIE_DOMAIN)
            response.delete_cookie("refresh_token", domain=COOKIE_DOMAIN)
        else:
            response.delete_cookie("access_token")
            response.delete_cookie("refresh_token")

        return response

# Create your views here.
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny] # Allowing the view to be accessed by Anyone


class DashboardView(APIView):
    permission_classes = [IsAuthenticated] # This allows the View to accessed only when the user is Logged in (authenticated)

    def get(self, request):
        return Response({"message": "Welcome to the dashboard"})

