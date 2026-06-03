import { useState } from "react";

const SignInSlide = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const handleForm = {
      email,
      password,
    };

    console.log(handleForm);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
  <div className="bg-[#dce8e0] w-full max-w-md mx-4 p-5 sm:p-6 md:p-8 rounded-[30px] shadow-md">
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        className="w-full py-3 px-3 rounded-md bg-white text-sm md:text-[16px] placeholder:text-[#6b86b5]"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="w-full py-3 px-3 rounded-md bg-white text-sm md:text-[16px] placeholder:text-[#6b86b5]"
      />
    

      <button
        type="submit"
        className="w-full py-3 rounded-2xl bg-[#1f3d2b] text-[#f7f5d5] font-semibold text-[16px] md:text-lg hover:bg-green-900 transition"
      >
        Register
      </button>

    </form>
  </div>
</div>
  )
};

export default SignInSlide;
