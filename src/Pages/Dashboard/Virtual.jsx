import React, { useState } from "react";
import Generate from "../../Components/Dashboard/VirtualCard/generate";
import OTP from "../../Components/Dashboard/VirtualCard/otp";

const Virtual = () => {
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
      {activeSlide === 0 && <Generate nextSlide={nextSlide} />}
      {activeSlide === 1 && <OTP prevSlide={prevSlide} />}
    </div>
  );
};

export default Virtual;
