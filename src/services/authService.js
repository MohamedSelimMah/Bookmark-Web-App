import axios from "axios";

const API_URL = "http://localhost:8000/api/auth/"; // Adjust if your backend URL is different

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}login/`, { email, password });
  return response.data; // Should return { access, refresh }
};

export const register = async (email, password) => {
  const response = await axios.post(`${API_URL}register/`, { email, password });
  return response.data;
};