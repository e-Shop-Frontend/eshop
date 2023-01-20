import React, { useState } from "react";
import Form from "../../Components/Dashboard/Profile/form";
import Base from "../../Components/Dashboard/Profile/base";
import { Greet, TodayDate } from "../../Utils/getDate";
import { BsCalendarDate } from "react-icons/bs";

const Profile = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [inputItems, setInputItems] = useState({});
  const nextSlide = () => {
    setActiveSlide(activeSlide + 1);
  };
  const prevSlide = () => {
    setActiveSlide(activeSlide - 1);
  };

  const handleInputChange = (e) => {
    setInputItems({ ...inputItems, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between gap-4 md:items-center border-b-2 py-4'>
        <div>
          <Greet user={"John"} />
        </div>
        <div className='flex gap-2 items-center'>
          <BsCalendarDate />
          <TodayDate />
        </div>
      </div>
      {activeSlide === 0 && <Base nextSlide={nextSlide} />}
      {activeSlide === 1 && <Form />}
    </div>
  );
};

export default Profile;
