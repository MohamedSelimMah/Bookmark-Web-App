export async function addBook(bookData, token) {
  const response = await fetch("http://127.0.0.1:8000/api/auth/books/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Add Authorization header if your endpoint requires authentication
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify(bookData),
  });
  if (!response.ok) {
    throw new Error("Failed to add book");
  }
  return response.json();
}