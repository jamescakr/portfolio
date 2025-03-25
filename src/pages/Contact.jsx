import React, { useState } from "react";
import Layout from "../components/Layout";
import { Send, MailOpen } from "lucide-react";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Layout paddingTop="pt-50">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="text-[#64FFDA] pt-20 pb-10 md:pb-20">
          <Send className="w-16 h-16 text-[#64FFDA]" strokeWidth={1} />
        </div>
        <div
          id="contact"
          className="text-4xl md:text-5xl lg:text-6xl font-sf-mono font-bold mb-5 lg:mb-10"
        >
          Get In Touch
        </div>
        <div className="text-base md:text-lg lg:text-xl font-sf-mono max-w-3xl mx-auto">
          <div>
            I'm currently{" "}
            <span className="text-[#64FFDA]">
              open to new web development opportunities
            </span>
            . Whether it’s a job opportunity or just want to say hi,
            <span className="block">don’t hesitate to reach out!</span>
          </div>
          <div></div>
        </div>
        <button
          className="w-40 h-14 md:w-50 md:h-18 rounded-lg border border-[#64FFDA] text-[#64FFDA] text-md md:text-lg font-sf-mono mt-15 md:mt-25 flex justify-center items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() =>
            window.open(
              "mailto:dev.jamesjo@gmail.com?subject=Portfolio%20Contact&body=Hi%20James,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20wanted%20to%20reach%20out%20regarding%20[your%20topic%20here]%0D%0A%0D%0ABest%2C%0D%0A[your%20name]"
            )
          }
        >
          {isHovered ? (
            <MailOpen className="w-8 h-8 animate__animated animate__zoomIn animate__faster" />
          ) : (
            <span className="animate__animated animate__fadeIn animate__faster">
              Let's Connect
            </span>
          )}
        </button>
      </div>
    </Layout>
  );
};

export default Contact;
