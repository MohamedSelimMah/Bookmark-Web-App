import React from "react";
import RegisterForm from "../components/RegisterForm";
import { register } from "../services/authService";

export default function RegisterPage() {
  const handleRegister = async (credentials) => {
    try {
      const data = await register(credentials);
      alert("Registration successful");
      // Optionally, navigate to login or home page
    } catch (error) {
      alert("Registration failed");
    }
  };

  return <RegisterForm onRegister={handleRegister} />;
}