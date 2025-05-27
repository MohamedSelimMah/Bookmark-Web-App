from django.contrib import admin
from .models import Book, UserBookList, BookProgress, BookClub, BookClubMembership, Notification

admin.site.register(Book)
admin.site.register(UserBookList)
admin.site.register(BookProgress)
admin.site.register(BookClub)
admin.site.register(BookClubMembership)
admin.site.register(Notification)
