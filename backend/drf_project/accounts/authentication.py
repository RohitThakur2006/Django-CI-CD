from rest_framework_simplejwt.authentication import JWTAuthentication

class CookieJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        """
        If the token does not exist, the request.user will be set to AnonymousUser
        This class does not throw an error, it silently skips
        Returns:
            - user: User Object (request.user)
            - validates_token: Validated token (request.auth)
        """
        token = request.COOKIES.get("access_token") # Get token from the cookies
        if not token:
            return None
        
        validated_token = self.get_validated_token(token) # If the token is not valid, it raises 401 error
        user = self.get_user(validated_token)
        return user, validated_token
