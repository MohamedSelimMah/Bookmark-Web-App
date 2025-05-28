const API_URL = "http://127.0.0.1:8000/api/auth/books/";
// CREATE
export async function addBook(bookData, token) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify(bookData),
  });
  if (!response.ok) throw new Error("Failed to add book");
  return response.json();
}

// READ (all books)
export async function getBooks(token) {
  const response = await fetch(API_URL, {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  if (!response.ok) throw new Error("Failed to fetch books");
  return response.json();
}

// READ (single book)
export async function getBook(id, token) {
  const response = await fetch(`${API_URL}${id}/`, {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  if (!response.ok) throw new Error("Failed to fetch book");
  return response.json();
}

// UPDATE
export async function updateBook(id, bookData, token) {
  const response = await fetch(`${API_URL}${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify(bookData),
  });
  if (!response.ok) throw new Error("Failed to update book");
  return response.json();
}

// DELETE
export async function deleteBook(id, token) {
  const response = await fetch(`${API_URL}${id}/`, {
    method: "DELETE",
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  if (!response.ok) throw new Error("Failed to delete book");
  return true;
}