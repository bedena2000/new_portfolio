import folderIcon1 from "@/assets/logo/folder_icon1.png";
import folderIcon2 from "@/assets/logo/folder_icon2.png";
import folderIcon3 from "@/assets/logo/folder_icon3.png";

import reactIcon from '@/assets/projects/icons/react_icon.png';
import htmlIcon from '@/assets/projects/icons/html_icon.png';

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";



import type { informationItem, informationContent, tagItemTypes } from '@/types/index.ts';


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
      },
    ]
  },
  {
    title: 'interests',
    icon: folderIcon2,
    childrenList: [
      {
        title: 'skills',
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

export const menuOptionsInformation: { [key: string]: informationContent } = {
  ["about me"]: {
    content:
      "i started doing projects since 2022, and i have been doing project since that period and have experience building websites",
    title: "bio",
  },
  experience: {
    content: "experience",
    title: "bio",
  },
  skills: {
    content:
      "i have been building project with react and next. currently learning php and node for backend development",
    title: 'skills'
  },
  university: {
    content:
      "i was getting bachelor degree in sokhumis universiteti (2021-2025)",
    title: "university",
  },
};

export function finalSentenceGenerator(arrayOfWords: string[], amountOfWrap: number) {
  const finalArray: string[] = [];

  for (let i = 0; i < arrayOfWords.length; i += amountOfWrap) {
    const chunk = arrayOfWords.slice(i, i + amountOfWrap).join(',');
    finalArray.push(chunk);
  }

  return finalArray;
}

export const projectsTags: tagItemTypes[] = [
  {
    id: 1,
    tagName: 'React',
    tagIcon: FaReact,
  },
  {
    id: 2,
    tagName: 'HTML',
    tagIcon: FaHtml5,
  }
];


export function IfArrayContains(firstArray: string[], secondArray: string[]) {

  const lengthOfFirstArray = firstArray.length;
  const lengthOfSecondArray = secondArray.length;

  for(let i = 0; i < lengthOfFirstArray; i++) {
    for(let m = 0; m < lengthOfSecondArray; m++) {
      if(firstArray[i] === secondArray[m]) {
        return true;
      }
    }
  }

  return false;

}