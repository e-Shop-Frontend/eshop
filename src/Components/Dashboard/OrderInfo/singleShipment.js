import React from "react";

const SingleShipment = ({ item, setActiveSlide, index }) => {
  return (
    <div className='grid gap-2 grid-cols-9 my-4 text-sm'>
      <h2>{index + 1}</h2>
      <h2>{item?.date}</h2>
      <h2>{item?.uniqueCode}</h2>
      <h2>{item?.trackingID}</h2>
      <h2>{item?.dimension}</h2>
      <h2>{item?.amount}</h2>
      <h2>{item?.paymentStatus}</h2>
      <h2>{item?.status}</h2>
      <h2
        onClick={() => setActiveSlide(1)}
        className='text-green-600 italic underline select-none cursor-pointer'
      >
        More
      </h2>
    </div>
  );
};

export default SingleShipment;
