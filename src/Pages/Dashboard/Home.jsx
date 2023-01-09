import React, { useState } from "react";
import Address from "../../Components/Dashboard/Home/address";
import CreateShipment from "../../Components/Dashboard/Home/createShipment";
import Shipment from "../../Components/Dashboard/Home/shipment";
import ShipmentSummary from "../../Components/Dashboard/Home/shipmentSummary";
const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const nextSlide = () => {
    setActiveSlide(activeSlide + 1);
  };
  return (
    <div className=''>
      {activeSlide === 0 ? (
        <Shipment nextSlide={nextSlide} />
      ) : activeSlide === 1 ? (
        <CreateShipment nextSlide={nextSlide} />
      ) : activeSlide === 2 ? (
        <ShipmentSummary nextSlide={nextSlide} />
      ) : (
        <Address nextSlide={nextSlide} />
      )}
    </div>
  );
};

export default Home;
