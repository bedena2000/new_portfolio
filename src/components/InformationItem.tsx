import { useState } from 'react';
import type { informationItem, childrenItem } from "@/types";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import mdIcon from '@/assets/logo/markdown_icon.png';


interface InformationItemProps {
  title: string;
  icon: string;
  childrenList: childrenItem[];
  handlerFunc: (title: string) => void;
}

const InformationItem: React.FC<InformationItemProps> = ({title, icon, childrenList = [], handlerFunc}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <div onClick={handleOpen} className='relative flex items-center gap-[12px] cursor-pointer'>
        <div>
          {isMenuOpen ? <MdOutlineKeyboardArrowDown size={14} /> : <MdOutlineKeyboardArrowUp size={14} />}
        </div>
        <div className='flex items-center gap-2.5'>
          <img src={icon} alt={icon}/>
          <p className='text-[#90A1B9] hover:text-white'>{title}</p>
        </div>


      </div>

      {
        (childrenList.length > 0 && isMenuOpen) && (
          <div className='flex flex-col gap-2 pl-[25px] mt-2'>
            {
              childrenList.map((item: childrenItem) => {
                return (
                  <div key={item.title} onClick={() => handlerFunc(item.title.trim().toLowerCase())} className='flex items-center gap-2'>
                    <div>
                      <img src={mdIcon} alt="mdIcon"/>
                    </div>
                    <div>
                      <p className='text-[#90A1B9] hover:text-white cursor-pointer'>{item.title}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        )
      }
    </div>

  );
};

export default InformationItem;