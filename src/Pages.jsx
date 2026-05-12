
import React from "react";
import NavBar from "./navbar/NavBar";
import SlideOne from "./slides/SlideOne";
import SlideTwo from "./slides/SlideTwo";
import SignUpSlide from "./slides/SignUpSlide";
import WithWrapper from "./components/WithWrapper";
import User from "./components/User";
import Product from "./components/Product";
import Tabs from "./components/Tabs";
import StateTest from "./components/StateTest";
import UserCard from "./components/UserCard";
import Parent from "./components/Parent";
import LiveCounter from "./components/LiveCounter";
import ZustandTest from "./components/ZustandTest";

const Pages = () => {
  return (

    <div className="bg-[#eaf4ee] w-full ">
      <NavBar />
      <SlideOne />
      <SlideTwo />
      <div className="flex flex-col gap-2 justify-center items-center bg-red-500 p-10  m-10">
        <WithWrapper Children={<User />} />
        <WithWrapper Children={<Product />} />
      </div>
      <div className="mb-4">
        <Tabs />
      </div>
      <SignUpSlide />
      <div
        className="border border-2 border-black gap-2 flex flex-col justify-center items-center m-10
"
      >
       <div className="m-5 text-center">
         <StateTest />
       </div>
      <div className="flex flex-col gap-2 text-center border-2 border-black m-5 p-5">
         <UserCard/>
       <Parent/>
       {/* Context API test */}
         <LiveCounter/>
         <ZustandTest/>
      </div>
      </div>
    </div>
  );
};

export default Pages;
