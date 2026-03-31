import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Pages from "./Pages";
import MemoSignUpForm from "./slides/MemoSignUpForm";
import MemoSignInForm from "./slides/MemoSignInForm";
import MemoForgotPassword from "./slides/MemoForgotPassword";
import Dashboard from "./components/Dashboard";
import Inbox from "./memos/Inbox";
import Compose from "./memos/Compose";
import Sent from "./memos/Sent";
import Drafts from "./memos/Drafts";
import Profile from "./memos/Profile";
import MemoDetails from "./components/MemoDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import { setAuthHeader } from "./api";

function App() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setAuthHeader(token);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Pages />} />
      
      <Route path="/signup" element={<MemoSignUpForm />} />
      <Route path="/signin" element={<MemoSignInForm />} />
      <Route path="/forgot-password" element={<MemoForgotPassword />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="inbox" replace />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="sent" element={<Sent />} />
        <Route path="drafts" element={<Drafts />} />
        <Route path="compose" element={<Compose />} />
        <Route path="profile" element={<Profile />} />
        <Route path="inbox/:id" element={<MemoDetails />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
