import { NotebookPen } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
const MemoSignUpForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    localStorage.setItem("memoUser", JSON.stringify(form));
  };

  return (
    <div className="min-h-screen bg-[#142749] flex items-center justify-center px-4">
      <form onSubmit={handleForm} className="w-full max-w-md">
        <div className="bg-white rounded-xl p-6 md:p-10 flex flex-col items-center">
          <div className="flex flex-col text-center mb-6">
            <NotebookPen className="mx-auto mb-2" size={36} />
            <h1 className="text-[#1a1a2e] font-bold text-xl md:text-2xl">
              MemoApp
            </h1>
            <p className="text-[#8090c2] text-sm">Create a new account</p>
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="fullName"
              className="text-[#756080] text-xs font-semibold"
            >
              FULL NAME
            </label>
            <input
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              type="text"
              className="bg-[#f9f9fd] w-full rounded-md px-3 py-2 mb-4 placeholder:text-[#757575] text-sm"
              placeholder="John Wick"
            />

            <label
              htmlFor="email"
              className="text-[#756080] text-xs font-semibold"
            >
              EMAIL ADDRESS
            </label>
            <input
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              className="bg-[#f9f9fd] w-full rounded-md px-3 py-2 mb-4 placeholder:text-[#757575] text-sm"
              placeholder="johnwick@gmail.com"
            />

            <label
              htmlFor="password"
              className="text-[#756080] text-xs font-semibold"
            >
              PASSWORD
              <span className="ml-1">(MIN 6 CHARACTERS)</span>
            </label>
            <input
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="password"
              className="bg-[#f9f9fd] w-full rounded-md px-3 py-2 mb-5 placeholder:text-[#757575] text-sm"
              placeholder="**********"
            />

            <Button
              type="common"
              title="Create Account"
              size="regular"
              className="w-full"
            />

            <p className="text-[#8080a0] text-sm text-center mt-4">
              Already have an account?{" "}
              <a
                href="/signin"
                className="text-[#7f63ff] font-semibold hover:opacity-80 transition"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MemoSignUpForm;
