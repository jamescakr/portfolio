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
          className="mb-4 text-2xl text-[#64FFDA] font-sf-mono"
        >
          Hi, my name is
        </motion.div>
        <motion.div variants={childVariants} className="text-8xl mb-4 font-inter">
          James Jo
        </motion.div>
        <motion.div variants={childVariants} className="text-6xl mb-12 font-inter">
          Web Developer specializing in
          <span className="ml-3 font-bold bg-gradient-to-r from-[#009E75] to-[#64FFDA] text-transparent bg-clip-text">
            React
          </span>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="w-3/4 h-auto text-2xl text-[#ccc] mb-10 font-lato"
        >
          <div>
            I have a strong foundation in HTML, CSS and JavaScript, and I’m expanding
            my expertise with modern web technologies to build impactful solutions.
          </div>
        </motion.div>

        <motion.div variants={childVariants} className="flex w-128 gap-x-6">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="font-sf-mono bg-transparent border border-[#64FFDA] text-[#64FFDA] text-xl rounded-md w-34 px-4 h-14 flex justify-center items-center"
          >
            {isHovered ? (
              <Download className="w-22 h-8 animate__animated animate__zoomIn animate__faster" />
            ) : (
              <div className="animate__animated animate__fadeInUp animate__faster flex items-center">
                <FileUser className="mr-1" />
                <span>Resume</span>
              </div>
            )}
          </button>
          <button className="border border-[#ccc] bg-[#ccc] rounded-md w-14 h-14 flex justify-center items-center text-xl transform hover:scale-110 transition duration-300">
            <img src={emailIcon} alt="email" className="w-7 h-7" />
          </button>
          <a
            href="https://www.linkedin.com/in/dev-james/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-[#ccc] bg-[#ccc] rounded-md w-14 h-14 flex justify-center items-center text-xl transform hover:scale-110 transition duration-300">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </button>
          </a>
          <a
            href="https://github.com/jamescakr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-[#ccc] bg-[#ccc] rounded-md w-14 h-14 flex justify-center items-center text-xl transform hover:scale-110 transition duration-300">
              <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
            </button>
          </a>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Intro;
