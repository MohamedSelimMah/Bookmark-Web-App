from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer, LoginSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated  # <-- Add IsAuthenticated here
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import serializers
from rest_framework import viewsets
from .models import Book, UserBookList, BookProgress
from .serializers import BookSerializer, UserBookListSerializer, BookProgressSerializer
# from rest_framework import permissions  # <-- You can remove this line

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'email')

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data.get('email', '')
        )
        return user


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class UserBookListViewSet(viewsets.ModelViewSet):
    queryset = UserBookList.objects.all()
    serializer_class = UserBookListSerializer
    permission_classes = [IsAuthenticated]  # <-- Use IsAuthenticated directly

    def get_queryset(self):
        # Only show the logged-in user's list
        return UserBookList.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class BookProgressViewSet(viewsets.ModelViewSet):
    queryset = BookProgress.objects.all()
    serializer_class = BookProgressSerializer
    permission_classes = [IsAuthenticated]  # <-- Use IsAuthenticated directly

    def get_queryset(self):
        # Only show the logged-in user's progress
        return BookProgress.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
