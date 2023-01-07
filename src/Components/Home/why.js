import React from "react";
import check from "../../Assets/images/check.png";
const Why = () => {
  const whys = [
    "Access to Shipping Address",
    "Trusted",
    "Fast Delivery shipping",
    "Ability to pay with virtual dollar card",
  ];
  return (
    <section className='bg-green-50'>
      <div className='max-width1 py-10'>
        <h2 className='font-bold text-sec text-center capitalize my-8'>
          Why you should choose us
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {whys.map((w, i) => (
            <div key={i} className='flex items-center gap-4'>
              <img className='w-5' src={check} alt='check' />
              <h2 className='text-base'>{w}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
