import React from "react";

const Btn = ({ text, className }) => {
  return (
    <button
      className={`p-2 shadow-xl text-black font-bold px-8 rounded-md border-2 border-white hover:scale-105 whitespace-nowrap w-fit ${className}`}
    >
      {text}
    </button>
  );
};

export default Btn;
