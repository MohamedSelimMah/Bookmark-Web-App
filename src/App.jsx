import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./pages/HomePage";
import BookDetailsPage from "./pages/BookDetailsPage";

function App() {
  const handleLogin = async (credentials) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      // Optionally store token: localStorage.setItem("token", data.token);
      // Optionally redirect or show message
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async (credentials) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        throw new Error("Registration failed");
      }
      // Optionally handle success (e.g., redirect or show message)
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error(error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterForm onRegister={handleRegister} />} />
        <Route path="/books/:id" element={<BookDetailsPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;