import React from "react";

const BtnGrid = ({ children, className, onClick, border }) => {
  return (
    <button
      className={`p-3 shadow-xl font-medium px-4 rounded-md ${
        border && "border-2 border-white"
      } hover:scale-105 whitespace-nowrap w-fit text-sm ${className} flex items-center gap-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BtnGrid;
