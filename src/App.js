import { Routes, Route } from "react-router-dom";
import Pages from "./Pages";
import SlideOne from "./slides/SlideOne";
import SignInSlide from "./slides/SingInSlide";
import MemoSignUpForm from "./slides/MemoSignUpForm";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages />} />
      
      {/* Signup Slides */}
      <Route path="/signup" element={<MemoSignUpForm />} />
      <Route path="/slide-one" element={<SlideOne />} />
      <Route path="/signin" element={<SignInSlide />} />

    </Routes>
  );
}

export default App;
