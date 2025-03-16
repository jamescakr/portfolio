import React, { useState } from "react";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
import { Download, FileUser } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const Intro = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariant = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 1.8,
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
    <Layout paddingTop="pt-50">
      <motion.div variants={containerVariant} initial="hidden" animate="show">
        <motion.div
          variants={childVariants}
          className="mb-4 text-base sm:text-xl text-[#64FFDA] font-sf-mono"
        >
          Hello, my name is
        </motion.div>
        <motion.div
          variants={childVariants}
          className="font-inter font-bold text-responsive-lg"
        >
          James Jo
        </motion.div>
        <motion.div
          variants={childVariants}
          className="mb-8 lg:mb-12 font-inter font-extrabold text-responsive-sm"
        >
          Web Developer specializing in
          <span className="ml-3 font-bold bg-gradient-to-r from-[#009E75] to-[#64FFDA] text-transparent bg-clip-text">
            React
          </span>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="max-w-3xl text-lg sm:text-xl lg:text-2xl text-[#C0C0C0] mb-10 font-lato"
        >
          <div>
            I have a strong foundation in{" "}
            <span className="text-[#64FFDA]">HTML, CSS, JavaScript,</span> and{" "}
            <span className="text-[#64FFDA]">NodeJS</span> while expanding my
            expertise with modern web technologies to build impactful solutions.
          </div>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="flex flex-wrap gap-x-5 sm:gap-x-7"
        >
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="font-sf-mono bg-transparent border border-[#64FFDA] text-[#64FFDA] rounded-md px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg md:text-xl"
          >
            {isHovered ? (
              <div className="w-34 h-8 animate__animated animate__zoomIn animate__faster flex items-center">
                <Download className="mr-1" />
                <span className="text-lg">Download</span>
              </div>
            ) : (
              <div className="animate__animated animate__fadeIn animate__faster flex items-center">
                <FileUser className="mr-1" />
                <span>Resume</span>
              </div>
            )}
          </button>
          <button className="border border-[#ccc] bg-[#ccc] rounded-md w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center text-xl sm:transform sm:hover:scale-110 transition duration-300">
            <img src={emailIcon} alt="email" className="w-7 h-7" />
          </button>
          <a
            href="https://www.linkedin.com/in/dev-james/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-[#ccc] bg-[#ccc] rounded-md w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center text-xl sm:transform sm:hover:scale-110 transition duration-300">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </button>
          </a>
          <a
            href="https://github.com/jamescakr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-[#ccc] bg-[#ccc] rounded-md w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center text-xl sm:transform sm:hover:scale-110 transition duration-300">
              <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
            </button>
          </a>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Intro;
