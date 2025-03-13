import React from "react";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";

const Skills = () => {
  return (
    <Layout paddingTop="pt-30">
      <SectionHeader header="Skills" />
      <div className="grid grid-cols-10">
        <div className="p-10 col-span-5">
          <div className="text-3xl mb-10 font-inter">Development Stack</div>
          <ul className="grid grid-cols-4 grid-flow-row place-items-center font-sf-mono">
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                className="w-15 h-15"
              />
              <span>HTML</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                className="w-15 h-15"
              />
              <span>CSS</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                className="w-15 h-15"
              />
              <span>JavaScript</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                className="w-15 h-15"
              />
              <span>React</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg"
                className="w-15 h-15"
              />
              <span>React Router</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
                className="w-15 h-15"
              />
              <span>Redux</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                className="w-15 h-15"
              />
              <span>Bootstrap</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg"
                className="w-15 h-15"
              />
              <span>React Bootstrap</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                className="w-15 h-15"
              />
              <span>Tailwind</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                className="w-15 h-15"
              />
              <span>NodeJS</span>
            </li>
          </ul>
        </div>

        <div className="p-10 col-span-5">
          <div className="p-5">
            <div className="text-3xl mb-10 font-inter">Tools & Utilities</div>
            <ul className="grid grid-cols-4 grid-flow-row font-sf-mono">
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                  className="w-15 h-15"
                />
                Postman
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg"
                  className="w-15 h-15"
                />
                Netlify
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg"
                  className="w-15 h-15"
                />
                Axios
              </li>
            </ul>
          </div>

          <div className="p-5">
            <div className="text-3xl mb-10 font-inter">Database</div>
            <ul className="grid grid-cols-4 grid-flow-row font-sf-mono">
              <li className="font-sf-mono">
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
