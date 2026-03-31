<<<<<<< Updated upstream
import { Routes, Route } from "react-router-dom";
=======
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
>>>>>>> Stashed changes
import Pages from "./Pages";
import SlideOne from "./slides/SlideOne";
import MemoSignUpForm from "./slides/MemoSignUpForm";
import MemoSignInForm from "./slides/MemoSignInForm";
import MemoForgotPassword from "./slides/MemoForgotPassword";
<<<<<<< Updated upstream
=======
import Dashboard from "./components/Dashboard";
import Inbox from "./memos/Inbox";
import Compose from "./memos/Compose";
import Sent from "./memos/Sent";
import Drafts from "./memos/Drafts";
import Profile from "./memos/Profile";
import MemoDetails from "./components/MemoDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import { setAuthHeader } from "./api";

>>>>>>> Stashed changes
function App() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setAuthHeader(token);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Pages />} />
      
      {/* Signup Slides */}
      <Route path="/signup" element={<MemoSignUpForm />} />
      <Route path="/slide-one" element={<SlideOne />} />
      <Route path="/signin" element={<MemoSignInForm />} />
      <Route path="/forgot-password" element={<MemoForgotPassword />} />

<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
    </Routes>
  );
}

export default App;
