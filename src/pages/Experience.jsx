import React from "react";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import ExpIconMap from "../utils/ExpIconMap";
import { experiences } from "../utils/ExpData";

const highlightBg = {
  Team: "bg-[#E94560]",
  Solo: "bg-[#256D8C]",
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
              <div
                className={`relative bg-[#1A1A1A] rounded-xs h-auto w-full xl:max-w-[55%] p-8 mb-10 custom-shadow transition duration-200 group ${
                  exp.side === "left" ? "xl:-ml-12" : "xl:-mr-12"
                }`}
              >
                {exp.highlight && (
                  <div className="flex pb-3">
                    <div
                      className={`${
                        highlightBg[exp.highlight] || ""
                      } inline-block w-auto h-auto rounded-xl px-2 mb-3 font-semibold text-base lg:text-xl`}
                    >
                      {exp.highlight}
                    </div>
                    <div>
                      {exp.highlight2 && (
                        <span className="ml-2 inline-block bg-[#24A187] w-auto h-auto rounded-xl px-2 font-semibold text-base lg:text-xl">
                          {exp.highlight2}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                <div className="text-xl sm:text-2xl pb-2 font-mont font-semibold">
                  {exp.title}
                </div>
                <div className="text-base sm:text-xl pb-4 md:pb-8 text-[#64FFDA] font-sf-mono">
                  {exp.subtitle}
                </div>
                <div className="text-base sm:text-xl font-lato font-light text-[#C0C0C0]">
                  {exp.description}
                </div>
                <div className="block xl:hidden mt-5 font-mont text-base sm:text-lg text-gray-400">
                  {exp.date}
                </div>
                <div className="hidden xl:block">
                  {exp.side === "left" && (
                    <div>
                      <div className="absolute top-1/2 -right-23 2xl:-right-20 transform -translate-y-1/2">
                        {ExpIconMap[exp.icon]}
                      </div>
                      <div className="absolute top-1/2 -right-80 transform -translate-y-1/2 w-48 h-auto text-white font-mont text-xl text-left font-semibold">
                        {exp.date}
                      </div>
                    </div>
                  )}
                  {exp.side === "right" && (
                    <div>
                      <div className="absolute top-1/2 -left-23 2xl:-left-20 transform -translate-y-1/2">
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
