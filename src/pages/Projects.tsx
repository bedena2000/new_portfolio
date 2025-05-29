import { useState } from "react";
import { motion } from "framer-motion";
import { IfArrayContains, projectsTags } from "@/utils/helpers.js.ts";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { projectsData } from "@/data/projectsData.ts";
import TagItem from "@/components/TagItem.tsx";
import ProjectItem from "@/components/ProjectItem.tsx";
import projectItem from "@/components/ProjectItem.tsx";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(true);
  const [currentSelectedTags, setCurrentSelectedTags] = useState<string[]>([
    "React",
    "HTML",
  ]);

  const handleProjectMenu = () => setIsProjectMenuOpen(!isProjectMenuOpen);

  const handleSelectedTags = (tagName: string, indicator: string) => {
    switch (indicator) {
      case "+":
        setCurrentSelectedTags([...currentSelectedTags, tagName]);
        break;
      case "-":
        setCurrentSelectedTags(
          currentSelectedTags.filter((tag) => tag !== tagName)
        );
        break;
      default:
        return;
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="flex-grow bg-[#0F172B] flex flex-col lg:flex-row"
    >
      <div className="flex-2 border-r border-[#314158]">
        <div
          className="flex lg:w-[220px] items-center gap-3 px-6 py-3 border-b border-l  border-[#314158] cursor-pointer lg:border-r-0 border-r"
          onClick={handleProjectMenu}
        >
          {isProjectMenuOpen ? (
            <IoMdArrowDropdown size={14} />
          ) : (
            <IoMdArrowDropup size={14} />
          )}
          <p className="text-[#F8FAFC] text-base">projects</p>
        </div>

        <div className="flex flex-col gap-3 mt-3 px-3">
          {isProjectMenuOpen &&
            projectsTags.map((tagItem) => (
              <TagItem
                tagItem={tagItem}
                key={tagItem.id}
                handleTagChange={handleSelectedTags}
                currentSelectedTags={currentSelectedTags}
              />
            ))}
        </div>
      </div>

      <div className="flex-10 lg:px-16 lg:py-16 px-4 py-4 mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-[40px]">
        {currentSelectedTags.length > 0 &&
          projectsData
            .filter((project) =>
              IfArrayContains(project.tags, currentSelectedTags)
            )
            .map((project) => (
              <ProjectItem
                key={project.id}
                id={project.id}
                title={project.title}
                projectName={project.projectName}
                description={project.description}
                images={project.images}
                url={project.url}
                tags={currentSelectedTags}
              />
            ))}

        {currentSelectedTags.length === 0 &&
          projectsData.map((project) => (
            <ProjectItem
              id={project.id}
              title={project.title}
              projectName={project.projectName}
              description={project.description}
              images={project.images}
              url={project.url}
              tags={currentSelectedTags}
              key={project.id}
            />
          ))}
      </div>
    </motion.div>
  );
};

export default Projects;
