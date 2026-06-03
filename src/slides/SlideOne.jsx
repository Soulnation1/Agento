import { Link } from "react-router-dom";
const SlideOne = () => {
  return (
    <div className="flex flex-col  bg-[#1e3d2b] pt-10 pb-6 mx-6 mt-6 px-6 rounded-[35px]">
      <div className="flex md:flex-row flex-col justify-between  mb-10 px-6 gap-6 w-[100%] ">
        <div className="flex justify-between flex-col overflow-hidden ">
          <h3 className="text-[#9fb3a6] text-sm text-center md:text-left md:text-xl  font-semibold">DESIGN.STRENGHT.GROWTH</h3>
          <h1 className="text-[#eaf4ee] md:text-6xl text-4xl md:text-left text-center max-w-full md:max-w-[400px] ">BUILT FOR BRANDS  THAT ACTUALLY WANT MOMENTUM</h1>
          <p className="text-[#9fb3a6] font-semibold text-center md:text-left max-w-full md:max-w-[400px]">We help ambitious businesses clarify their  message, elevate their design, and convert  attention into measurable growth.</p>
         <div className="flex gap-2 justify-center md:justify-start">
             <Link to="/signup" className="bg-[#dce8e0] text-[#1f3d2b] text-sm md:text-base justify-center items-center px-4 md:px-6 py-2 rounded-full font-semibold transition duration-300 ease-in-out hover:bg-[#c8d9cf]">Sign up</Link>
          <button className="bg-[#1f3d2b] text-[#f7f5e9] px-3 md:px-6 py-2 rounded-full font-semibold border border-[#f7f5e9] border-opacity-5 transition duration-300 ease-in-out hover:bg-[#1a3424]">View our work</button>
         </div>
        </div>
        <div className=""><img src="/Agento1.jpeg" alt="board-meeting" className="w-[600px] h-[500px] rounded-xl" /></div>
      </div>
      <div className="bg-[#9fb3a6] rounded-[25px] flex flex-col text-center  gap-4 md:gap-0 md:flex-row justify-around items-center  text-[25px] py-5  ">
        <p className="text-[#0f172a]">3X CONVERSION LIFT</p>
        <p className="text-[#0f172a]">250+ PROJECTS  DELIVERED</p>
        <p className="text-[#0f172a]">95% CLIENT  SATISFACTION</p>
      </div>
    </div>
  );
};

export default SlideOne;
