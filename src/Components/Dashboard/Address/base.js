import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
const Base = ({ nextSlide, savedAddress, allAddress }) => {
  return (
    <div>
      <h2 className='text-2xl font-medium'>My Address</h2>

      <h4 className='text-base my-4 font-medium'>
        {savedAddress
          ? `You have ${allAddress?.length} saved address`
          : `You have not added any address yet. Your saved address will appear here.`}
      </h4>
      <button
        onClick={nextSlide}
        className='flex items-center justify-center rounded-md border-2 shadow-md p-3 gap-4 text-blue-600 w-full my-5'
      >
        <h3 className='text-2xl'>+</h3>
        <h3>Add Another Address</h3>
      </button>
      {savedAddress && (
        <div className='rounded-md p-8 shadow-md'>
          {allAddress?.map(
            (
              {
                recipient_name,
                street_name,
                recipient_number,
                state,
                house_number,
                city,
                additional_information,
              },
              index
            ) => {
              return (
                <div key={index} className='my-4'>
                  {" "}
                  <div className='flex gap-3 justify-between my-2'>
                    <h2 className='font-medium'>{recipient_name}</h2>
                    <div
                      className='flex text-blue-600 font-medium items-center gap-1 cursor-pointer select-none'
                      onClick={nextSlide}
                    >
                      <i className='text-lg'>
                        <FiEdit2 />
                      </i>
                      <h2 className='text-xs'>Edit</h2>
                    </div>
                  </div>
                  <div className='flex gap-3 justify-between my-2'>
                    <h2 className='text-sm'>
                      {house_number}, {street_name}, {city}, {state}.{" "}
                      {recipient_number}
                    </h2>
                    <div className='flex text-red-600 font-medium items-center gap-1 cursor-pointer select-none'>
                      <i className='text-lg'>
                        <AiOutlineDelete />
                      </i>

                      <h2 className='text-xs'>Delete</h2>
                    </div>
                  </div>
                  <hr className='my-8' />
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default Base;
