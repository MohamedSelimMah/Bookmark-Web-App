import React, { useState } from "react";
import bookmark from "../assets/bookmark.png";
import axios from "axios";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8000/api/auth/register/", {
        email,
        password,
      });
      // If backend returns JWT tokens on registration, store them:
      if (response.data.access) {
        localStorage.setItem("accessToken", response.data.access);
        window.location.href = "/"; // Redirect to home page after registration
      } else {
        // Registration successful but no token returned
        window.location.href = "/login";
      }
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Right: Login Prompt */}
      <div className="hidden md:flex flex-col justify-center items-center w-[480px] bg-gradient-to-br from-[#d6eef4] to-[#617886] text-white relative overflow-hidden">
        <h2 className="text-4xl font-extrabold mb-4">Already have an account?</h2>
        <p className="mb-10 text-center px-10 text-xl">Sign in and continue your reading journey!</p>
        <a
          href="/login"
          className="bg-white text-[#617886] font-bold px-14 py-4 rounded-full shadow hover:bg-gray-100 transition text-lg"
        >
          Login
        </a>
      </div>
      {/* Left: Register */}
      <div className="flex-1 flex flex-col justify-center items-center px-8 py-12 relative">
        {/* Logo */}
        <div className="absolute top-8 left-8 flex items-center gap-2">
          <img src={bookmark} alt="Logo" className="w-25 h-25" />
          <span className="font-bold text-2xl text-[#445b70]">BookMark</span>
        </div>
        <div className="w-full max-w-xl mt-24">
          <h1 className="text-5xl font-extrabold text-[#222] mb-8">Create Your Account</h1>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            {error && <div className="mb-2 text-red-600 text-center">{error}</div>}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-full bg-[#d6eef4] border-none focus:ring-2 focus:ring-[#617886] text-[#445b70] font-semibold placeholder-[#617886] transition"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-full bg-[#d6eef4] border-none focus:ring-2 focus:ring-[#617886] text-[#445b70] font-semibold placeholder-[#617886] transition"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-full bg-[#d6eef4] border-none focus:ring-2 focus:ring-[#617886] text-[#445b70] font-semibold placeholder-[#617886] transition"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-[#617886] text-white py-3 rounded-full font-bold shadow hover:bg-[#445b70] transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}