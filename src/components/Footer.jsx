import React from "react";
import { ChevronUp } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="pb-10 flex flex-col justify-center items-center text-[#ccc]">
      <Link to="home" smooth={true} duration={1000}>
        <div>
          <ChevronUp className="w-15 h-15 cursor-pointer" strokeWidth={1.3} />
        </div>
      </Link>

      <div className="flex justify-center items-center text-md font-sf-mono font-light pt-5">
        <span className="text-2xl font-light mr-2">©</span> James Jo 2025
      </div>
    </div>
  );
};

export default Footer;
