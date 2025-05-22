import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";

import { isUrlMatch } from "@/utils/helpers.js.ts";

const Header = () => {

  return (
    <header className='bg-[#314158] border-[#90A1B9] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  text-[#90A1B9] flex justify-between  border-b-[#90A1B9] border-b-2'>
      <div className='flex items-center gap-[152px]'>

        <div className='pl-9'>
          <div>
            <Link to='/' className=''>portfolio</Link>
          </div>
        </div>

        <div className='flex items-center'>
          <div className='relative px-8 border-l-[#90A1B9]  border-l-1 py-4 px-6'>
            <Link to='/' className={`${isUrlMatch('/') ? 'text-[#F8FAFC]' : ''}`}>_hello</Link>
            {
              isUrlMatch('/') && <div className='w-full h-1 bg-[#FFB86A] absolute left-0 bottom-0'></div>
            }
          </div>
          <div className='relative px-8 border-l-[#90A1B9]  border-l-1 py-4 px-6'>
            <Link to='/about' className={`${isUrlMatch('/about') ? 'text-[#F8FAFC]' : ''}`}>_about-me</Link>
            {
              isUrlMatch('/about') && <div className='w-full h-1 bg-[#FFB86A] absolute left-0 bottom-0'></div>
            }
          </div>
          <div className='relative px-8 border-l-[#90A1B9]  border-l-1 border-r-1 py-4 px-6'>
            <Link to='/projects' className={`${isUrlMatch('/projects') ? 'text-[#F8FAFC]' : ''}`}>_projects</Link>
            {
              isUrlMatch('/projects') && <div className='w-full h-1 bg-[#FFB86A] absolute left-0 bottom-0'></div>
            }
          </div>
        </div>





      </div>


      <div className='relative border-l-[#90A1B9] border-l-1 flex items-center px-9'>

          <Link to='/contact' className={`${isUrlMatch('/contact') ? 'text-[#F8FAFC]' : ''}`}>_contact-me</Link>

          {
            isUrlMatch('/contact') && <div className='w-full h-1 bg-[#FFB86A] absolute left-0 bottom-0'></div>
          }

      </div>


    </header>
  );
};

export default Header;