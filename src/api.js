import axios from "axios";

const API = axios.create({
  baseURL: "https://memo-management-backend.onrender.com",
});

export const setAuthHeader = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

export const signupUser = (data) => {
  return API.post("/api/auth/register", data);
};

export const signinUser = (data) => {
  return API.post("/api/auth/login", data);
};

export const validateToken = (token) => {
  return API.get("/api/auth/validate", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const forgotPassword = (data) => {
  return API.post("/api/auth/forgot-password", data);
};
