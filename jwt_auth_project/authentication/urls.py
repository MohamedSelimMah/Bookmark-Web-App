from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RegisterView, BookViewSet, UserBookListViewSet, BookProgressViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()
router.register(r'books', BookViewSet, basename='book')
router.register(r'user-book-list', UserBookListViewSet, basename='userbooklist')
router.register(r'book-progress', BookProgressViewSet, basename='bookprogress')

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', include(router.urls)),
]
