import { NotebookPen, MoveRight } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
const MemoSignInForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    localStorage.setItem("memoUser", JSON.stringify(form));
  };

  return (
    <div className="min-h-screen bg-[#142749] flex flex-col justify-center items-center px-4">
      <form onSubmit={handleForm} className="w-full max-w-md">
        <div className="bg-[#ffffff] rounded-xl p-6 sm:p-8 md:p-12 flex flex-col justify-center items-center w-full">
          <div className="flex flex-col text-center mb-6">
            <NotebookPen className="mx-auto mb-2" size={40} />
            <h1 className="text-[#1a1a2e] font-bold text-[24px]">MemoApp</h1>
            <p className="text-[#8090c2] text-[14px]">Sign into your account</p>
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="text-[#756080] text-[12px] font-semibold"
            >
              EMAIL ADDRESS
            </label>
            <input
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              className="w-full bg-[#f9f9fd] rounded-md py-3 px-3 mb-4 placeholder:text-[#757575] text-[16px]"
              placeholder="Johnwick@gmail.com"
            />
            <label
              htmlFor="password"
              className="text-[#756080] text-[12px] font-semibold"
            >
              PASSWORD
            </label>
            <Input
                         size="medium"
                         onChange={(e) => setForm({ ...form, email: e.target.value })}
                         placeholder={"alice@example.com"}
                         />
            {/* <input
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="password"
              className="w-full bg-[#f9f9fd] rounded-md py-3 px-3 mb-4 placeholder:text-[#757575] text-[16px]"
              placeholder="**********"
            /> */}
            <p className="  text-right mb-4">
              <a
                href="/forgot-password"
                className="text-[#7f63ff] font-semibold text-[12px] px-2 py-1 rounded-lg hover:scale-105 transition"
              >
                Forgot Password?
              </a>
            </p>
            <Button
              type="common"
              size="regular"
              className="w-full"
              title={
                <>
                  Sign In
                  <MoveRight className="inline-block ml-2" />
                </>
              }
            />

            <p className="text-[#8080a0] text-[14px] text-center mt-4">
              Don't have an account?
              <a
                href="/signup"
                className="text-[#7f63ff] font-semibold text-[16px] px-2 py-1 rounded-lg hover:scale-105 transition"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MemoSignInForm;
