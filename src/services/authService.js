const API_URL = "http://localhost:8000/api/auth/";

export async function login({ email, password }) {
  const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    throw new Error("Login failed");
  }
  return response.json();
}

export async function register({ username, email, password }) {
  const response = await fetch("http://127.0.0.1:8000/api/auth/register/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  if (!response.ok) {
    throw new Error("Registration failed");
  }
  return response.json();
}