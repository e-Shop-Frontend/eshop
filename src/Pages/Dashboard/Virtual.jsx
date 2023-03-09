import React, { useState } from "react";
import { useSelector } from "react-redux";
import ConfirmPin from "../../Components/Dashboard/VirtualCard/confirmPin";
import DollarCard from "../../Components/Dashboard/VirtualCard/DollarCard";
import Generate from "../../Components/Dashboard/VirtualCard/generate";
import OTP from "../../Components/Dashboard/VirtualCard/pin";
import Success from "../../Components/Dashboard/VirtualCard/success";

const Virtual = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { dollarCardState } = useSelector((state) => state.dashboard);

  const nextSlide = () => {
    setActiveSlide(activeSlide + 1);
  };

  const prevSlide = () => {
    setActiveSlide(activeSlide - 1);
  };
  return (
    <div>
      {/* If Users Don't have a virtual card yet */}
      {!dollarCardState && (
        <div>
          {activeSlide === 0 && <Generate nextSlide={nextSlide} />}
          {activeSlide === 1 && (
            <OTP prevSlide={prevSlide} nextSlide={nextSlide} />
          )}
          {activeSlide === 2 && (
            <ConfirmPin prevSlide={prevSlide} nextSlide={nextSlide} />
          )}
          {activeSlide === 3 && <Success />}
        </div>
      )}

      {/* If Users have a Virtual card already */}
      {dollarCardState && <DollarCard />}
    </div>
  );
};

export default Virtual;
