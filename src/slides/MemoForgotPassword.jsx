import { KeySquare } from "lucide-react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const MemoForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f1c3f] to-[#18355d] flex items-center justify-center px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg ">
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
            The reset link expires in
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
              {...register("email")}
              placeholder={"alice@example.com"}
              error={errors.email?.message}
            />

            <Button
              type="common"
              size="full"
              title="Send Reset Link"
              disabled={!isValid}
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
