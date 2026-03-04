import React from "react";

const NavBar = () => {
  return (
    <div className="">
     <div className="flex flex-rows justify-between items-center pt-20 mx-[100px]" >
         <div>
        <img src="/Agentologo.png" alt="" className="h-[20px] w-[100px] " />
      </div>
      <div className="flex gap-20">
        <a href="/" className="text[#10172a] font-[12px] ">
          Home
        </a>
        <a href="/" className="text[#10172a] font-[12px] ">
          Services
        </a>
        <a href="/" className="text[#10172a] font-[12px] ">
          Work
        </a>
        <a href="/" className="text[#10172a] font-[12px] ">
          Pricing
        </a>
        <a href="/" className="text[#10172a] font-[12px] ">
          Insights
        </a>
      </div>
      <div>
                <button className="bg-[#1e3d2b] text-[#f7f5f6] px-20 py-4 text-2xl rounded-full">Start a project</button>

      </div>
     </div>
    </div>
  );
};

export default NavBar;
