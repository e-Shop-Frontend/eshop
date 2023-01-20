import React from "react";
import success from "../../../Assets/images/success.png";
import Btn from "../../Button/btn";
const Success = ({ setActiveSlide }) => {
  return (
    <div className='flex flex-col justify-center items-center bg-white p-4 py-12 rounded-md shadow-md'>
      <img className='w-32 md:w-52' src={success} alt='success' />
      <h2 className='my-4 text-lg font-medium text-center'>
        Thank you for submitting your details
      </h2>
      <p className='text-center'>
        Please click on continue to fund your new card.
      </p>
      <Btn
        className={"bg-pry my-5"}
        text='Continue'
        onClick={() => setActiveSlide(0)}
      />
    </div>
  );
};

export default Success;
