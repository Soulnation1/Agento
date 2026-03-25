import { NotebookPen, Mail, User, Eye } from "lucide-react";
import Button from "../components/Button";
import Input from "../components/Input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const MemoSignUpForm = () => {
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
    <div className="min-h-screen bg-[#142749] flex items-center justify-center px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <div className="bg-white rounded-xl p-6 md:p-10 flex flex-col items-center">
          <div className="flex flex-col text-center mb-6">
            <NotebookPen className="mx-auto mb-2  " size={36} />
            <h1 className="text-[#1a1a2e] font-bold text-xl md:text-2xl">
              MemoApp
            </h1>
            <p className="text-[#8090c2] text-sm">Create a new account</p>
          </div>

          <div className="flex flex-col w-full">
            <Input
              {...register("fullName")}
              type="text"
              size="lg"
              placeholder="John Wick"
              label="FULL NAME"
              leftIcon={User}
              error={errors.fullName?.message}
            />

            <Input
              {...register("email")}
              size="lg"
              placeholder="johnwick@gmail.com"
              label="EMAIL ADDRESS"
              leftIcon={Mail}
              error={errors.email?.message}
            />

            <Input
              {...register("password")}
              size="lg"
              type="password"
              placeholder="**********"
              label="PASSWORD"
              rightIcon={Eye}
              error={errors.password?.message}
            />

            <Button
              type="common"
              title="Create Account"
              size="full"
              disabled={!isValid}
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
