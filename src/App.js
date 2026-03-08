import { Routes, Route } from "react-router-dom";
import Pages from "./Pages";
import SlideOne from "./slides/SlideOne";
import MemoSignUpForm from "./slides/MemoSignUpForm";
import MemoSignInForm from "./slides/MemoSignInForm";
import MemoForgotPassword from "./slides/MemoForgotPassword";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages />} />
      
      {/* Signup Slides */}
      <Route path="/signup" element={<MemoSignUpForm />} />
      <Route path="/slide-one" element={<SlideOne />} />
      <Route path="/signin" element={<MemoSignInForm />} />
      <Route path="/forgot-password" element={<MemoForgotPassword />} />

    </Routes>
  );
}

export default App;
