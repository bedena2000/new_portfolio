import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import { motion } from 'framer-motion';
import { useLocation } from "react-router-dom";

import { isUrlMatch } from "@/utils/helpers.js.ts";

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};


const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const location = useLocation();

  const handleBurgerMenu = () => setIsBurgerOpen(!isBurgerOpen);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className='bg-[#0F172B] text-[#90A1B9] flex justify-between  border-[#314158] border-1 rounded-lg rounded-b-none overflow-hidden'>
      <div className='flex items-center gap-10 lg:gap-[152px]'>

        <div className='pl-9 py-4'>
          <div>
            <Link to='/' className=''>portfolio</Link>
          </div>
        </div>

        <div className='hidden lg:flex items-center '>
          <div className='relative px-8 border-l-[#90A1B9]  border-l-1 py-4 px-6'>
            <Link to='/' className={`${isUrlMatch('/', location.pathname) ? 'text-[#F8FAFC]' : ''}`}>_hello</Link>
            {
              isUrlMatch('/', location.pathname) && <div className='w-full h-1 bg-[#FFB86A] absolute left-0 bottom-0'></div>
            }
          </div>
          <div className='relative px-8 border-l-[#90A1B9]  border-l-1 py-4 px-6'>
            <Link to='/about' className={`${isUrlMatch('/about', location.pathname) ? 'text-[#F8FAFC]' : ''}`}>_about-me</Link>
            {
              isUrlMatch('/about', location.pathname) && <div className='w-full h-1 bg-[#FFB86A] absolute left-0 bottom-0'></div>
            }
          </div>
          <div className='relative px-8 border-l-[#90A1B9]  border-l-1 border-r-1 py-4 px-6'>
            <Link to='/projects' className={`${isUrlMatch('/projects', location.pathname) ? 'text-[#F8FAFC]' : ''}`}>_projects</Link>
            {
              isUrlMatch('/projects', location.pathname) && <div className='w-full h-1 bg-[#FFB86A] absolute left-0 bottom-0'></div>
            }
          </div>
        </div>





      </div>


      <div className='hidden relative border-l-[#90A1B9] border-l-1 lg:flex items-center px-9'>

          <Link to='/contact' className={`${isUrlMatch('/contact', location.pathname) ? 'text-[#F8FAFC]' : ''}`}>_contact-me</Link>

          {
            isUrlMatch('/contact', location.pathname) && <div className='w-full h-1 bg-[#FFB86A] absolute left-0 bottom-0'></div>
          }

      </div>

      <div onClick={handleBurgerMenu} className='flex items-center px-9 lg:hidden'>
        <LuMenu className='cursor-pointer' size={24} />
      </div>

      {
        isBurgerOpen && (<div className='lg:hidden absolute left-[16px] top-[73px] bg-[#0F172B] rounded-b-lg border-[#314158] border-1 border-t-0'>
          <div className='px-6 py-3 '>
            <p className='text-[#90A1B9]'># navigate:</p>
          </div>

          <div className='px-6 py-3 '>
            <Link onClick={handleBurgerMenu} className={` ${isUrlMatch('/', location.pathname) ? 'text-[#90A1B9]' : 'text-[#F8FAFC]'} `} to='/'>_hello</Link>
          </div>
          <div className='px-6 py-3 '>
            <Link onClick={handleBurgerMenu} className={` ${isUrlMatch('/about', location.pathname) ? 'text-[#90A1B9]' : 'text-[#F8FAFC]'} `} to='/about'>_about-me</Link>
          </div>
          <div className='px-6 py-3 '>
            <Link onClick={handleBurgerMenu} className={` ${isUrlMatch('/projects', location.pathname) ? 'text-[#90A1B9]' : 'text-[#F8FAFC]'} `} to='/projects'>_projects</Link>
          </div>
          <div className='px-6 py-3 '>
            <Link onClick={handleBurgerMenu} className={` ${isUrlMatch('/contact', location.pathname) ? 'text-[#90A1B9]' : 'text-[#F8FAFC]'} `} to='/contact'>_contact-me</Link>
          </div>
        </div>)
      }


    </motion.header>
  );
};

export default Header;