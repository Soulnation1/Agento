import { useState } from "react";
const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const handleForm = {
      firstName,
      lastName,
      email,
      password,
    };

    console.log(handleForm);
  };

  return (
    <div className="p-6 bg-[#1f3d2b] rounded-[25px] mx-6 mb-6 flex flex-col md:flex-row justify-between">
      <div className="bg-[#dce8e0] w-full  p-8 rounded-[30px] shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="First Name"
            className="w-full py-3 px-3 rounded-md bg-white text-sm placeholder:text-[#6b86b5] outline-none focus:ring-2 focus:ring-[#1f3d2b]"
          />

          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Last Name"
            className="w-full py-3 px-3 rounded-md bg-white text-sm placeholder:text-[#6b86b5] outline-none focus:ring-2 focus:ring-[#1f3d2b]"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full py-3 px-3 rounded-md bg-white text-sm placeholder:text-[#6b86b5] outline-none focus:ring-2 focus:ring-[#1f3d2b]"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full py-3 px-3 rounded-md bg-white text-sm placeholder:text-[#6b86b5] outline-none focus:ring-2 focus:ring-[#1f3d2b]"
          />

          <button
            type="submit"
            className="w-full py-3 text-center rounded-2xl bg-[#1f3d2b] text-[#f7f5d5] font-semibold text-lg transition duration-300 hover:bg-green-900"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
