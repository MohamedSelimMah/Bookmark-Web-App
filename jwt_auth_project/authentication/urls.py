from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RegisterView, BookViewSet, UserBookListViewSet, BookProgressViewSet
from .views import BookClubViewSet, BookClubMembershipViewSet
from .views import NotificationViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import UserActivityViewSet
from . import views  # <-- Add this line

router = DefaultRouter()
router.register(r'books', BookViewSet, basename='book')
router.register(r'user-book-list', UserBookListViewSet, basename='userbooklist')
router.register(r'book-progress', BookProgressViewSet, basename='bookprogress')
router.register(r'book-clubs', BookClubViewSet, basename='bookclub')
router.register(r'book-club-memberships', BookClubMembershipViewSet, basename='bookclubmembership')
router.register(r'notifications', NotificationViewSet, basename='notification')
router.register(r'user-activities', UserActivityViewSet, basename='useractivity')

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', include(router.urls)),
    path('books/', views.book_list, name='book-list'),
]
