import React from "react";
import LoginForm from "../components/LoginForm";
import { login } from "../services/authService";

export default function LoginPage() {
  const handleLogin = async (credentials) => {
    try {
      const data = await login(credentials);
      localStorage.setItem("token", data.token);
      alert("Login successful");
      // Navigate to home or dashboard
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <LoginForm onLogin={handleLogin} />
  );
}