import React, { useEffect, useState } from "react";
import Btn from "../../Button/btn";
import Input from "../../Form/Input";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUserProfile } from "../../../Redux/features/authSlice";
import { baseUrl } from "../../../Utils/constants";
import { useNavigate } from "react-router-dom";

const Form = ({ prevSlide }) => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [profile_photo, setProfilePhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      const { firstname, lastname, phone_number, email, dob, profile_photo } =
        user;
      setFormData({
        firstname,
        lastname,
        phone_number,
        email,
        dob,
        profile_photo,
      });
    }
  }, []);
  const handleFormInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const setUserImage = (e) => {
    setProfilePhoto({ [e.target.name]: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    let formInput = new FormData();
    e.preventDefault();
    setIsLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const URL = `${baseUrl}update-user-profile`;
    let msg;
    const data = { ...formData, ...profile_photo };
    console.log(data);
    for (const key in data) {
      formInput.append(key, data[key]);
    }
    try {
      const res = await axios.post(URL, formInput, config);
      console.log(res);
      setIsLoading(false);
      msg = res.data.message;
      const user = res.data.data;
      dispatch(setUserProfile(user));
      toast.success(msg);
      setTimeout(() => {
        prevSlide();
      }, 3000);
    } catch (error) {
      msg = error.response.data.message;
      console.log(error);
      setIsLoading(false);
      toast.error(msg);
    }
  };

  return (
    <div>
      <ToastContainer autoClose={3000} />
      <form action='' onSubmit={submitHandler}>
        <Input
          type='file'
          image
          id='profile_photo'
          className={"border-2"}
          // required={true}
          setItem={setUserImage}
        />
        <Input
          type='name'
          input
          title={"First Name"}
          id='firstname'
          className={"border-2"}
          required={true}
          value={formData.firstname || ""}
          setItem={handleFormInput}
        />
        <Input
          type='name'
          input
          title={"Last Name"}
          id='lastname'
          className={"border-2"}
          required={true}
          value={formData.lastname || ""}
          setItem={handleFormInput}
        />

        <Input
          type='tel'
          input
          title={"Phone Number"}
          id='phone_number'
          className={"border-2"}
          required={true}
          value={formData.phone_number || ""}
          setItem={handleFormInput}
        />
        <Input
          type='email'
          input
          title={"Email Address"}
          id='email'
          className={"border-2"}
          required={true}
          value={formData.email || ""}
          setItem={handleFormInput}
          readOnly={true}
        />
        <Input
          type='date'
          input
          title={"Date of Birth"}
          id='dob'
          className={"border-2"}
          required={true}
          value={formData.dob || ""}
          setItem={handleFormInput}
        />

        <Btn loadingState={isLoading} text={"Next"} className='bg-pry' />
      </form>
    </div>
  );
};

export default Form;
