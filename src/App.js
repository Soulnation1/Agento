import { Routes, Route } from "react-router-dom";
import Pages from "./Pages";
import SlideOne from "./slides/SlideOne";
import MemoSignUpForm from "./slides/MemoSignUpForm";
import MemoSignInForm from "./slides/MemoSignInForm";
import MemoForgotPassword from "./slides/MemoForgotPassword";
import Dashboard from "./components/Dashboard";
import Inbox from "./memos/Inbox";
import Compose from "./memos/Compose";
import Sent from "./memos/Sent";
import Drafts from "./memos/Drafts";
import Profile from "./memos/Profile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages />} />
      <Route path="/signup" element={<MemoSignUpForm />} />
      <Route path="/slide-one" element={<SlideOne />} />
      <Route path="/signin" element={<MemoSignInForm />} />
      <Route path="/forgot-password" element={<MemoForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="inbox" element={<Inbox />} />
        <Route path="sent" element={<Sent />} />
        <Route path="drafts" element={<Drafts />} />
        <Route path="compose" element={<Compose />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
