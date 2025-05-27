import { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsTags } from "@/utils/helpers.js.ts";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { projectsData } from "@/data/projectsData.ts";
import TagItem from "@/components/TagItem.tsx";


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
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
  const [currentSelectedTags, setCurrentSelectedTags] = useState<string[]>(['React']);

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

      <div className='flex-2 border-r border-[#314158]'>

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

      <div className='flex-9'>



      </div>

    </motion.div>
  );
};

export default Projects;