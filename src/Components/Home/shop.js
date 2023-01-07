import React from "react";
import image from "../../Assets/images/shop.png";
import Btn from "../Button/btn";

const Shop = () => {
  return (
    <div className='bg-green-200 py-10'>
      <div className='max-width1 flex flex-col md:flex-row-reverse items-center'>
        <div className='md:w-[50%] md:p-12'>
          <img src={image} alt='shop' />
        </div>
        <div className='md:w-[50%]'>
          <h2 className='text-3xl font-medium'>
            Shop and ship with ease live a stress free life.
          </h2>
          <p className='my-4 text-sec'>
            Experience what it takes to shop and ship with ease.{" "}
          </p>
          <Btn text='Get Quote' className='bg-pry' />
        </div>
      </div>
    </div>
  );
};

export default Shop;
