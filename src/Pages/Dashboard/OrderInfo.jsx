import React from "react";
import { useState } from "react";
import OrderBase from "../../Components/Dashboard/OrderInfo/base";
import ShipmentDetails from "../../Components/Dashboard/OrderInfo/shipmentDetails";

const OrderInfo = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div>
      {activeSlide === 0 ? (
        <OrderBase setActiveSlide={setActiveSlide} />
      ) : (
        <ShipmentDetails setActiveSlide={setActiveSlide} />
      )}
    </div>
  );
};

export default OrderInfo;
