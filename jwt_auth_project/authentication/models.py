from django.db import models
from django.contrib.auth.models import User

# Book table (Sprint 2, Sprint 4 for audiobooks)
class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    cover_image = models.URLField(blank=True)
    audio_file = models.URLField(blank=True, null=True)  # For audiobooks

    def __str__(self):
        return self.title

# User's personal book list (Sprint 2)
class UserBookList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    added_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'book')

# Progress tracking (Sprint 2)
class BookProgress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    current_page = models.IntegerField(default=0)
    completed = models.BooleanField(default=False)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('user', 'book')

# Book club/group (Sprint 4)
class BookClub(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_clubs')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

# Book club membership (Sprint 4)
class BookClubMembership(models.Model):
    club = models.ForeignKey(BookClub, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    joined_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('club', 'user')

# Notifications (Sprint 5)
class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.CharField(max_length=512)
    created_at = models.DateTimeField(auto_now_add=True)
    read = models.BooleanField(default=False)

# Analytics/user activity (Sprint 5)
class UserActivity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    action = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)