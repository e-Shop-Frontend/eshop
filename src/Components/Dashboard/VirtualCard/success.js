import React from "react";
import { useNavigate } from "react-router-dom";
import success from "../../../Assets/images/success.png";
import Btn from "../../Button/btn";
const Success = ({ setVirtual }) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center bg-white p-4 py-12 rounded-md shadow-md'>
      <img className='w-32 md:w-52' src={success} alt='success' />
      <h2 className='my-4 text-lg font-medium text-center'>
        Unique Pin Created Successfully
      </h2>
      <p className='text-center'>
        Please click on continue to fund your new card.
      </p>
      <Btn
        className={"bg-pry my-5"}
        text='Continue'
        onClick={() => {
          setVirtual();
          navigate("/dashboard/wallet");
        }}
      />
    </div>
  );
};

export default Success;
