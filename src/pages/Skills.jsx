import React from "react";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import { Cog } from "lucide-react";
import { Wrench } from "lucide-react";
import { DatabaseZap } from "lucide-react";
import { developmentData, toolsData, databaseData } from "../utils/SkillData";

const Skills = () => {
  return (
    <Layout paddingTop="pt-50">
      <SectionHeader header="Skills" />
      <div id="skills" className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-11">
        <div className="col-span-5 pb-20">
          <div className="flex justify-center items-center mb-10">
            <Cog className="w-6 h-6 mr-2 text-[#64FFDA]" />
            <span className="text-2xl sm:text-3xl font-mont font-semibold">
              DEVELOPMENT
            </span>
          </div>
          <ul className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-3 grid-flow-row gap-y-10 place-items-center font-sf-mono text-xl text-center">
            {developmentData.map((item, index) => (
              <li key={index} className="custom-center custom-shadow custom-box">
                <img
                  src={item.src}
                  className="w-12 h-12 sm:w-16 sm:h-16"
                  alt={item.alt}
                />
                <span className="text-lg sm:text-xl">{item.alt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1"></div>

        <div className="col-span-5 flex flex-col gap-y-20">
          <div>
            <div className="flex justify-center items-center pb-10">
              <Wrench className="w-6 h-6 mr-2 text-[#64FFDA]" />
              <span className="text-2xl sm:text-3xl font-mont font-semibold">
                TOOLS & UTILITIES
              </span>
            </div>
            <ul className="grid grid-cols-3 grid-flow-row font-sf-mono text-xl place-items-center">
              {toolsData.map((item, index) => (
                <li key={index} className="custom-center custom-shadow custom-box">
                  <img
                    src={item.src}
                    className="w-12 h-12 sm:w-16 sm:h-16"
                    alt={item.alt}
                  />
                  <span className="text-lg sm:text-xl">{item.alt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex justify-center items-center pb-10">
              <DatabaseZap className="w-6 h-6 mr-2 text-[#64FFDA]" />
              <span className="text-2xl sm:text-3xl font-mont font-semibold">
                DATABASE
              </span>
            </div>
            <ul className="grid grid-cols-3 grid-flow-row font-sf-mono text-xl place-items-center">
              <span className="col-span-1"></span>
              {databaseData.map((item, index) => (
                <li key={index} className="custom-center custom-shadow custom-box">
                  <img
                    src={item.src}
                    className="w-12 h-12 sm:w-16 sm:h-16"
                    alt={item.alt}
                  />
                  <span className="text-lg sm:text-xl">{item.alt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
