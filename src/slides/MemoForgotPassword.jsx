import { NotebookPen,MoveRight, KeySquare } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
const MemoForgotPassword = () => {
  const [form, setForm] = useState({
    email: "",

  });

  const handleForm = (e) => {
    e.preventDefault();
    localStorage.setItem("memoUser", JSON.stringify(form));
  };

  return (
    <div className="min-h-screen bg-[#142749]  flex flex-col justify-center items-center">
      <form onSubmit={handleForm}>
        <div className="bg-[#ffffff] rounded-xl p-12 flex flex-col justify-center items-center w-full max-w-md md:max-w-lg">
          <div className="flex flex-col text-center mb-6">
            <KeySquare
              className="flex justify-center items-center mx-auto mb-2 "
              size={40}
            />
            <h1 className="text-[#1a1a2e] font-bold text-2xl">Forgot Password? </h1>
            <p className="text-[#8090c2]">Enter your email and we'll send you a reset link.</p>
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="email"
              className="text-[#756080] text-[12px] font-semibold"
            >
              EMAIL ADDRESS
            </label>
            <input
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              className="w-[320px] bg-[#f9f9fd] rounded-md py-3 mb-4 placeholder:text-[#757575] text-base"
              placeholder="Johnwick@gmail.com"
            />
           
            <Button
              type="common"
              size="regular"
              className="w-full"
              title={
                "Send Reset Link"
              }
            />
            <p className="text-[#8080a0] text-sm text-center">
              Remembered it?
              <a
                href="/signup"
                className="text-[#7f63ff] font-semibold text-lg px-2 py-1 rounded-lg hover:scale-105 transition"
              >
               Back to Login
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MemoForgotPassword;
