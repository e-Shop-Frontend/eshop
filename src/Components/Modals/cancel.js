import React, { useState } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import warn from "../../Assets/images/warn2.png";
import Btn from "../Button/btn";
const CancelModal = ({
  visibilityState,
  closeModal,
  modalAction,
  modalText,
}) => {
  return (
    <div
      className={`bg-gray-600 bg-opacity-70 w-full h-screen flex items-center justify-center fixed top-0 right-0 z-20 p-5 transition ${
        visibilityState ? "scale-100" : "scale-0"
      }`}
    >
      <div className='bg-white w-full max-w-sm rounded-md shadow-md p-4 sm:p-8'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-4 items-center'>
            <i className='text-xl'>
              <AiOutlineWarning />
            </i>
            <h2 className='text-sm font-medium'>{modalText}</h2>
          </div>
          <i className='text-xl' onClick={closeModal}>
            <MdClose />
          </i>
        </div>
        <hr className='-mx-4 md:-mx-8 my-6' />
        <div className='flex items-center gap-4 my-6'>
          <img src={warn} className='w-20' alt='' />
          <h2 className='text-sm'>Are you sure you want to {modalText}?</h2>
        </div>
        <div className='flex items-center justify-between my-3'>
          <Btn
            onClick={closeModal}
            className='font-medium bg-gray-300'
            text='Cancel'
          />
          <Btn
            onClick={modalAction}
            text={modalText}
            className='bg-red-600 text-white font-medium text-xs'
          />
        </div>
      </div>
    </div>
  );
};

export default CancelModal;
