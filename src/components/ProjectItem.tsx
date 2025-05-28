import type { ProjectItem } from '@/types/index.ts';
import * as React from "react";
import {Link} from "react-router-dom";


const ProjectItem: React.FC<ProjectItem> = ({projectName, title, url, githubLink, description, images}) => {
  return (
    <div>
      <div className='flex items-center gap-2'>
        <p className='text-[#615FFF]'>{projectName}</p>
        //
        <p className='text-[#90A1B9]'>{title}</p>
      </div>
      <div className='mt-4 border-[#1D293D] border rounded-[24px] overflow-hidden'>
        <div className='h-[145px]'>
          <img className='w-full h-full object-cover' src={images[0]} alt={title} />
        </div>

        <div className='p-8 flex flex-col justify-between gap-6 h-[180px] bg-[#020618]'>
          <p className='text-[#90A1B9] truncate'>{description}</p>
          <button className='rounded-md px-3 py-[10px] bg-[#45556C]  text-[#F8FAFC] cursor-pointer hover:bg-[#45456C] w-fit'>view-project</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;