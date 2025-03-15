import React from "react";

const Layout = ({ children, paddingTop = "pt-0" }) => {
  return (
    <div
      className={`text-white w-full min-h-screen container mx-auto px-4 md:px-10 lg:px-20 ${paddingTop}`}
    >
      {children}
    </div>
  );
};

export default Layout;
