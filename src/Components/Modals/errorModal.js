import React from "react";
import { MdClose } from "react-icons/md";
import error from "../../Assets/images/error.png";
const ErrorModal = ({ visibilityState, children, closeModal }) => {
  return (
    <div
      className={`bg-gray-600 bg-opacity-70 w-full h-screen flex items-center justify-center fixed top-0 right-0 z-20 p-5 transition ${
        visibilityState ? "scale-100" : "scale-0"
      }`}
    >
      <div className='bg-white w-full max-w-md rounded-md shadow-md p-4 sm:p-8'>
        <div className='flex justify-between items-center'>
          <div />
          <i className='text-xl' onClick={closeModal}>
            <MdClose />
          </i>
        </div>
        <hr className='-mx-4 md:-mx-8 my-6' />
        <div className='flex flex-col items-center justify-center text-red-600 text-center'>
          <img className='w-28' src={error} alt='success' />
          {children}
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
