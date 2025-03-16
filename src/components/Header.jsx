import React, { useState } from "react";
import { motion } from "framer-motion";
import { ListCheck } from "lucide-react";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const containerVariant = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.8,
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
    <div className="fixed top-0 left-0 w-full bg-[#121212] text-[#ccc] text-base sm:text-lg lg:text-xl flex justify-end h-20">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="show"
        className="hidden sm:flex h-auto mr-4 sm:mr-8 lg:mr-16 font-sf-mono"
      >
        <Link to="about" smooth={true} duration={700} offset={-250}>
          <motion.button
            variants={childVariants}
            className="px-4 py-6 w-auto hover:text-[#64FFDA]"
          >
            About
          </motion.button>
        </Link>

        <Link to="skills" smooth={true} duration={700} offset={-250}>
          <motion.button
            variants={childVariants}
            className="px-4 py-6 w-auto hover:text-[#64FFDA]"
          >
            Skills
          </motion.button>
        </Link>
        <Link to="experience" smooth={true} duration={700} offset={-250}>
          <motion.button
            variants={childVariants}
            className="px-4 py-6 w-auto hover:text-[#64FFDA]"
          >
            Experience
          </motion.button>
        </Link>
        <Link to="projects" smooth={true} duration={700} offset={-250}>
          <motion.button
            variants={childVariants}
            className="px-4 py-6 w-auto hover:text-[#64FFDA]"
          >
            Projects
          </motion.button>
        </Link>
        <Link to="contact" smooth={true} duration={700} offset={-250}>
          <motion.button
            variants={childVariants}
            className="px-4 py-6 w-auto hover:text-[#64FFDA]"
          >
            Contact
          </motion.button>
        </Link>
      </motion.div>
      <button onClick={() => setMenuOpen(!menuOpen)} className="block sm:hidden p-5">
        {menuOpen && (
          <div className="absolute right-0 top-18 w-3/5 h-screen bg-[#1F1F1F] flex flex-col flex-end text-2xl gap-15 pt-60 font-sf-mono">
            <button>About</button>
            <button>Skills</button>
            <button>Experience</button>
            <button>Projects</button>
            <button>Contact</button>
          </div>
        )}
        <ListCheck className="w-12 h-12 text-[#64FFDA]" />
      </button>
    </div>
  );
};

export default Header;
