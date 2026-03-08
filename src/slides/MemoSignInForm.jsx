import { NotebookPen,MoveRight } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
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
    <div className="min-h-screen bg-[#142749]  flex flex-col justify-center items-center">
      <form onSubmit={handleForm}>
        <div className="bg-[#ffffff] rounded-xl p-12 flex flex-col justify-center items-center w-full max-w-md md:max-w-lg">
          <div className="flex flex-col text-center mb-6">
            <NotebookPen
              className="flex justify-center items-center mx-auto mb-2 "
              size={40}
            />
            <h1 className="text-[#1a1a2e] font-bold text-2xl">MemoApp </h1>
            <p className="text-[#8090c2]">Sign into your account</p>
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
            <label
              htmlFor="password"
              className="text-[#756080] text-[12px] font-semibold"
            >
              PASSWORD
            </label>
            <input
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="password"
              className="w-[320px] bg-[#f9f9fd] rounded-md py-3 mb-4 placeholder:text-[#757575] text-base"
              placeholder="**********"
            />
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
            <p className="text-[#8080a0] text-sm text-center">
              Don't have an account?
              <a
                href="/signup"
                className="text-[#7f63ff] font-semibold text-lg px-2 py-1 rounded-lg hover:scale-105 transition"
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
