import { motion } from 'framer-motion';

import greenGlowBackground from '@/assets/img/Green.png';
import blueGlowBackground from '@/assets/img/Blue.png';
import backgroundBlurs from '@/assets/img/backgroundBlurs.png';

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
      className='bg-[#0F172B] flex-8 flex items-center justify-center py-[44px] gap-[20px] px-6 overflow-hidden'>

      <div className='relative z-20 text-center md:text-left  md:w-[500px] flex flex-col gap-[60px]'>
        <div>
          <p className='text-[#90A1B9] text-[18px]'>Hi all. I am</p>
          <h2 className='text-[#F8FAFC] text-[36px] md:text-[60px]'>Nika</h2>
          <p className='text-[#615FFF]'>&gt; Front-end developer</p>
        </div>

        <div>
          <p className='text-[#90A1B9]'>// complete the game to continue</p>
          <p className='text-[#90A1B9]'>// find my profile on Github:</p>
          <a className='hover:text-[#90A1C9]' href='https://github.com/bedena2000'>
            const githubLink = “https://github.com/bedena2000”
          </a>
        </div>

        <img src={backgroundBlurs} className='md:hidden absolute z-10 top-[-100px]' alt="backroundBlur"/>
      </div>

      <div className='relative z-20 hidden md:block w-[400px] h-[400px]'>
        <img className='w-full h-full object-contain' src={imagesForRendering[Math.floor(Math.random() * 2)]} alt="snake_game_background"/>

        <img src={greenGlowBackground} alt="greenGlow" className='absolute z-10 top-0 left-[-100px]' />
        <img src={blueGlowBackground} alt="blueGlow" className='absolute z-10 bottom-[-100px] right-[-100px]' />
      </div>

    </motion.div>
  );
};

export default Home;