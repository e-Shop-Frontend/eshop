import React from "react";

const SingleShipment = ({ item, getSingleOrder, index }) => {
  return (
    <div className='grid gap-2 grid-cols-9 my-4 text-sm'>
      <h2>{index + 1}</h2>
      <h2>{item?.created_at.slice(0, 10)}</h2>
      <h2>{item?.uniqueCode}</h2>
      <h2>{item?.tracking_number}</h2>
      <h2>{item?.kg}</h2>
      <h2>{item?.amount}</h2>
      <h2>{item?.payment_status}</h2>
      <h2>{item?.shipment_status}</h2>
      <h2
        onClick={() => getSingleOrder(item?.id)}
        className='text-green-600 italic underline select-none cursor-pointer'
      >
        More
      </h2>
    </div>
  );
};

export default SingleShipment;
