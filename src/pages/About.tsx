import { useState } from "react";

import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import folderIcon1 from '@/assets/logo/folder_icon1.png';
import folderIcon2 from '@/assets/logo/folder_icon2.png';
import folderIcon3 from '@/assets/logo/folder_icon3.png';
import markdworkIcon from '@/assets/logo/markdown_icon.png';

import informationItem from "@/components/InformationItem.tsx";
import { informationForPortfolio } from "@/utils/helpers.js.ts";
import InformationItem from "@/components/InformationItem.tsx";
import type { informationItem as informationItemType } from '@/types/index.ts';

const About = () => {
  const [isPersonInfoMenuOpen, setIsPersonInfoMenuOpen] = useState(false);

  const handlePersonInfoMenu = () => {
    setIsPersonInfoMenuOpen(!isPersonInfoMenuOpen);
  };

  return (
    <div className='bg-[#0F172B] min-h-100'>

      <div className=''>

        <div onClick={handlePersonInfoMenu} className='border-[#314158] border px-6 py-3 flex items-center gap-3 cursor-pointer hover:text-[#90A1B9]'>
          <div>
            {
              isPersonInfoMenuOpen ? <TiArrowSortedDown size={14} /> : <TiArrowSortedUp size={14} />
            }
          </div>
          <p>personal-info</p>
        </div>

        <div className='flex flex-col gap-2'>
          {
            isPersonInfoMenuOpen && (
              informationForPortfolio.map((item: informationItemType) => {
                console.log(item);
                return (
                  <InformationItem title={item.title} icon={item.icon} childrenList={item.childrenList} />
                )
              })
            )
          }
        </div>

      </div>




      <div>

      </div>

    </div>
  );
};

export default About;