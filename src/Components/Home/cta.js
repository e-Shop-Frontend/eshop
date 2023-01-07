import React from "react";
import Btn from "../Button/btn";

const CTA = () => {
  return (
    <div className='flex flex-col items-center text-center max-width1 py-10'>
      <p className='my-4 text-base text-sec font-medium'>
        Have you been finding it difficult to pay for your shopping abroad?
        Don’t fret eShopAfrica is here for you Generate a virtual dollar card
        and experience a seamless journey.
      </p>
      <Btn text='Generate Now' className='bg-pry my-4' />
    </div>
  );
};

export default CTA;
