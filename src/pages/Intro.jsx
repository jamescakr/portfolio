import React from "react";

const Intro = () => {
  return (
    <div>
      <div className="border border-green-600 container mx-auto px-20 w-auto">
        <div className="mb-4 text-xl">Hi, my name is </div>
        <div className="text-8xl mb-4">James Jo</div>
        <div className="text-7xl mb-4">Web Developer</div>
        <p className="w-128 h-auto border border-red-400 mb-4 text-xl">
          I'm passionate about building seamless and accessible digital solutions.
          Lately, I've been exploring modern web technologies and refining my skills
          while preparing for my first role as a developer!
        </p>
        <div className="border border-green-400 rounded-md w-32 h-14 flex justify-center items-center text-xl">
          Resume
        </div>
      </div>
    </div>
  );
};

export default Intro;
