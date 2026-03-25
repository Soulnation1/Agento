import React from "react";
import NavBar from "./navbar/NavBar";
import SlideOne from "./slides/SlideOne";
import SlideTwo from "./slides/SlideTwo";
import SignUpSlide from "./slides/SignUpSlide";
// import SignInSlide from './slides/SingInSlide'

const Pages = () => {
  return (
    <div className="bg-[#eaf4ee] w-full ">
      <NavBar />
      <SlideOne />
      <SlideTwo />
      <SignUpSlide />
     
    </div>
  );
};

export default Pages;
