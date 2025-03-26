import React, { useState } from "react";
import { motion } from "framer-motion";
import { ListCheck } from "lucide-react";
import { Link } from "react-scroll";
import mainLogo from "../assets/logo.png";
import MobileMenu from "./MobileMenu";

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

  const menuItems = [
    { name: "About", target: "about" },
    { name: "Skills", target: "skills" },
    { name: "Experience", target: "experience" },
    { name: "Projects", target: "projects" },
    { name: "Contact", target: "contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-[#161616] text-[#ccc] sm:text-base md:text-lg lg:text-xl h-20 z-50">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="show"
        className="hidden sm:flex justify-between items-center h-auto mr-4 sm:mr-8 lg:mr-16 font-sf-mono"
      >
        <motion.img
          src={mainLogo}
          variants={childVariants}
          onClick={() => window.location.reload()}
          className="w-11 h-11 md:w-13 md:h-13 ml-15 mt-1 cursor-pointer"
        />
        <div className="flex gap-x-5 md:gap-x-7 lg:gap-x-10">
          {menuItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              smooth={true}
              duration={500}
              offset={-250}
            >
              <motion.button
                variants={childVariants}
                className="py-6 w-auto hover:text-[#64FFDA]"
              >
                {item.name}
              </motion.button>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <div className="block sm:hidden p-5">
        <div onClick={() => setMenuOpen(!menuOpen)}>
          <ListCheck className="w-12 h-12 text-[#64FFDA]" />
        </div>
        {menuOpen && (
          <div className="fixed inset-0 z-50" onClick={()=> setMenuOpen(false)}>
             <MobileMenu menuItems={menuItems} closeMenu={() => setMenuOpen(false)} />
          </div>
         
        )}
      </div>
    </div>
  );
};

export default Header;
