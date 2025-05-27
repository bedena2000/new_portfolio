// InformationItem

import reactIcon from "@/assets/projects/icons/react_icon.png";
import type { IconType } from "react-icons";

export interface informationItem {
  title: string;
  icon: string;
  childrenList: childrenItem[]
}

export interface childrenItem {
  title: string;
}

export interface informationContent {
  content: string;
  title: string;
}

// Projects

export interface ProjectItem {
  id: number,
  title: string,
  projectName: string,
  description: string,
  images: string[]
  url: string;
  tags: string[];
  githubLink?: string;
};

// Tags

export interface tagItemTypes {
  id: number,
  tagName: string,
  tagIcon: IconType,
}