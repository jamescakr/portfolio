import React from "react";

const Layout = ({ children, paddingTop = "pt-0" }) => {
  return (
    <div
      className={`text-white h-screen container mx-auto px-30 w-screen ${paddingTop}`}
    >
      {children}
    </div>
  );
};

export default Layout;
