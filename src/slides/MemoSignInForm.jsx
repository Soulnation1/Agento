import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { NotebookPen, MoveRight, Eye } from "lucide-react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../contexts/AuthContext";
import Modal from "../components/Modal";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const MemoSignInForm = () => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "",
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { signIn } = useAuth();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await signIn(data);

      setModal({
        isOpen: true,
        title: "Sign In Successful",
        message: "You have been signed in successfully.",
        type: "success",
      });


    } catch (err) {
      const errorData = err.response?.data;

      const message =
        errorData?.errors ||
        errorData?.message ||
        err.message ||
        "Sign in failed";

      setModal({
        isOpen: true,
        title: "Sign In Failed",
        message: message,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };
   
  return (
    <div className="min-h-screen bg-[#142749] flex flex-col justify-center items-center px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <div className="bg-[#ffffff] rounded-xl p-6 sm:p-8 md:p-12 flex flex-col justify-center items-center w-full">
          <div className="flex flex-col text-center mb-6">
            <NotebookPen className="mx-auto mb-2" size={40} />
            <h1 className="text-[#1a1a2e] font-bold text-[24px]">MemoApp</h1>
            <p className="text-[#8090c2] text-[14px]">Sign into your account</p>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-[#756080] text-[12px] font-semibold">
              EMAIL ADDRESS
            </label>
            <Input
              {...register("email")}
              size="lg"
              placeholder={"alice@example.com"}
              error={errors.email?.message}
            />

            <label className="text-[#756080] text-[12px] font-semibold">
              PASSWORD
            </label>
            <Input
              {...register("password")}
              size="lg"
              placeholder={"**********"}
              type="password"
              rightIcon={Eye}
              error={errors.password?.message}
            />

            <p className="text-right mb-4">
              <a
                href="/forgot-password"
                className="text-[#7f63ff] font-semibold text-[12px] px-2 py-1 rounded-lg hover:scale-105 transition"
              >
                Forgot Password?
              </a>
            </p>

            <Button
              type="common"
              size="full"
              disabled={!isValid || loading}
              title={
                loading ? (
                  "Signing in..."
                ) : (
                  <>
                    Sign In
                    <MoveRight className="inline-block ml-2 transition scale-105" />
                  </>
                )
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

      <Modal
        isOpen={modal.isOpen}
        title={modal.title}
        message={modal.message}
        type={modal.type}
        onClose={() => {
          setModal({ ...modal, isOpen: false });

          if (modal.type === "success") {
            navigate("/dashboard/inbox", { replace: true }); 
          }
        }}
      />
    </div>
  );
};

export default MemoSignInForm;