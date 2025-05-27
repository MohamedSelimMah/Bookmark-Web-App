from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import Book, UserBookList, BookProgress, BookClub, BookClubMembership, Notification, UserActivity


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


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(username=data['email'], password=data['password'])
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Invalid credentials")


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

    def validate_title(self, value):
        if not value:
            raise serializers.ValidationError("Title cannot be empty.")
        return value


class UserBookListSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserBookList
        fields = '__all__'


class BookProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookProgress
        fields = '__all__'


class BookClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookClub
        fields = '__all__'


class BookClubMembershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookClubMembership
        fields = '__all__'


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'


class UserActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserActivity
        fields = '__all__'
