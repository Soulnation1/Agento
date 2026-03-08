import { Link } from "react-router-dom";
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
      <div className="flex gap-2">
                <Link to="/signup" className="bg-[#1e3d2b] text-[#f7f5f6] px-4 py-3 text-xl rounded-full hover:bg-green-900 hover:scale-105 transition ">Register</Link>
                <Link to="/signin" className="bg-[#1e3d2b] text-[#f7f5f6] px-4 py-3 text-xl rounded-full hover:bg-green-900 hover:scale-105 transition ">Sign In</Link>

      </div>
     </div>
    </div>
  );
};

export default NavBar;
