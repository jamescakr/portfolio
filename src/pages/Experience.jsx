import React from "react";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import ExpIconMap from "../utils/ExpIconMap";
import { experiences } from "../utils/ExpData";

const highlightBg = {
  Team: "bg-[#2F8F78]",
  Solo: "bg-[#3A9EC2]",
  Education: "bg-[#E67E22]",
};

const Experience = () => {
  return (
    <Layout paddingTop="pt-50">
      <SectionHeader header="Experience" />
      <div
        id="experience"
        className="relative border-l-2 border-[#64FFDA] xl:border-l-0"
      >
        <div className="hidden md:block absolute top-0 left-1/2 h-full xl:border-l-2 border-[#64FFDA]"></div>
        <div className="flex flex-col space-y-10 ml-10 xl:mr-10 w-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                exp.side === "left"
                  ? "xl:justify-start xl:mr-32"
                  : "xl:justify-end xl:ml-32"
              }`}
            >
              <div className="relative bg-[#1A1A1A] rounded-xs h-auto w-full xl:max-w-[50%] p-8 mb-10 custom-shadow transition duration-200 group">
                {exp.highlight && (
                  <div className="flex">
                    <div
                      className={`${
                        highlightBg[exp.highlight] || ""
                      } inline-block w-auto h-auto rounded-xl px-2 mb-3 font-semibold `}
                    >
                      {exp.highlight}
                    </div>
                    <div>
                      {exp.highlight2 && (
                        <span className="ml-2 inline-block bg-[#E94560] w-auto h-auto rounded-xl px-2 font-semibold">
                          {exp.highlight2}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                <div className="text-xl sm:text-2xl pb-10 font-sf-mono">
                  {exp.title}
                </div>
                <div className="text-lg sm:text-xl font-lato">{exp.description}</div>
                <div className="hidden xl:block">
                  {exp.side === "left" && (
                    <div>
                      <div className="absolute top-1/2 -right-24 transform -translate-y-1/2">
                        {ExpIconMap[exp.icon]}
                      </div>
                      <div className="absolute top-1/2 -right-80 transform -translate-y-1/2 w-48 h-auto text-white font-mont text-xl text-left font-semibold">
                        {exp.date}
                      </div>
                    </div>
                  )}
                  {exp.side === "right" && (
                    <div>
                      <div className="absolute top-1/2 -left-23 transform -translate-y-1/2">
                        {ExpIconMap[exp.icon]}
                      </div>
                      <div className="absolute top-1/2 -left-80 transform -translate-y-1/2 w-48 h-auto  text-white font-mont text-xl font-semibold text-right">
                        {exp.date}
                      </div>
                    </div>
                  )}
                </div>
                {/* For responsive : if screen is less than XL */}
                <div className="block xl:hidden">
                  <div className="absolute top-1/2 -left-18 transform -translate-y-1/2">
                    {ExpIconMap[exp.icon]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
