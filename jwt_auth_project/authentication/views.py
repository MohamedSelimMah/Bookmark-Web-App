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
from .models import Book, UserBookList, BookProgress, BookClub, BookClubMembership, Notification, UserActivity
from .serializers import BookSerializer, UserBookListSerializer, BookProgressSerializer, BookClubSerializer, BookClubMembershipSerializer, NotificationSerializer, UserActivitySerializer
from rest_framework.decorators import api_view

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
    queryset = Book.objects.all().select_related()
    serializer_class = BookSerializer


class UserBookListViewSet(viewsets.ModelViewSet):
    serializer_class = UserBookListSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return UserBookList.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class BookProgressViewSet(viewsets.ModelViewSet):
    serializer_class = BookProgressSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return BookProgress.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class BookClubViewSet(viewsets.ModelViewSet):
    queryset = BookClub.objects.all()
    serializer_class = BookClubSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class BookClubMembershipViewSet(viewsets.ModelViewSet):
    serializer_class = BookClubMembershipSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return BookClubMembership.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class NotificationViewSet(viewsets.ModelViewSet):
    serializer_class = NotificationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Notification.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class UserActivityViewSet(viewsets.ModelViewSet):
    serializer_class = UserActivitySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return UserActivity.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


@api_view(['GET'])
def book_list(request):
    books = Book.objects.all().order_by('id')  # Add .order_by('id')
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)
