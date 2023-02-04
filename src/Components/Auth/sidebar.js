import React from "react";
import bg from "../../Assets/images/signin-bg.png";
import logo from "../../Assets/images/logo2.png";
const Sidebar = () => {
  return (
    <div className='bg-sec h-screen md:block hidden w-[35%] p-12 fixed top-0 left-0'>
      <div className='relative z-10'>
        <img src={logo} alt='' />
        <p className='font-medium text-2xl lg:text-[2.2rem] leading-[3rem] text-white'>
          Buy and Ship from your Favorites Stores In US and have them Delivered
          to your Doorstep.
        </p>
        <p className='font-medium text-lg text-white my-4'>
          Save up to 95% on international shipping and tax.
        </p>
      </div>
      <img src={bg} alt='bg' className='absolute top-0 left-0 h-screen w-fit' />
    </div>
  );
};

export default Sidebar;
