import React from "react";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

const Btn = ({ text, className, onClick, loadingState }) => {
  return (
    <button
      className={`p-3 shadow-xl font-medium px-8 rounded-md border-2 border-white hover:scale-105 whitespace-nowrap w-fit text-sm ${className} flex justify-center`}
      onClick={onClick}
    >
      {loadingState ? <Spinner /> : text}
    </button>
  );
};

export default Btn;
