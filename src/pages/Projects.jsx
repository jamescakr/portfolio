import React from "react";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import { projects } from "../utils/ProjectData";

const Projects = () => {
  return (
    <Layout paddingTop="pt-50">
      <SectionHeader header="Projects" />
      {projects.map((project, index) => (
        <div id="projects" key={index} className="mx-auto w-250">
          <img
            src={project.img}
            alt={project.title}
            className="block mx-auto border border-[#C0C0C0] w-full h-auto mt-30 mb-10"
          />
          <div className="flex">
            <div className="flex-1 text-3xl">{project.title}</div>
            <div className="flex justify-end lg:pr-5 gap-x-7 text-xl lg:text-2xl font-sf-mono text-[#64FFDA]">
              <button className="inline-block w-auto h-auto px-5 py-3 rounded-md border-1 border-[#64FFDA]">
                Demo
              </button>
              <button className="inline-block w-auto h-auto px-5 py-3 rounded-md border-1 border-[#64FFDA]">
                Github
              </button>
            </div>
          </div>
          <p>{project.description}</p>
          <div>
            {project.skills.map((skill, index) => (
              <div
                key={index}
                className="inline-block w-auto h-auto bg-gray-800 rounded-md px-3 py-1 mr-2 text-[#64FFDA] text-lg lg:text-xl"
              >
                {skill}
              </div>
            ))}
          </div>
          <div className="flex-grow h-px w-1/2 bg-gradient-to-r from-[#64FFDA] via-white to-black mt-40"></div>
        </div>
      ))}
    </Layout>
  );
};

export default Projects;
