import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import DefaultModal from "../../Modals/defaultModal";

const SingleNotification = ({ content, title }) => {
  const [isContentShown, setContentShown] = useState(false);
  return (
    <div className='my-5 p-8 shadow-sm'>
      <div className='flex items-center gap-2 text-sm'>
        <h2 className='bg-blue-800 p-1 rounded-full px-3 text-white'>New</h2>
        <h2 className='font-medium text-lg'>{title}</h2>
      </div>
      <hr className='my-3' />
      <p className='my-3 text-sm'>
        {content.slice(0, 120)}
        {content.length > 120 && "..."}
        <span
          className='text-blue-800 italic text-sm cursor-pointer select-none'
          onClick={() => setContentShown(true)}
        >
          Read More
        </span>
      </p>

      <div className='flex items-center gap text-red-600 italic text-sm'>
        <AiOutlineDelete className='text-base' />
        <h2 className=''>Delete</h2>
      </div>
      <DefaultModal
        closeModal={() => setContentShown(false)}
        visibilityState={isContentShown}
      >
        <div className='flex items-center gap-2 text-sm'>
          <h2 className='bg-blue-800 p-1 rounded-full px-3 text-white'>New</h2>
          <h2 className='font-medium text-lg'>{title}</h2>
        </div>
        <p className='text-sm my-4'>{content}</p>
      </DefaultModal>
    </div>
  );
};

export default SingleNotification;
