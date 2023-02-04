import React, { useState } from "react";
import Base from "../../Components/Dashboard/Address/base";
import NewAddress from "../../Components/Dashboard/Address/newAddress";

const Address = () => {
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
  const [savedAddress, setSavedAddress] = useState(false);

  return (
    <div>
      {activeSlide === 0 && (
        <Base
          savedAddress={savedAddress}
          nextSlide={nextSlide}
          inputItems={inputItems}
        />
      )}
      {activeSlide === 1 && (
        <NewAddress
          prevSlide={prevSlide}
          inputItems={inputItems}
          nextSlide={nextSlide}
          handleInputChange={handleInputChange}
          setSavedAddress={setSavedAddress}
        />
      )}
    </div>
  );
};

export default Address;
