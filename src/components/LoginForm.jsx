import React, { useState } from "react";
import bookmark from "../assets/bookmark.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await onLogin({ email, password });
      navigate("/");
    } catch (err) {
      setError(
        err?.message || "Invalid credentials. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left: Login */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-8 py-12 relative">
        {/* Logo */}
        <div className="absolute top-8 left-8 flex items-center gap-2">
          <img src={bookmark} alt="Logo" className="w-20 h-20" />
          <span className="font-bold text-2xl text-[#445b70]">BookMark</span>
        </div>
        <div className="w-full max-w-xl mt-8 sm:mt-24">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#222] mb-8">Login to Your Account</h1>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            {error && <div className="mb-2 text-red-600 text-center">{error}</div>}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 sm:py-4 rounded-full bg-[#d6eef4] border-none focus:ring-2 focus:ring-[#617886] text-[#445b70] font-semibold placeholder-[#617886] transition text-base sm:text-lg"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              disabled={loading}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 sm:py-4 rounded-full bg-[#d6eef4] border-none focus:ring-2 focus:ring-[#617886] text-[#445b70] font-semibold placeholder-[#617886] transition text-base sm:text-lg"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              disabled={loading}
            />
            <button
              type="submit"
              className={`w-full bg-[#617886] text-white py-3 sm:py-4 rounded-full font-bold shadow hover:bg-[#445b70] transition flex items-center justify-center text-base sm:text-lg ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
              disabled={loading}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
              ) : null}
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
      {/* Right: Register Prompt */}
      <div className="hidden md:flex flex-col justify-center items-center w-[480px] bg-gradient-to-br from-[#d6eef4] to-[#617886] text-white relative overflow-hidden">
        <h2 className="text-4xl font-extrabold mb-4">New Here?</h2>
        <p className="mb-10 text-center px-10 text-xl">Sign up and discover a great amount of new opportunities!</p>
        <a
          href="/register"
          className="bg-white text-[#617886] font-bold px-14 py-4 rounded-full shadow hover:bg-gray-100 transition text-lg"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}