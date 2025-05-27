import { useState } from "react";
import { motion } from "framer-motion";

import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import folderIcon1 from '@/assets/logo/folder_icon1.png';
import folderIcon2 from '@/assets/logo/folder_icon2.png';
import folderIcon3 from '@/assets/logo/folder_icon3.png';
import markdworkIcon from '@/assets/logo/markdown_icon.png';
import messageIcon from '@/assets/logo/message-icon.png';
import { IoIosClose } from "react-icons/io";
import { TbMoodEmpty } from "react-icons/tb";


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

import informationItem from "@/components/InformationItem.tsx";
import { informationForPortfolio, menuOptionsInformation, finalSentenceGenerator } from "@/utils/helpers.js.ts";
import InformationItem from "@/components/InformationItem.tsx";
import type { informationItem as informationItemType } from '@/types/index.ts';

const About = () => {
  const [isPersonInfoMenuOpen, setIsPersonInfoMenuOpen] = useState(true);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(true);

  const [currentChosenMenu, setCurrentChosenMenu] = useState('');


  const handlePersonInfoMenu = () => {
    setIsPersonInfoMenuOpen(!isPersonInfoMenuOpen);
  };

  const handleContactMenu = () => {
    setIsContactMenuOpen(!isContactMenuOpen);
  };

  let currentSelectedInformationContent;
  let finalContent;

  if(currentChosenMenu) {
    currentSelectedInformationContent = menuOptionsInformation[currentChosenMenu];
    const words = currentSelectedInformationContent.content.split(' ');
    const resultContent = finalSentenceGenerator(words, 6);
    finalContent = ['/**', ...resultContent, '*/'];
  };



  const handleInformationChange = (title: string) => {
    setCurrentChosenMenu(title);
  }

  const closeInformationTab = () => setCurrentChosenMenu('');

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={fadeInUp}
      className='bg-[#0F172B] min-h-screen flex flex-col md:flex-row'>

      <div className='flex-2 min-h-full border-[#314158] border '>

        <div onClick={handlePersonInfoMenu} className='px-6 py-3 flex items-center gap-3 cursor-pointer hover:text-[#90A1B9]'>
          <div>
            {
              isPersonInfoMenuOpen ? <TiArrowSortedDown size={14} /> : <TiArrowSortedUp size={14} />
            }
          </div>
          <p>personal-info</p>
        </div>


          {
            isPersonInfoMenuOpen && (
              <div className='flex flex-col gap-2 px-6 mt-3 mb-3'>
                {
                  informationForPortfolio.map((item: informationItemType) => {
                    return (
                      <InformationItem handlerFunc={handleInformationChange} key={item.title} title={item.title} icon={item.icon} childrenList={item.childrenList} />
                    )
                  })
                }
              </div>
            )
          }


        <div onClick={handleContactMenu} className='border-[#314158] border px-6 py-3 flex items-center gap-3 cursor-pointer hover:text-[#90A1B9]'>
          <div>
            {
              isContactMenuOpen ? <TiArrowSortedDown size={14} /> : <TiArrowSortedUp size={14} />
            }
          </div>
          <p>contact</p>
        </div>

        {
          isContactMenuOpen && (
            <div className='mt-3 text-[#90A1B9]'>
              <div className='flex items-center gap-[4px] px-6'>
                <div>
                  <img src={messageIcon} alt="emailIcon"/>
                </div>
                <div>
                  <p>bedena2000@gmail.com</p>
                </div>
              </div>
            </div>
          )
        }

      </div>




      {
        (menuOptionsInformation && currentSelectedInformationContent) && (
          <div className='flex-11'>
            <div className='border-[#314158] border flex items-center gap-3 cursor-pointer hover:text-[#90A1B9] w-full'>
              <div className='flex items-center border-[#314158] border-r px-6 py-3 gap-2'>
                <p className='pr-24'>{currentSelectedInformationContent.title}</p>
                <IoIosClose size={24} onClick={closeInformationTab} />
              </div>
            </div>

            <div className='px-10 py-3'>
              <div className='text-[#90A1B9] text-[18px]'>
                {
                  finalContent.map((item, index) => (
                    <div key={item} className='flex items-center gap-10'>
                      <p>{index + 1}</p>
                      <p>{item}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        )
      }

      {
        !currentSelectedInformationContent && (
          <div className='flex-11 px-6 py-3 flex items-center justify-center'>
            <div className='flex items-center flex-col gap-3'>
              <TbMoodEmpty size={64} />
              <p className='text-center'>You have not selected anything</p>
            </div>
          </div>
        )
      }

    </motion.div>
  );
};

export default About;