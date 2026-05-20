from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from accounts.views import RegisterView, DashboardView, LoginView, RefreshView, LogoutView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()
router.register('students', views.StudentsView)

urlpatterns = [
    path("teachers/", views.teachers_api_view),
    path("teacher/<int:pk>/", views.teacher_detail),
    path("", include(router.urls)),
    path("mentors/", views.MentorsView.as_view()),
    path("mentors/<str:pk>", views.MentorDetails.as_view()),
    path("register/", RegisterView.as_view()),
    path("login/", LoginView.as_view()),
    path("refresh/", RefreshView.as_view()),
    path("logout/", LogoutView.as_view()),
    path('dashboard-protected/', DashboardView.as_view())
]
