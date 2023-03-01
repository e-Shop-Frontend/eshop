import React, { useEffect } from "react";
import success from "../../Assets/images/success.png";
const SuccessModal = ({ visibilityState, children }) => {
  return (
    <div
      className={`bg-gray-600 bg-opacity-70 w-full h-screen flex items-center justify-center fixed top-0 right-0 z-20 p-5 transition ${
        visibilityState ? "scale-100" : "scale-0"
      }`}
    >
      <div className='bg-white w-full max-w-sm rounded-md shadow-md p-4 sm:p-8 flex flex-col items-center justify-center'>
        <img className='w-28' src={success} alt='success' />
        {children}
      </div>
    </div>
  );
};

export default SuccessModal;
