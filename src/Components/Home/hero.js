import React from "react";
import { Link } from "react-router-dom";
import hero from "../../Assets/images/hero.png";
import Btn from "../Button/btn";
import { AiOutlineSearch } from "react-icons/ai";
const Hero = () => {
  return (
    <section className='bg-grad'>
      <div className='max-width1'>
        <div className='grid grid-cols-1 lg:grid-cols-2 text-white items-center gap-4 py-10'>
          <div>
            <h2 className='text-[2rem] md:text-[3rem] font-medium leading-[2.6rem] md:leading-[3.5rem] capitalize'>
              Buy and ship from your favorites stores In US and have them
              delivered to your doorstep in Nigeria.
            </h2>
            <p className='text-lg md:text-xl my-3 font-medium'>
              Save up to 95% on international shipping and tax.
            </p>
            <div className='flex items-center gap-4'>
              <Btn text='Sign In' className='bg-pry' />
              <Link to='/' className='underline text-sm'>
                How to Ship
              </Link>
            </div>

            <div>
              <form
                action=''
                className='flex gap-4 my-10'
                onSubmit={(e) => e.preventDefault()}
              >
                <div className='flex items-center gap-2 text-gray-800 w-full relative'>
                  <i className='text-xl left-4 absolute'>
                    <AiOutlineSearch />
                  </i>
                  <input
                    type='text'
                    required
                    className='bg-white p-4 w-full block px-8 pl-12 rounded-md'
                    placeholder='Enter Tracking ID'
                  />
                </div>
                <Btn text='Track' className='bg-pry' />
              </form>
            </div>
          </div>
          <div className='lg:p-12'>
            <img src={hero} className='w-full' alt='hero' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
