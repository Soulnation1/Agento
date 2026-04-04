import axios from "axios";
import {
  mockDraftMemos,
  mockInboxMemos,
  mockSentMemos,
} from "./data/sampleMemos";

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

const fallbackResponse = (result) => ({
  data: {
    data: {
      result,
    },
  },
});

const handleFetch = async (call, fallbackData) => {
  try {
    const res = await call();
    const result = res?.data?.data?.result;

    if (Array.isArray(result) && result.length > 0) {
      return res;
    }

    return fallbackResponse(fallbackData);
  } catch (err) {
    console.warn("API fetch failed, using mock data:", err.message);
    return fallbackResponse(fallbackData);
  }
};

// MEMOS
export const getInboxMemos = () =>
  handleFetch(() => API.get("/api/memo/inbox"), mockInboxMemos);
export const getSentMemos = () =>
  handleFetch(() => API.get("/api/memo/sent"), mockSentMemos);
export const getDraftMemos = () =>
  handleFetch(() => API.get("/api/memo/drafts"), mockDraftMemos);

export const createMemo = async (data) => {
  try {
    return await API.post("/api/memo/create", data);
  } catch (err) {
    console.warn(
      "API create memo failed, saving to mock sent memos:",
      err.message,
    );

    const memo = {
      _id: `mock-${Date.now()}`,
      title: data.title || "Untitled memo",
      content: data.content || "",
      createdAt: new Date().toISOString(),
    };

    mockSentMemos.unshift(memo);
    return fallbackResponse([memo]);
  }
};

export default API;
