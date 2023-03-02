import React from "react";
import cardLogo from "../../../../Assets/images/visa2.png";

const Card = () => {
  return (
    <div className='bg-black text-white p-8 rounded-xl my-2 sm:w-[450px]'>
      <h2 className='text-sm'>Available Funds</h2>
      <h2 className='my-1 font-bold text-xl'>$0.00</h2>
      <h2 className='text-sm'>Available to spend</h2>
      <p className='text-sm md:text-lg my-4 font-medium'>
        5346 6353 35377 36724 5346
      </p>
      <div className='grid grid-cols-2'>
        <div className='flex text-sm items-center gap-2 font-light'>
          <h2>
            Valid <br /> thru
          </h2>
          <h2>02/34</h2>
        </div>
        <div>
          <h2 className='font-light'>0 8 6</h2>
        </div>
      </div>
      <div className='flex justify-between gap-4 items-center my-3'>
        <h2 className='text-base font-medium'>John Doe</h2>
        <img className='w-16' src={cardLogo} alt='visa' />
      </div>
    </div>
  );
};

export default Card;
