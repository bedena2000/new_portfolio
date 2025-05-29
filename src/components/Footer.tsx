import { motion } from 'framer-motion';

import linkedInIcon from '@/assets/logo/linkedin.png';
import githubIcon from '@/assets/logo/git.png';


const fadeBottom = {
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


const Footer = () => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={fadeBottom}
      className='w-full bg-[#0F172B] border-[#314158] border-1 flex justify-between rounded-b-lg'>
      <div className='flex'>
        <div><p className='text-[#90A1B9] py-4 px-[24px]'>find me in:</p></div>
        <div className='border-[#62748E] border-l border-r px-[19px] flex items-center'>
          <a href="https://www.linkedin.com/in/nika-bedenashvili-4a187220b/">
            <img src={linkedInIcon} alt="LinkedInIcon"/>
          </a>
        </div>
      </div>

      <a className='hover:text-[#90A1B9] border-l border-[#62748E] flex' href="https://github.com/bedena2000">
        <div className='flex items-center px-6 sm:px-[54px] gap-[8px]'>
          <div className='hidden sm:block'>
            <p>Bedena2000</p>
          </div>
          <div>
            <img src={githubIcon} alt="githubIcon"/>
          </div>
        </div>
      </a>

    </motion.div>
  );
};

export default Footer;