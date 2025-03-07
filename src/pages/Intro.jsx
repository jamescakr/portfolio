import React from "react";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const Intro = () => {
  const containerVariant = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  return (
    <div className="bg-[#121212] text-white h-screen">
      <div className="container mx-auto px-30 w-auto pt-50">
        <motion.div variants={containerVariant} initial="hidden" animate="show">
          <motion.div
            variants={childVariants}
            className="mb-4 text-2xl text-[#64FFDA] font-sf-mono"
          >
            Hi, my name is
          </motion.div>
          <motion.div variants={childVariants} className="text-8xl mb-4 font-inter">
            James Jo
          </motion.div>
          <motion.div variants={childVariants} className="text-6xl mb-12 font-inter">
            Web Developer specializing in
            <span className="ml-2 font-bold bg-gradient-to-l from-[#009E75] to-[#64FFDA] text-transparent bg-clip-text">
              ReactJS
            </span>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="w-3/4 h-auto text-2xl text-[#ccc] mb-10 font-lato"
          >
            <div>
              I have a strong foundation in HTML, CSS and JavaScript, and I’m
              expanding my expertise with modern web technologies to build impactful
              solutions.
            </div>
          </motion.div>

          <motion.div variants={childVariants} className="flex w-128 gap-x-6">
            <button className="border border-[#64FFDA] text-[#64FFDA] font-sf-mono rounded-md w-auto px-4 h-14 flex justify-center items-center text-xl animate-fadeInDown">
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
