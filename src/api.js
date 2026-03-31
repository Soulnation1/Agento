import axios from "axios";

const API = axios.create({
  baseURL: "https://memo-management-backend.onrender.com",
});

// ✅ Attach token globally
export const setAuthHeader = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

// AUTH
export const signupUser = (data) => API.post("/api/auth/register", data);
export const signinUser = (data) => API.post("/api/auth/login", data);
export const validateToken = (token) =>
  API.get("/api/auth/validate", {
    headers: { Authorization: `Bearer ${token}` },
  });

// MEMOS
export const getInboxMemos = () => API.get("/api/memo/inbox");
export const getSentMemos = () => API.get("/api/memo/sent");
export const getDraftMemos = () => API.get("/api/memo/drafts");
export const createMemo = (data) => API.post("/api/memo/create", data);

export default API;