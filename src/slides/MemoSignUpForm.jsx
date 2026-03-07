import { NotebookPen } from "lucide-react";
import { useState, useEffect } from "react";
const MemoSignUpForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("memoUser"));
    if (savedUser) {
      setForm(savedUser);
    }
  }, []);
  const handleForm = (e) => {
    e.preventDefault();
    localStorage.setItem("memoUser", JSON.stringify(form));
  };

  return (
    <div className="min-h-screen bg-[#142749]  flex flex-col justify-center items-center">
      <form onSubmit={handleForm}>
        <div className="bg-[#ffffff] rounded-xl p-10 flex flex-col justify-center items-center ">
          <div className="flex flex-col text-center mb-6">
            <NotebookPen
              className="flex justify-center items-center mx-auto mb-2 "
              size={40}
            />
            <h1 className="text-[#1a1a2e] font-bold text-2xl">MemoApp </h1>
            <p className="text-[#8090c2]">Create a new account</p>
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="fullName"
              className="text-[#756080] text-[12px] font-semibold"
            >
              FULL NAME
            </label>
            <input
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              type="text"
              className="bg-[#f9f9fd] w-80 rounded-md px-2 py-1 mb-4 placeholder:text-[#757575] text-sm"
              placeholder="Okunade sherif"
            />

            <label
              htmlFor="email"
              className="text-[#756080] text-[12px] font-semibold"
            >
              EMAIL ADDRESS
            </label>
            <input
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              className="bg-[#f9f9fd] rounded-md py-1 mb-4 placeholder:text-[#757575] text-sm"
              placeholder="lawdshev@gmail.com"
            />
            <label
              htmlFor="password"
              className="text-[#756080] text-[12px] font-semibold"
            >
              PASSWORD
              <span className="text-[#756080]">(MIN 6 CHARACTERS)</span>{" "}
            </label>
            <input
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="password"
              className="bg-[#f9f9fd] rounded-md py-1 mb-4 placeholder:text-[#757575] text-sm"
              placeholder="**********"
            />
            <button className="bg-[#9680fb] py-2 rounded-md mb-3 text-[#ffffff] hover:bg-[#7f63ff] hover:scale-105 transition ">
              create account
            </button>
            <p className="text-[#8080a0] text-sm text-center">
              Already have an account?{" "}
             <a href="/signin" className="text-[#7f63ff] font-semibold hover:scale-105 transition">
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
