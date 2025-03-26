// MobileMenu.jsx
import React from "react";
import { Link } from "react-scroll";
import mainLogo from "../assets/logo.png";

const MobileMenu = ({ menuItems, closeMenu }) => {
  return (
    <div className="absolute right-0 top-0 w-1/2 h-screen bg-[#1F1F1F] flex flex-col items-center text-2xl gap-15 font-sf-mono" onClick={(e) => e.stopPropagation()}>
      <img src={mainLogo} alt="logo" className="w-15 h-15 mt-20 mb-10" />
      {menuItems.map((item) => (
        <Link
          key={item.target}
          to={item.target}
          smooth={true}
          duration={700}
          offset={-250}
          onClick={closeMenu}
        >
          <button>{item.name}</button>
        </Link>
      ))}
    </div>
  );
};

export default MobileMenu;
