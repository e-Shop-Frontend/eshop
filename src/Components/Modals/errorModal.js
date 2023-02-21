import React from "react";
import error from "../../Assets/images/error.png";
const ErrorModal = ({ visibilityState, children }) => {
  return (
    <div
      className={`bg-gray-600 bg-opacity-70 w-full h-screen flex items-center justify-center fixed top-0 right-0 z-20 p-5 transition ${
        visibilityState ? "scale-100" : "scale-0"
      }`}
    >
      <div className='bg-white w-full max-w-sm rounded-md shadow-md p-4 sm:p-8 flex flex-col items-center justify-center'>
        <img className='w-20' src={error} alt='success' />
        {children}
      </div>
    </div>
  );
};

export default ErrorModal;
