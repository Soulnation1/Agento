import React from "react";

const SlideTwo = () => {
  return (
    <div className="flex flex-col mt-[35px] justify-center items-center">
      <p className="text-[#e86f3c] font-semibold mb-[40px]">
        Strategy First. Design Driven. Results Focused
      </p>
      <h1 className="text-[#0f172a] text-[45px] text-center mb-[40px]">BUILT FOR BRANDS <br /> THAT WANT <br /> MOMENTUM</h1>
      <div className="flex flex-col  gap-3 mb-3">
        <input
          type="text"
          className="py-[5px]  w-[300px] font-semibold  bg-[#ffffff] border-[1px] rounded-md border-[#8b8b8b]"
          placeholder="Enter your name "
        />
        <input
          type="text"
          className="py-[5px] w-[300px] font-semibold bg-[#ffffff] border-[1px] rounded-md border-[#8b8b8b]"
          placeholder="Enter your email "
        />
      </div>
                  <button className="bg-[#1f3d2b] text-[#f7f5d5]  w-[300px] px-6 py-3 rounded-2xl font-semibold text-xl transition duration-300 ease-in-out hover:bg-[#c8d9cf] mb-[40px]">start your project</button>
                  <p className="text-[#7b9793]  mb-[20px] text-center ">We help ambitious businesses clarify their message,<br /> elevate their design, and convert attention into <br /> measurable growth.</p>
                  <a href="/" className="rounded-full bg-[#dce8e0] text-[#1f3d2b] px-8 font-semibold py-4 mb-[20px]">Explore Our Approach</a>

    </div>
  );
};

export default SlideTwo;
