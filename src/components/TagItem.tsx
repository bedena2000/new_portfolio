import * as React from "react";
import type { tagItemTypes } from "@/types";

interface TagItemProps {
  tagItem: tagItemTypes;
  handleTagChange: (newTag: string, indicator: string) => void;
  currentSelectedTags: string[]
}

const TagItem: React.FC<TagItemProps> = ({ tagItem, handleTagChange, currentSelectedTags }) => {

  const handleTagClick = () => {
    if(currentSelectedTags.includes(tagItem.tagName)) {
      handleTagChange(tagItem.tagName, '-');
    } else {
      handleTagChange(tagItem.tagName, '+');
    }
  }

  return (
    <div onClick={handleTagClick} className='flex items-center gap-6 cursor-pointer hover:text-[#90A1B9] hover:color-[#90A1B9]'>
      <div className={`w-[20px] h-[20px] border-[#62748E] border rounded-md ${currentSelectedTags.includes(tagItem.tagName) && 'bg-[#62748E]'}`} >

      </div>

      <div className='flex items-center gap-[8px]'>
        {/*<img className='w-[18px] h-[18px]' src={tagItem.tagIcon} alt={tagItem.tagName}/>*/}
        <tagItem.tagIcon />
        <p>{tagItem.tagName}</p>
      </div>
    </div>
  );
};

export default TagItem;