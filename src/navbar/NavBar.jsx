import React from "react";

const NavBar = () => {
  return (
    <div className="">
     <div className="flex flex-col md:flex-row justify-between items-center pt-[40px] mx-[60px]" >
         <div>
        <img src="/Agentologo.png" alt="" className="h-[20px] w-[100px] " />
      </div>
      <div className="flex flex-col md:flex-row gap-4 my-4 md:my-0 md:gap-16">
        <a href="/" className="text[#10172a] text-[20px] font-semibold md:text-[12px] hover:text-[#1e3d2b] hover:scale-105 transition ">
          Home
        </a>
        <a href="/" className="text[#10172a] text-[20px]  font-semibold md:text-[12px] hover:text-[#1e3d2b] hover:scale-105 transition ">
          Services
        </a>
        <a href="/" className="text[#10172a] text-[20px] font-semibold md:text-[12px] hover:text-[#1e3d2b] hover:scale-105 transition ">
          Work
        </a>
        <a href="/" className="text[#10172a] text-[20px] font-semibold md:text-[12px] hover:text-[#1e3d2b] hover:scale-105 transition ">
          Pricing
        </a>
        <a href="/" className="text[#10172a] text-[20px] font-semibold md:text-[12px] hover:text-[#1e3d2b] hover:scale-105 transition ">
          Insights
        </a>
      </div>
      <div>
                <button className="bg-[#1e3d2b] text-[#f7f5f6] px-14 py-4 text-2xl rounded-full hover:bg-green-900 hover:scale-105 transition ">Start a project</button>

      </div>
     </div>
    </div>
  );
};

export default NavBar;
