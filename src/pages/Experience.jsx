import React from "react";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";

const experiences = [
  {
    title: "Nucamp Bootcamp",
    date: "Mar - Nov 2024",
    description:
      "fullstack web developer course cafe finder web app cafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web app",
    side: "left",
  },
  {
    title: "Team project - Want Some Coffee",
    date: "Jul 2024",
    description:
      "cafe finder web app cafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web app",
    side: "right",
  },
  {
    title: "Team Project - ExploreX",
    date: "Sep 2024",
    description:
      "travel guide web app cafe finder web app cafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web app",
    side: "left",
  },
  {
    title: "Hackathon",
    date: "Jan 2025",
    description:
      "time tracking web app cafe finder web app cafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web appcafe finder web app",
    side: "right",
  },
];

const Experience = () => {
  return (
    <Layout paddingTop="pt-50">
      <SectionHeader header="Experience" />
      <div
        id="experience"
        className="relative border-l-1 border-[#64FFDA] xl:border-l-0"
      >
        <div className="hidden md:block absolute top-0 left-1/2 h-full xl:border-l-1 border-[#64FFDA]"></div>
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
              <div className="relative bg-[#1A1A1A] rounded-xs h-auto w-full xl:max-w-[50%] p-8 mb-10 custom-shadow">
                <div className="text-xl sm:text-2xl pb-10 font-sf-mono">
                  {exp.title}
                </div>
                <div className="text-lg sm:text-xl font-lato">{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
