import React, { useState } from "react";
import ConfirmPin from "../../Components/Dashboard/VirtualCard/confirmPin";
import Generate from "../../Components/Dashboard/VirtualCard/generate";
import OTP from "../../Components/Dashboard/VirtualCard/pin";
import Success from "../../Components/Dashboard/VirtualCard/success";

const Virtual = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [inputItems, setInputItems] = useState({});
  const nextSlide = () => {
    setActiveSlide(activeSlide + 1);
  };
  const prevSlide = () => {
    setActiveSlide(activeSlide - 1);
  };

  // const handleInputChange = (e) => {
  //   setInputItems({ ...inputItems, [e.target.name]: e.target.value });
  // };
  return (
    <div>
      {activeSlide === 0 && <Generate nextSlide={nextSlide} />}
      {activeSlide === 1 && <OTP prevSlide={prevSlide} nextSlide={nextSlide} />}
      {activeSlide === 2 && (
        <ConfirmPin prevSlide={prevSlide} nextSlide={nextSlide} />
      )}
      {activeSlide === 3 && (
        <Success setActiveSlide={setActiveSlide} nextSlide={nextSlide} />
      )}
    </div>
  );
};

export default Virtual;
