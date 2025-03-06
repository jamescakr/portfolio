import React from "react";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
import { Download } from "lucide-react";

const Intro = () => {
  return (
    <div className="bg-[#121212] text-white h-screen">
      <div className="container mx-auto px-30 w-auto pt-50">
        <div className="mb-4 text-2xl text-[#64FFDA]">Hi, my name is </div>
        <div className="text-8xl mb-4">James Jo</div>
        <div className="text-6xl mb-12">
          Web Developer specializing in
          <span className="ml-2 font-bold bg-gradient-to-l from-[#009E75] to-[#64FFDA] text-transparent bg-clip-text">
            ReactJS
          </span>
        </div>
        <div className="w-3/4 h-auto text-2xl text-[#ccc]">
          I have a strong foundation in HTML, CSS and JavaScript,
        </div>
        <div className="w-3/4 h-auto mb-4 text-2xl text-[#ccc] mb-10">
          and I’m expanding my expertise with modern web technologies to build
          impactful solutions.
        </div>
        <div className="flex w-128 gap-x-6">
          <button className="border border-[#64FFDA] text-[#64FFDA] rounded-md w-auto px-4 h-14 flex justify-center items-center text-xl">
            <Download className="mr-2 text-current" /> Resume
          </button>
          <button className="border border-[#ccc] bg-[#ccc] rounded-md w-14 h-14 flex justify-center items-center text-xl transform hover:scale-110 transition duration-300">
            <img src={emailIcon} alt="email" className="w-7 h-7" />
          </button>
          <button className="border border-[#ccc] bg-[#ccc] rounded-md w-14 h-14 flex justify-center items-center text-xl transform hover:scale-110 transition duration-300">
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
          </button>
          <button className="border border-[#ccc] bg-[#ccc] rounded-md w-14 h-14 flex justify-center items-center text-xl transform hover:scale-110 transition duration-300">
            <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
