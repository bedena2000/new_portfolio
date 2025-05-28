import { useState } from 'react';
import { motion } from 'framer-motion';
import {IfArrayContains, projectsTags} from "@/utils/helpers.js.ts";
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
      ease: 'easeOut',
    },
  },
};


const Projects = () => {
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(true);
  const [currentSelectedTags, setCurrentSelectedTags] = useState<string[]>(['React', 'HTML']);

  const handleProjectMenu = () => setIsProjectMenuOpen(!isProjectMenuOpen);

  const handleSelectedTags = (tagName: string, indicator: string) => {
    switch(indicator) {
      case '+':
        setCurrentSelectedTags([...currentSelectedTags, tagName]);
        break;
      case '-':
        setCurrentSelectedTags(currentSelectedTags.filter((tag) => tag !== tagName));
        break;
      default:
        return;
    }
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={fadeInUp}
      className='bg-[#0F172B] min-h-screen flex'
    >

      <div className='w-[200px] border-r border-[#314158]'>

        <div className='flex items-center gap-3 px-6 py-3 border-b border-l  border-[#314158] cursor-pointer' onClick={handleProjectMenu}>
          {isProjectMenuOpen ? <IoMdArrowDropdown size={14} /> : <IoMdArrowDropup size={14} /> }
          <p className='text-[#F8FAFC] text-base'>projects</p>
        </div>

        <div className='flex flex-col gap-3 mt-3 px-3'>
          {
            isProjectMenuOpen && projectsTags.map((tagItem) => (
              <TagItem tagItem={tagItem}  key={tagItem.id} handleTagChange={handleSelectedTags} currentSelectedTags={currentSelectedTags} />
            ))
          }
        </div>

      </div>

      <div className='px-16 py-16 grid grid-cols-3 gap-[40px]'>

        {
          currentSelectedTags.length > 0 &&
              projectsData
                .filter(project => IfArrayContains(project.tags, currentSelectedTags))
                .map(project => (
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
                ))

        }

        {
          currentSelectedTags.length === 0 && projectsData.map((project) => <ProjectItem id={project.id} title={project.title} projectName={project.projectName} description={project.description} images={project.images} url={project.url} tags={currentSelectedTags} />)
        }

      </div>

    </motion.div>
  );
};

export default Projects;