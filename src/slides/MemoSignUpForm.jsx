import { NotebookPen,Mail,User, Eye, } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
const MemoSignUpForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
  };
  console.log(form);

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
          
            <Input
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              type="text"
              value={form.fullName}
             size={"lg"}
              placeholder="John Wick"
              label="FULL NAME"
              leftIcon={User}
              
            />

              
            <Input
              size="lg"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="johnwick@gmail.com"
              label = "EMAIL ADDRESS"
              leftIcon={Mail}
             
            />

            <label
              htmlFor="password"
              className="text-[#756080] text-xs font-semibold"
            >
              PASSWORD
              <span className="ml-1 text-[#b0b0c0]">(MIN 6 CHARACTERS)</span>
            </label>
             <Input
             value={form.password}
              size="lg"
              type="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder={"**********"}
              rightIcon={Eye}
            />

            <Button
              type="common"
              title="Create Account"
              size="full"
            />

            <p className="text-[#8080a0] text-sm text-center mt-4">
              Already have an account?
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
