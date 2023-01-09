import React, { useState } from "react";
import bg from "../../Assets/images/signin-bg.png";
import google from "../../Assets/images/google.png";
import Input from "../../Components/Form/Input";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Btn from "../../Components/Button/btn";
const Signup = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className='relative flex'>
      <div className='bg-sec h-screen md:block hidden w-[35%] p-12 fixed top-0 left-0'>
        <div className='relative z-10'>
          <p className='font-medium text-2xl lg:text-[2.2rem] leading-[3rem] text-white'>
            Buy and Ship from your Favorites Stores In US and have them
            Delivered to your Doorstep.
          </p>
          <p className='font-medium text-lg text-white my-4'>
            Save up to 95% on international shipping and tax.
          </p>
        </div>
        <img
          src={bg}
          alt='bg'
          className='absolute top-0 left-0 h-screen w-fit'
        />
      </div>
      <div className='md:w-[65%] ml-auto justify-center my-5 p-8'>
        <h2 className='font-bold text-2xl'>Create an Account</h2>
        <p className='text-sm my-3'>
          To get started fill in your information or sign up with google
        </p>
        <button className='flex items-center justify-center p-4 gap-4 bg-gray-300 rounded-md hover:bg-gray-500 text-sm font-medium w-full'>
          <img src={google} className='w-5' alt='google' />
          Sign up with Google
        </button>
        <div className='flex items-center justify-between gap-2 my-5'>
          <div className='w-[45%] h-[1px] bg-gray-500' />
          <h2 className='font-medium text-sm'>OR</h2>
          <div className='w-[45%] h-[1px] bg-gray-500' />
        </div>
        <h2 className='text-sm'>
          Already have an account?{" "}
          <Link to='/login' className='text-green-600 font-bold'>
            Sign in
          </Link>
        </h2>
        <div className='flex items-center gap-2'>
          <form action='' className='w-full'>
            <Input
              input
              id='first_name'
              className={"border-2"}
              title='First Name'
              type='name'
              required={true}
            />
            <Input
              input
              id='last_name'
              className={"border-2"}
              title='Last Name'
              type='name'
              required={true}
            />
            <Input
              input
              id='email'
              type='email'
              className={"border-2"}
              title='Email Address'
              required={true}
            />
            <Input
              input
              id='tel'
              type='tel'
              className={"border-2"}
              title='Phone Number'
              required={true}
            />
            <div className='relative'>
              <Input
                input
                id='password'
                type={`${isPasswordVisible ? "text" : "password"}`}
                className={"border-2"}
                title='Password'
                required={true}
              />
              <i
                className='absolute bottom-4 cursor-pointer right-5 text-2xl text-gray-400'
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </i>
            </div>
            <div className='relative'>
              <Input
                input
                id='confirm_password'
                type={`${isPasswordVisible ? "text" : "password"}`}
                className={"border-2"}
                title='Confirm Password'
                required={true}
              />
              <i
                className='absolute bottom-4 cursor-pointer right-5 text-2xl text-gray-400'
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </i>
            </div>
            <Input
              input
              id='referal_code'
              type='text'
              className={"border-2"}
              title='Referal Code (optional)'
            />
            <div className='flex items-center gap-3'>
              <Input check id='agree' />
              <h2 className='text-sm'>
                I agree to eshop Africa{" "}
                <Link className='text-blue-800' to='/terms'>
                  Term and Privacy Policy
                </Link>
              </h2>
            </div>
            <Btn
              text={"Create Account"}
              className='bg-pry w-full my-4 font-bold'
            />
            <Link to='/' className='flex items-center text-sm my-5'>
              <i>
                <IoIosArrowBack />
              </i>
              <h2>Back to Homepage</h2>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
