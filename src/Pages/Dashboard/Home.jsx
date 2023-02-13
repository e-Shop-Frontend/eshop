import React, { useState } from "react";
import Address from "../../Components/Dashboard/Home/address";
import CreateShipment from "../../Components/Dashboard/Home/createShipment";
import Shipment from "../../Components/Dashboard/Home/shipment";
import ShipmentSuccess from "../../Components/Dashboard/Home/shipmentSuccess";
import ShipmentSummary from "../../Components/Dashboard/Home/shipmentSummary";
const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [inputItems, setInputItems] = useState({});
  const nextSlide = () => {
    setActiveSlide(activeSlide + 1);
  };
  const handleInputChange = (e) => {
    setInputItems({ ...inputItems, [e.target.name]: e.target.value });
  };

  return (
    <div className=''>
      {activeSlide === 0 ? (
        <Shipment nextSlide={nextSlide} />
      ) : activeSlide === 1 ? (
        <CreateShipment
          handleInputChange={handleInputChange}
          nextSlide={nextSlide}
          inputItems={inputItems}
        />
      ) : activeSlide === 2 ? (
        <ShipmentSummary
          setActiveSlide={setActiveSlide}
          inputItems={inputItems}
          nextSlide={nextSlide}
        />
      ) : activeSlide === 3 ? (
        <Address nextSlide={nextSlide} />
      ) : (
        <ShipmentSuccess setActiveSlide={setActiveSlide} />
      )}
    </div>
  );
};

export default Home;
