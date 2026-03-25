import axios from "axios";

const API = axios.create({
  baseURL: "https://memo-management-backend.onrender.com",
});

export const signupUser = (data) => {
  return API.post("/api/auth/register", data);
};

export const signinUser = (data) => {
  return API.post("/api/auth/login", data);
};

export const forgotPassword = (data) => {
  return API.post("/api/auth/forgot-password", data);
};
