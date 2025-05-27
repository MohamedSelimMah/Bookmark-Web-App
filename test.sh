#!/bin/bash

TOKEN="YOUR_TOKEN_HERE"

echo "1. Register a new user"
curl -X POST http://localhost:8000/api/auth/register/ \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"testuser\", \"password\": \"TestPass123\", \"email\": \"test@example.com\"}"
echo -e "\n---"
sleep 2

echo "2. Login (get JWT token)"
curl -X POST http://localhost:8000/api/auth/login/ \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "password": "TestPass123"}'
echo -e "\n---"
sleep 2

echo "3. Create Book"
curl -X POST http://localhost:8000/api/auth/books/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"title": "Sample Book", "author": "Author Name", "description": "A test book."}'
echo -e "\n---"
sleep 2

echo "4. List Books"
curl http://localhost:8000/api/auth/books/ \
  -H "Authorization: Bearer $TOKEN"
echo -e "\n---"
sleep 2

echo "5. Add Book to My List"
curl -X POST http://localhost:8000/api/auth/user-book-list/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"book": 1}'
echo -e "\n---"
sleep 2

echo "6. List My List"
curl http://localhost:8000/api/auth/user-book-list/ \
  -H "Authorization: Bearer $TOKEN"
echo -e "\n---"
sleep 2

echo "7. Add/Update Book Progress"
curl -X POST http://localhost:8000/api/auth/book-progress/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"book": 1, "current_page": 50, "completed": false}'
echo -e "\n---"
sleep 2

echo "8. List Book Progress"
curl http://localhost:8000/api/auth/book-progress/ \
  -H "Authorization: Bearer $TOKEN"
echo -e "\n---"
sleep 2

echo "9. Create Book Club"
curl -X POST http://localhost:8000/api/auth/book-clubs/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"name": "Sci-Fi Fans", "description": "A club for sci-fi lovers."}'
echo -e "\n---"
sleep 2

echo "10. List Book Clubs"
curl http://localhost:8000/api/auth/book-clubs/ \
  -H "Authorization: Bearer $TOKEN"
echo -e "\n---"
sleep 2

echo "11. Join a Book Club"
curl -X POST http://localhost:8000/api/auth/book-club-memberships/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"club": 1}'
echo -e "\n---"
sleep 2

echo "12. List My Book Club Memberships"
curl http://localhost:8000/api/auth/book-club-memberships/ \
  -H "Authorization: Bearer $TOKEN"
echo -e "\n---"
sleep 2

echo "13. Create Notification"
curl -X POST http://localhost:8000/api/auth/notifications/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"message": "Welcome to the app!"}'
echo -e "\n---"
sleep 2

echo "14. List Notifications"
curl http://localhost:8000/api/auth/notifications/ \
  -H "Authorization: Bearer $TOKEN"
echo -e "\n---"
sleep 2

echo "15. Create User Activity"
curl -X POST http://localhost:8000/api/auth/user-activities/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"action": "Logged in"}'
echo -e "\n---"
sleep 2

echo "16. List User Activities"
curl http://localhost:8000/api/auth/user-activities/ \
  -H "Authorization: Bearer $TOKEN"
echo -e "\n---"
sleep 2

echo "All tests complete."