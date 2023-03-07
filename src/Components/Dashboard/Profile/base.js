import React from "react";
import Btn from "../../Button/btn";
import profile from "../../../Assets/images/profile.jpg";
import { useSelector } from "react-redux";

const Base = ({ nextSlide }) => {
  const { user } = useSelector((state) => state.auth);
  const { firstname, lastname, phone_number, email, dob, profile_photo } = user;
  return (
    <div>
      <div className='my-5'>
        <img src={profile} alt='image' className='w-24 h-24 rounded-full' />

        <div>
          <h2>First Name</h2>
          <h2 className='font-medium my-2 border p-3 rounded-md shadow-sm mb-5'>
            {firstname}
          </h2>
        </div>
        <div>
          <h2>Last Name</h2>
          <h2 className='font-medium my-2 border p-3 rounded-md shadow-sm mb-5'>
            {lastname}
          </h2>
        </div>
        <div>
          <h2>Phone Number</h2>
          <h2 className='font-medium my-2 border p-3 rounded-md shadow-sm mb-5'>
            {phone_number}
          </h2>
        </div>
        <div>
          <h2>Email</h2>
          <h2 className='font-medium my-2 border p-3 rounded-md shadow-sm mb-5'>
            {email}
          </h2>
        </div>
        <div>
          <h2>Date of Birth</h2>
          <h2 className='font-medium my-2 border p-3 rounded-md shadow-sm mb-5'>
            {dob}
          </h2>
        </div>

        <Btn text={"Edit"} className='bg-pry' onClick={() => nextSlide()} />
      </div>
    </div>
  );
};

export default Base;
