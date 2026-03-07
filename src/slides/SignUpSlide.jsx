import Button from "./../components/Button";
const SignUpSlide = () => {
  return (
    <div className="p-6 bg-[#1f3d2b]  rounded-[25px] mx-10 mb-6 text-center flex flex-col md:flex-row justify-center items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#eaf4ee] text-6xl mt-10 mb-4">
          YOUR NEXT STAGE OF GROWTH STARTS HERE
        </h1>

        <p className="text-[#4f8282] font-semibold">
          Monthly insights on design, strategy, and <br />
          digital performance. Let’s turn ideas into <br />
          execution and execution into results.
        </p>
      </div>

   <Button title="Sign Up" />
    </div>
  );
};

export default SignUpSlide;
