import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./pages/HomePage";

function App() {
  // You’ll connect these to your auth service later
  const handleLogin = async (credentials) => { /* ... */ };
  const handleRegister = async (credentials) => { /* ... */ };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterForm onRegister={handleRegister} />} />
      </Routes>
    </Router>
  );
}

export default App;