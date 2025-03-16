import React from "react";

const Layout = ({ children, paddingTop = "pt-0" }) => {
  return (
    <div
      className={`text-white w-full min-h-screen lg:container mx-auto px-10 ${paddingTop}`}
    >
      {children}
    </div>
  );
};

export default Layout;
