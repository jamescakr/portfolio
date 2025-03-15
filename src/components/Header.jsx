import React from "react";
import { motion } from "framer-motion";
import { ListCheck } from "lucide-react";

const Header = () => {
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
    <div className="fixed top-0 left-0 w-full bg-[#121212] text-[#ccc] text-base sm:text-lg lg:text-xl flex justify-end h-auto">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="show"
        className="hidden sm:flex h-auto mr-4 sm:mr-8 lg:mr-16 font-sf-mono"
      >
        <motion.button
          variants={childVariants}
          className="px-4 py-6 w-auto hover:text-[#64FFDA]"
        >
          About
        </motion.button>
        <motion.button
          variants={childVariants}
          className="px-4 py-6 w-auto hover:text-[#64FFDA]"
        >
          Skills
        </motion.button>
        <motion.button
          variants={childVariants}
          className="px-4 py-6 w-auto hover:text-[#64FFDA]"
        >
          Experience
        </motion.button>
        <motion.button
          variants={childVariants}
          className="px-4 py-6 w-auto hover:text-[#64FFDA]"
        >
          Projects
        </motion.button>
        <motion.button
          variants={childVariants}
          className="px-4 py-6 w-auto hover:text-[#64FFDA]"
        >
          Contact
        </motion.button>
      </motion.div>
      <button className="block sm:hidden text-[#64FFDA] p-5">
        <ListCheck className="w-12 h-12" />
      </button>
    </div>
  );
};

export default Header;
