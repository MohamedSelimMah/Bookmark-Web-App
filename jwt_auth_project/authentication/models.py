from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    email = models.EmailField(unique=True)  # Email used for unique identification
    username = models.CharField(unique=True, max_length=150)

    REQUIRED_FIELDS = ['email']  # Require only email and password
    USERNAME_FIELD = 'username'
