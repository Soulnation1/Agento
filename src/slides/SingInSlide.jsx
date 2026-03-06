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
    <div className="bg-[#dce8e0] w-full max-w-[420px] mx-auto p-8 rounded-[30px] shadow-md">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full"
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-full py-3 px-3 rounded-md bg-white text-sm placeholder:text-[#6b86b5] "
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full py-3 px-3 rounded-md bg-white text-sm placeholder:text-[#6b86b5] "
        />

        <button
          type="submit"
          className="w-full py-3 rounded-2xl bg-[#1f3d2b] text-[#f7f5d5] font-semibold text-lg transition duration-300 hover:bg-green-900"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInSlide;