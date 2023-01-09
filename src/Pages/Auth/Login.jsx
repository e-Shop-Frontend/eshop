import React, { useState } from "react";
import bg from "../../Assets/images/signin-bg.png";
import Input from "../../Components/Form/Input";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../../Components/Button/btn";
const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className='relative flex'>
      <div className='bg-sec h-screen md:block hidden w-[35%] p-12 top-0 left-0'>
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
      <div className='md:w-[65%] ml-auto h-[600px]  justify-center my-5 p-8 overflow-y-scroll'>
        <h2 className='font-bold text-2xl'>Log in</h2>
        <p className='font-medium text-sm my-3'>
          <span className='block text-xl'>Welcome!</span>Enter your cridential
          to access your account.
        </p>

        <div className='flex items-center gap-2'>
          <form action='' className='w-full' onSubmit={handleLogin}>
            <Input
              input
              id='email'
              type='email'
              className={"border-2"}
              title='Email'
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

            <Btn text={"Login"} className='bg-pry w-full my-4 font-bold' />
            <h2 className='text-sm'>
              Don't have an account?{" "}
              <Link to='/signup' className='text-green-600 font-bold'>
                Sign up
              </Link>
            </h2>
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

export default Login;
