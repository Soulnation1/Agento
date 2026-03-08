import { Routes, Route } from "react-router-dom";
import Pages from "./Pages";
import SlideOne from "./slides/SlideOne";
import MemoSignUpForm from "./slides/MemoSignUpForm";
import MemoSignInForm from "./slides/MemoSignInForm";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages />} />
      
      {/* Signup Slides */}
      <Route path="/signup" element={<MemoSignUpForm />} />
      <Route path="/slide-one" element={<SlideOne />} />
      <Route path="/signin" element={<MemoSignInForm />} />

    </Routes>
  );
}

export default App;
