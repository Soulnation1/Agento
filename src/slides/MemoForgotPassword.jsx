import { KeySquare } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
const MemoForgotPassword = () => {
  const [form, setForm] = useState({
    email: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
  };
  console.log(form);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f1c3f] to-[#18355d] flex items-center justify-center px-4">
      <form onSubmit={handleForm} className="w-full max-w-md">
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg">
          <div className="text-center mb-6">
            <KeySquare className="mx-auto mb-3 text-[#f5b400]" size={42} />
            <h1 className="text-[#1a1a2e] font-bold text-xl md:text-2xl">
              Forgot Password?
            </h1>
            <p className="text-[#8090c2] text-sm mt-1">
              Enter your email and we'll send you a reset link.
            </p>
          </div>

          <div className="bg-[#eef0f8] text-[#5b5fc7] text-sm rounded-md px-4 py-3 mb-6">
            The reset link expires in{" "}
            <span className="font-semibold">15 minutes</span>.
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="text-[#756080] text-xs font-semibold mb-1"
            >
              EMAIL ADDRESS
            </label>

            <Input
              size="lg"
              value={""}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={"alice@example.com"}
            />

            <Button
              type="common"
              size="full"
              title="Send Reset Link"
            />

            <p className="text-center text-sm text-[#8080a0] mt-4">
              Remembered it?{" "}
              <a
                href="/signin"
                className="text-[#6f6df4] font-medium hover:underline"
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
