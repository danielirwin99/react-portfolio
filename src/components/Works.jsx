import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { BiLink } from "react-icons/bi";
import { useState } from "react";

const ProjectCard = ({
  index,
  name,
  description,
  subDescription,
  tags,
  image,
  source_code_link,
  source_code_git,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.5)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl md:w-[360px] h-[550px] w-full flex flex-col"
      >
        <div className="relative w-full h-[280px] md:h-[230px] ">
          <img
            className="w-full h-full object-cover rounded-2xl "
            src={image}
            alt={name}
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
            <div
              onClick={() => window.open(source_code_git, "_blank")}
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt={github}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer ml-1"
            >
              <BiLink className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <p className="mt-2 text-secondary text-[14px]">{subDescription}</p>
        </div>

        <div className="mt-4 flex flex-wrap items-end gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      {/* <div className="flex justify-center items-center mt-10">
        <button
          onClick={yessir}
          className="bg-[#915eff] py-3 px-8 outline-none w-fit text-white font-bold shadow-lg shadow-primary rounded-xl"
        >
          Load More
        </button>
      </div> */}
    </>
  );
};

export default SectionWrapper(Works, "works");
