import React, { useState } from "react";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
import { Download, FileUser, ExternalLink } from "lucide-react";
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
            I have a hands-on experience with{" "}
            <span className="text-[#64FFDA]">HTML, CSS, JavaScript,</span> and{" "}
            <span className="text-[#64FFDA]">NodeJS</span> while expanding my
            expertise with modern web technologies to build impactful solutions.
          </div>
        </motion.div>

        {/* buttons */}
        <motion.div
          variants={childVariants}
          className="flex flex-wrap gap-x-5 sm:gap-x-7"
        >
          <a
            href="/resume_jamesjo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="font-sf-mono bg-transparent border border-[#64FFDA] text-[#64FFDA] rounded-md px-3 sm:px-6 py-2 text-base  sm:py-3 sm:text-lg md:text-xl"
          >
            {isHovered ? (
              <div className="flex justify-center items-center w-20 h-6 sm:w-24 sm:h-8 animate__animated animate__zoomIn animate__faster">
                <ExternalLink className="w-6 h-6" />
                <span className="text-base"></span>
              </div>
            ) : (
              <div className="flex justify-center items-center w-20 h-6 sm:w-24 sm:h-8 animate__animated animate__fadeIn animate__faster ">
                <FileUser className="mr-1" />
                <span>Resume</span>
              </div>
            )}
          </a>
          <button className="border border-[#ccc] bg-[#ccc] rounded-md w-10 h-10 sm:w-14 sm:h-14 flex justify-center items-center text-xl sm:transform sm:hover:scale-110 transition duration-300">
            <img
              src={emailIcon}
              alt="email"
              className="w-7 h-7"
              onClick={() =>
                window.open(
                  "mailto:dev.jamesjo@gmail.com?subject=Portfolio%20Contact&body=Hi%20James,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20wanted%20to%20reach%20out%20regarding%20[your%20topic%20here]%0D%0A%0D%0ABest%2C%0D%0A[your%20name]"
                )
              }
            />
          </button>
          <a
            href="https://www.linkedin.com/in/dev-james/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-[#ccc] bg-[#ccc] rounded-md w-10 h-10 sm:w-14 sm:h-14 flex justify-center items-center text-xl sm:transform sm:hover:scale-110 transition duration-300">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </button>
          </a>
          <a
            href="https://github.com/jamescakr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-[#ccc] bg-[#ccc] rounded-md w-10 h-10 sm:w-14 sm:h-14 flex justify-center items-center text-xl sm:transform sm:hover:scale-110 transition duration-300">
              <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
            </button>
          </a>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Intro;
