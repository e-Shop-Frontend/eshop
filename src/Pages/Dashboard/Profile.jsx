import React, { useState } from "react";
import Form from "../../Components/Dashboard/Profile/form";
import Base from "../../Components/Dashboard/Profile/base";

const Profile = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide(activeSlide + 1);
  };

  const prevSlide = () => {
    setActiveSlide(activeSlide - 1);
  };

  return (
    <div>
      <h2 className='text-2xl font-medium'>Profile</h2>
      <h4 className='text-base my-4 font-medium'>Personal Information</h4>
      <hr />
      {activeSlide === 0 && <Base nextSlide={nextSlide} />}
      {activeSlide === 1 && <Form prevSlide={prevSlide} />}
    </div>
  );
};

export default Profile;
