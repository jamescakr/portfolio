import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  const containerVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  // 현재 버튼에 모션이 적용 안되는상황. 코드는 작성완료했음
  const childVariants = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#121212] text-[#ccc] text-[20px] flex justify-end h-auto">
      <div className="flex h-auto mr-8 font-sf-mono">
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
          Passion
        </motion.button>
        <motion.button
          variants={childVariants}
          className="px-4 py-6 w-auto hover:text-[#64FFDA]"
        >
          Experience
        </motion.button>
        <motion.button
          variant={childVariants}
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
      </div>
    </div>
  );
};

export default Header;
