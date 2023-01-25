import React from "react";
import success from "../../../Assets/images/success.png";
import Btn from "../../Button/btn";
const Success = ({ setSelectedIndex }) => {
  return (
    <div className='flex flex-col justify-center items-center bg-white p-4 py-12 rounded-md shadow-md'>
      <img className='w-32 md:w-52' src={success} alt='success' />
      <h2 className='my-4 text-lg font-medium text-center'>
        Thank you for funding your wallet
      </h2>
      <p className='text-center'>
        Please be aware it may take a few minutes for the transaction to appear
        on your dashboard
      </p>
      <Btn
        className={"bg-pry my-5"}
        text='Continue'
        onClick={() => setSelectedIndex(null)}
      />
    </div>
  );
};

export default Success;
