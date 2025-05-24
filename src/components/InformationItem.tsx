import { useState } from 'react';
import type { informationItem } from "@/types";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";




const InformationItem: React.FC<informationItem> = ({title, icon, childrenList}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div onClick={handleOpen} className='flex items-center gap-[12px] cursor-pointer'>
      <div>
        {isMenuOpen ? <MdOutlineKeyboardArrowDown size={14} /> : <MdOutlineKeyboardArrowUp size={14} />}
      </div>
      <div className='flex items-center gap-2.5'>
        <img src={icon} alt={icon}/>
        <p className='text-[#90A1B9] hover:text-white'>{title}</p>
      </div>
    </div>
  );
};

export default InformationItem;