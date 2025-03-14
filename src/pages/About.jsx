import React from "react";
import Layout from "../components/Layout";
import { Box } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

const About = () => {
  const items = [
    {
      icons: <Box className="text-[#64FFDA] w-3 h-3" />,
      text: "Permanent Residency",
    },
    {
      icons: <Box className="text-[#64FFDA] w-3 h-3" />,
      text: "Willing to relocate",
    },
    {
      icons: <Box className="text-[#64FFDA] w-3 h-3" />,
      text: "Open to Volunteer Opportunities",
    },
    {
      icons: <Box className="text-[#64FFDA] w-3 h-3" />,
      text: "Committed to continuous learning & growth",
    },
  ];
  return (
    <Layout paddingTop="pt-0">
      <SectionHeader header="About Me" />
      <div className="grid grid-cols-1 md:grid-cols-10">
        <div className="md:col-span-6 text-[20px] font-lato font-light text-[#C0C0C0] mr-10">
          <p className="pb-5">
            I'm a <span className=" text-white">full-stack developer</span> who
            strives to build well-structured applications while continuously learning
            best practices for performance and scalability.
          </p>
          <p className="pb-5">
            Earlier in my career, I served as a{" "}
            <span className=" text-white">military officer</span>, where I developed{" "}
            <span className=" text-white">
              strong teamwork, accountability, and problem-solving skills
            </span>{" "}
            <span className="text-[#64FFDA] font-normal">under pressure</span>. This
            experience enhanced my ability{" "}
            <span className=" text-white">
              to execute projects efficiently and collaborate effectively
            </span>
            ,{" "}
            <span className="text-[#64FFDA] font-normal">
              even in high-stress environments
            </span>
            .
          </p>
          <p className="pb-5">
            Throughout my development journey, I’ve taken on{" "}
            <span className="text-[#64FFDA] font-normal">
              Scrum Master roles in team projects
            </span>
            <span className="text-white">
              , leading teams and optimizing workflows in agile environments
            </span>
            . These experiences have strengthened my ability{" "}
            <span className="text-white">
              to foster teamwork and drive projects to success.
            </span>
          </p>
          <p className="pb-10">
            I'm currently{" "}
            <span className="text-[#64FFDA] font-normal">seeking opportunities</span>{" "}
            <span className="text-white">as a web developer</span> where I can apply
            my skills and continue to grow in a dynamic team environment.
          </p>
          <p className="text-white">Additional Key Points :</p>
          <ul className="grid grid-rows-2 grid-flow-col gap-3 text-[17px] font-sf-mono mt-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-x-3">
                {item.icons}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <img
          src=""
          alt="photo"
          className="md:col-span-4 ml-10 border border-[#C0C0C0]"
        />
      </div>
    </Layout>
  );
};

export default About;
