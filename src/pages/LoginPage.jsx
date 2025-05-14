// pages/LoginPage.jsx
import LoginForm from "../components/LoginForm";
import { login } from "../services/authService";

export default function LoginPage() {
  const handleLogin = async (credentials) => {
    try {
      const data = await login(credentials);
      localStorage.setItem("token", data.token); // Save JWT
      alert("Login successful");
      // Navigate to home or dashboard
    } catch (error) {
      alert("Login failed");
    }
  };

  return <LoginForm onLogin={handleLogin} />;
}
