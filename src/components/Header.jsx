import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white text-[20px] flex justify-end h-auto">
      <div className="flex h-auto mr-8">
        {/* 현재 font-lato 적용이 안되고있음 */}
        <button className="px-4 py-6 w-auto hover:text-[#ccc] font-lato">
          About
        </button>
        <button className="px-4 py-6 w-auto hover:text-[#ccc] font-lato">
          Passion
        </button>
        <button className="px-4 py-6 w-auto hover:text-[#ccc] font-lato">
          Experience
        </button>
        <button className="px-4 py-6 w-auto hover:text-[#ccc]">Projects</button>
        <button className="px-4 py-6 w-auto hover:text-[#ccc]">Contact</button>
      </div>
    </div>
  );
};

export default Header;
