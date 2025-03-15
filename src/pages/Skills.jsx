import React from "react";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import { Cog } from "lucide-react";
import { Wrench } from "lucide-react";
import { DatabaseZap } from "lucide-react";

const Skills = () => {
  return (
    <Layout paddingTop="pt-30">
      <SectionHeader header="Skills" />
      <div className="grid grid-cols-11">
        <div className="col-span-5">
          <div className="flex justify-center items-center mb-10">
            <Cog className="w-6 h-6 mr-2 text-[#64FFDA]" />
            <span className="text-3xl font-mont font-semibold">DEVELOPMENT</span>
          </div>
          <ul className="grid grid-cols-3 grid-flow-row gap-y-10 place-items-center font-sf-mono text-xl">
            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                className="w-15 h-15"
                alt="HTML"
              />
              <span>HTML</span>
            </li>
            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                className="w-15 h-15"
                alt="CSS"
              />
              <span>CSS</span>
            </li>
            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                className="w-15 h-15"
                alt="Javascript"
              />
              <span>JavaScript</span>
            </li>
            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                className="w-15 h-15"
                alt="React"
              />
              <span>React</span>
            </li>
            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg"
                className="w-15 h-15"
                alt="React Router"
              />
              <span className="whitespace-wrap text-center">React Router</span>
            </li>
            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
                className="w-15 h-15"
                alt="Redux"
              />
              <span>Redux</span>
            </li>
            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                className="w-15 h-15"
                alt="Bootstrap"
              />
              <span>Bootstrap</span>
            </li>
            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                className="w-15 h-15"
                alt="Tailwind"
              />
              <span>Tailwind</span>
            </li>
            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg"
                className="w-15 h-15"
                alt="React Bootstrap"
              />
              <span className="whitespace-wrap text-center">React Bootstrap</span>
            </li>

            <li className="custom-center custom-shadow custom-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                className="w-15 h-15"
                alt="NodeJS"
              />
              <span>NodeJS</span>
            </li>
          </ul>
        </div>

        <div className="col-span-1"></div>

        <div className="col-span-5 flex flex-col gap-y-20">
          <div>
            <div className="flex justify-center items-center pb-10">
              <Wrench className="w-6 h-6 mr-2 text-[#64FFDA]" />
              <span className="text-3xl font-mont font-semibold">
                TOOLS & UTILITIES
              </span>
            </div>
            <ul className="grid grid-cols-3 grid-flow-row font-sf-mono text-xl place-items-center">
              <li className="custom-center custom-shadow custom-box">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                  className="w-15 h-15"
                />
                Postman
              </li>
              <li className="custom-center custom-shadow custom-box">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg"
                  className="w-15 h-15"
                />
                Netlify
              </li>
              <li className="custom-center custom-shadow custom-box">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg"
                  className="w-15 h-15"
                />
                Axios
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-center items-center pb-10">
              <DatabaseZap className="w-6 h-6 mr-2 text-[#64FFDA]" />
              <span className="text-3xl font-mont font-semibold">DATABASE</span>
            </div>
            <ul className="grid grid-cols-3 grid-flow-row font-sf-mono text-xl place-items-center">
              <span className="col-span-1"></span>
              <li className="custom-center custom-shadow custom-box">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                  className="w-15 h-15"
                />
                <span>MongoDB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
