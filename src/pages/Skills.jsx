import React from "react";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import { Cog } from "lucide-react";
import { Wrench } from "lucide-react";
import { DatabaseZap } from "lucide-react";

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
          <ul className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-3 grid-flow-row gap-y-10 place-items-center font-sf-mono text-xl">
            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                className="w-12 h-12 sm:w-15 sm:h-15"
                alt="HTML"
              />
              <span className="text-lg sm:text-xl">HTML</span>
            </li>
            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                className="w-12 h-12 sm:w-15 sm:h-15 "
                alt="CSS"
              />
              <span className="text-lg sm:text-xl">CSS</span>
            </li>
            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                className="w-12 h-12 sm:w-15 sm:h-15"
                alt="Javascript"
              />
              <span className="text-base sm:text-xl">JavaScript</span>
            </li>
            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                className="w-12 h-12 sm:w-15 sm:h-15"
                alt="React"
              />
              <span className="text-lg sm:text-xl">React</span>
            </li>
            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg"
                className="w-15 h-15"
                alt="React Router"
              />
              <span className="text-center text-base sm:text-xl">React Router</span>
            </li>
            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
                className="w-13 h-13 sm:w-15 sm:h-15"
                alt="Redux"
              />
              <span className="text-lg sm:text-xl">Redux</span>
            </li>
            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                className="w-13 h-13 sm:w-15 sm:h-15"
                alt="Bootstrap"
              />
              <span className="text-lg sm:text-xl">Bootstrap</span>
            </li>
            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                className="w-13 h-13 sm:w-15 sm:h-15"
                alt="Tailwind"
              />
              <span className="text-lg sm:text-xl">Tailwind</span>
            </li>
            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg"
                className="w-13 h-13 sm:w-15 sm:h-15"
                alt="React Bootstrap"
              />
              <span className="text-center text-base sm:text-xl">
                React Bootstrap
              </span>
            </li>

            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                className="w-13 h-13 sm:w-15 sm:h-15"
                alt="NodeJS"
              />
              <span className="text-lg sm:text-xl">NodeJS</span>
            </li>
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
              <li className="custom-center custom-shadow custom-box">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                  className="w-13 h-13 sm:w-15 sm:h-15"
                />
                <span className="text-lg sm:text-xl">Postman</span>
              </li>
              <li className="custom-center custom-shadow custom-box">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg"
                  className="w-14 h-14 sm:w-15 sm:h-15"
                />
                <span className="text-lg sm:text-xl">Netlify</span>
              </li>
              <li className="custom-center custom-shadow custom-box">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg"
                  className="w-13 h-13 sm:w-15 sm:h-15"
                />
                <span className="text-lg sm:text-xl">Axios</span>
              </li>
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
              <li className="custom-center custom-shadow custom-box">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                  className="w-13 h-13 sm:w-15 sm:h-15"
                />
                <span className="text-lg sm:text-xl">MongoDB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
