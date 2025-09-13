// src/api.js
import axios from "axios";

// Base URL of your Django backend
const API_URL = "http://127.0.0.1:8000/api";

// Create an axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// --- AUTH FUNCTIONS ---

export async function registerUser(userData) {
  const res = await api.post("/users/auth/user_register/", userData);
  return res.data;
}

export async function login(userData) {
  const res = await api.post("/users/auth/login/", userData);
  return res.data;
}

export async function forgotPassword(userData) {
  const res = await api.post("/users/auth/forgot_password/", userData);
  return res.data;
}

export async function registerUserOtp(userData) {
  const res = await api.post("/users/auth/register_otp_verify/", userData);
  return res.data;
}

export async function loginOtp(userData) {
  const res = await api.post("/users/auth/login_otp_verify/", userData);
  return res.data;
}

export async function forgotPasswordOtp(userData) {
  const res = await api.post("/users/auth/forgot_password_verify/", userData);
  return res.data;
}

export async function google(userData) {
  const res = await api.post("/users/auth/google_callback/", userData);
  return res.data;
}

export async function ChangePassword(userData) {
  const res = await api.post("/users/auth/change_password/", userData);
  return res.data;
}