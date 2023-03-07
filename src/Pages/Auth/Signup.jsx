import React, { useState } from "react";
import google from "../../Assets/images/google.png";
import Input from "../../Components/Form/Input";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../../Components/Button/btn";
import Sidebar from "../../Components/Auth/sidebar";
import axios from "axios";
import {
  baseUrl,
  setToken,
  setUserProfile,
} from "../../Redux/features/authSlice";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSignup = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const URL = `${baseUrl}register`;
    let msg;
    try {
      const res = await axios.post(URL, formData);
      console.log(res);
      setIsLoading(false);
      msg = res.data.message;
      const user = res.data.data;
      const token = res.data.token;
      dispatch(setUserProfile(user));
      dispatch(setToken(token));
      toast.success(msg);
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      msg = error.response.data.message;
      console.log(error);
      setIsLoading(false);
      toast.error(msg);
    }
  };

  return (
    <div className='relative flex'>
      <ToastContainer autoClose={3000} />
      <Sidebar />
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
          <form action='' className='w-full' onSubmit={handleSignup}>
            <Input
              input
              id='firstname'
              className={"border-2"}
              title='First Name'
              type='name'
              required={true}
              setItem={handleInputChange}
            />
            <Input
              input
              id='lastname'
              className={"border-2"}
              title='Last Name'
              type='name'
              required={true}
              setItem={handleInputChange}
            />
            <Input
              input
              id='email'
              type='email'
              className={"border-2"}
              title='Email Address'
              required={true}
              setItem={handleInputChange}
            />
            <Input
              input
              id='phone_number'
              type='tel'
              className={"border-2"}
              title='Phone Number'
              required={true}
              setItem={handleInputChange}
            />
            <div className='relative'>
              <Input
                input
                id='password'
                type={`${isPasswordVisible ? "text" : "password"}`}
                className={"border-2"}
                title='Password'
                required={true}
                setItem={handleInputChange}
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
                setItem={handleInputChange}
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
              setItem={handleInputChange}
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
              loadingState={isLoading}
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
