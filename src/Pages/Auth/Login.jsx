import React, { useState } from "react";
import bg from "../../Assets/images/signin-bg.png";
import Input from "../../Components/Form/Input";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../../Components/Button/btn";
import Sidebar from "../../Components/Auth/sidebar";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { setToken, setUserProfile } from "../../Redux/features/authSlice";
import { baseUrl } from "../../Utils/constants";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const URL = `${baseUrl}login`;
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
      }, 2000);
    } catch (error) {
      msg = error.response.data.message;
      // console.log(error);
      setIsLoading(false);
      toast.error(msg);
    }
  };

  return (
    <div className='relative flex'>
      <ToastContainer autoClose={3000} />
      <Sidebar />
      <div className='w-full md:w-[65%] ml-auto h-[600px]  justify-center my-5 p-8 overflow-y-scroll'>
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
            <h2 className='text-xs text-right italic'>Forgot Password?</h2>

            <Btn
              loadingState={isLoading}
              text={"Login"}
              className='bg-pry w-full my-4 font-bold'
            />
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
