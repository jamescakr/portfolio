import React from "react";

const SectionHeader = ({ header }) => {
  return (
    <div>
      <div className="flex items-center pb-15">
        <h1 className="text-4xl font-semibold tracking-wide bg-gradient-to-r from-[#009E75] to-[#64FFDA] text-transparent bg-clip-text ml-3">
          {`${header}`}
        </h1>
        <div className="flex-grow ml-10 h-px bg-gradient-to-r from-gray-900 via-gray-400 to-[#64FFDA]"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
