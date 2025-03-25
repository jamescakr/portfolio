import React, { useState } from "react";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import { projects } from "../utils/ProjectData";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const [isDemoHovered, setIsDemoHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);

  return (
    <Layout paddingTop="pt-50">
      <SectionHeader header="Projects" />
      {projects.map((project, index) => (
        <div
          id="projects"
          key={index}
          className="relative group mx-auto w-full max-w-[500px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] 2xl:max-w-[1200px]"
        >
          <img
            src={project.img}
            alt={project.title}
            className="block mx-auto border border-none rounded-xl w-full h-auto mb-15"
          />
          <img
            src={project.video}
            alt={project.title}
            className="absolute top-0 left-0 w-full h-auto rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <div className="flex justify-center items-center mb-15">
            <div className="flex-1 text-2xl md:text-3xl font-mont font-semibold">
              {project.title}
            </div>
            <div className="flex justify-end lg:pr-5 gap-x-3 lg:gap-x-7 text-base md:text-lg lg:text-xl font-sf-mono text-[#64FFDA]">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center w-22 md:w-26 lg:w-30 h-10 md:h-12 lg:h-14 px-3  rounded-md border-1 border-[#64FFDA]"
                >
                  Youtube
                </a>
              )}
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center w-18 md:w-20 lg:w-22 h-10 md:h-12 lg:h-14 px-3 rounded-md border-1 border-[#64FFDA] "
                onMouseEnter={() => setIsDemoHovered(true)}
                onMouseLeave={() => setIsDemoHovered(false)}
              >
                {isDemoHovered ? (
                  <ExternalLink className="animate__animated animate__zoomIn animate__faster" />
                ) : (
                  <span className="animate__animated animate__fadeIn animate__faster">
                    Demo
                  </span>
                )}
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center w-22 md:w-26 lg:w-30 h-10 md:h-12 lg:h-14 px-3  rounded-md border-1 border-[#64FFDA]"
                onMouseEnter={() => {
                  setIsGithubHovered(true);
                }}
                onMouseLeave={() => {
                  setIsGithubHovered(false);
                }}
              >
                {isGithubHovered ? (
                  <ExternalLink className="animate__animated animate__zoomIn animate__faster" />
                ) : (
                  <span className="animate__animated animate__fadeIn animate__faster">
                    Github
                  </span>
                )}
              </a>
            </div>
          </div>
          <p className="text-lg md:text-xl text-[#C0C0C0] font-lato font-light mb-10">
            {Array.isArray(project.description)
              ? project.description.map((text, i) => (
                  <span key={i}>
                    {i === 1 ? (
                      <span className="font-normal text-white">{text}</span>
                    ) : (
                      text
                    )}{" "}
                  </span>
                ))
              : project.description}
          </p>

          <div>
            {project.skills.map((skill, index) => (
              <div
                key={index}
                className="inline-block w-auto h-auto bg-gray-800 rounded-md px-3 py-1 mr-2 text-[#64FFDA] text-sm lg:text-base mb-3"
              >
                {skill}
              </div>
            ))}
          </div>
          <div>
            {project.api.map((api, index) => (
              <div
                key={index}
                className="inline-block w-auto h-auto bg-zinc-800	rounded-md px-3 py-1 mr-2 text-[#64FFDA] text-sm lg:text-base"
              >
                {api}
              </div>
            ))}
          </div>
          {index < projects.length - 1 && (
            <div className="flex-grow h-px w-1/2 bg-gradient-to-r from-[#64FFDA] via-white to-black mt-40 mb-40"></div>
          )}
        </div>
      ))}
    </Layout>
  );
};

export default Projects;
