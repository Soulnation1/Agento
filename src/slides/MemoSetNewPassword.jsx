import { Security } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
const MemoSetNewPassword = () => {
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
            <Security className="mx-auto mb-2" size={40} />
            <h1 className="text-[#1a1a2e] font-bold text-[24px]">MemoApp</h1>
            <p className="text-[#8090c2] text-[14px]">Sign into your account</p>
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="password"
              className="text-[#756080] text-[12px] font-semibold"
            >
              NEW PASSWORD
            </label>
              <Input
              size="common"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder={"New password"}
            />
            <label
              htmlFor="password"
              className="text-[#756080] text-[12px] font-semibold"
            >
             CONFIRM PASSWORD
            </label>
            <Input
              size="common"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder={"Confirm password"}
            />

            <Button
              type="common"
              size="regular"
              className="w-full"
              title={
                <>
                Reset Password
                </>
              }
            />

          
          </div>
        </div>
      </form>
    </div>
  );
};

export default MemoSetNewPassword;
