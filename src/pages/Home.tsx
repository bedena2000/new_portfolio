import { motion } from 'framer-motion';

import SnakeGameBackground from '@/assets/img/snake_game_background.png';
import CodeSnippets from '@/assets/img/code_snippets.png';

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

const imagesForRendering = [SnakeGameBackground, CodeSnippets];


const Home = () => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={fadeInUp}
      className='bg-[#0F172B] min-h-100 flex items-center justify-center py-[44px] gap-[20px] px-6'>

      <div className='w-[500px] flex flex-col gap-[60px]'>
        <div>
          <p className='text-[#90A1B9] text-[18px]'>Hi all. I am</p>
          <h2 className='text-[#F8FAFC] text-[60px]'>Nick</h2>
          <p className='text-[#615FFF]'>&gt; Front-end developer</p>
        </div>

        <div>
          <p className='text-[#90A1B9]'>// complete the game to continue</p>
          <p className='text-[#90A1B9]'>// find my profile on Github:</p>
          <a className='hover:text-[#90A1C9]' href='https://github.com/bedena2000'>
            const githubLink = “https://github.com/bedena2000”
          </a>
        </div>
      </div>

      <div className='w-[400px] h-[400px]'>
        <img className='w-full h-full object-contain' src={imagesForRendering[Math.floor(Math.random() * 2)]} alt="snake_game_background"/>
      </div>

    </motion.div>
  );
};

export default Home;