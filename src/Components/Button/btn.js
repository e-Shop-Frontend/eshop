import React from "react";

const Btn = ({ text, className, onClick }) => {
  return (
    <button
      className={`p-3 shadow-xl font-medium px-8 rounded-md border-2 border-white hover:scale-105 whitespace-nowrap w-fit text-sm ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Btn;
