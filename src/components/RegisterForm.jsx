import React, { useState } from "react";
import bookmark from "../assets/bookmark.png";
import axios from "axios";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/auth/register/", {
        email,
        password,
      });
      if (response.data.access) {
        localStorage.setItem("accessToken", response.data.access);
        window.location.href = "/";
      } else {
        window.location.href = "/login";
      }
    } catch (err) {
      setError(
        err.response?.data?.detail ||
        "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* ...existing layout... */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        {error && <div className="mb-2 text-red-600 text-center">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-full bg-[#d6eef4] border-none focus:ring-2 focus:ring-[#617886] text-[#445b70] font-semibold placeholder-[#617886] transition"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-full bg-[#d6eef4] border-none focus:ring-2 focus:ring-[#617886] text-[#445b70] font-semibold placeholder-[#617886] transition"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-3 rounded-full bg-[#d6eef4] border-none focus:ring-2 focus:ring-[#617886] text-[#445b70] font-semibold placeholder-[#617886] transition"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
          disabled={loading}
        />
        <button
          type="submit"
          className={`w-full bg-[#617886] text-white py-3 rounded-full font-bold shadow hover:bg-[#445b70] transition flex items-center justify-center ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
          ) : null}
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      {/* ...existing layout... */}
    </div>
  );
}