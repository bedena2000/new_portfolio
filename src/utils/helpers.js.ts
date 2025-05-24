import folderIcon1 from "@/assets/logo/folder_icon1.png";
import folderIcon2 from "@/assets/logo/folder_icon2.png";
import folderIcon3 from "@/assets/logo/folder_icon3.png";

import type { informationItem } from '@/types/index.ts';


export const isUrlMatch = (url: string, currentUrl: string) => {

  if(currentUrl === url) return true;

  return false;
}

export const informationForPortfolio: informationItem[] = [
  {
    title: 'bio',
    icon: folderIcon1,
    childrenList: [
      {
        title: 'About Me',
      }
    ]
  },
  {
    title: 'interesets',
    icon: folderIcon2,
    childrenList: [
      {
        title: 'What i like to do',
      }
    ]
  },
  {
    title: 'education',
    icon: folderIcon3,
    childrenList: [
      {
        title: 'university',
      }
    ]
  }
];