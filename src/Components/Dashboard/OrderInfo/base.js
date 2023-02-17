import React from "react";
import SingleShipment from "./singleShipment";

const OrderBase = ({ setActiveSlide }) => {
  const orderHeader = [
    "S/N",
    "Date",
    "Unique Code",
    "Tracking ID",
    "Kg/Dimension",
    "Status",
  ];
  const orderContent = [
    {
      date: "04/03/2023",
      uniqueCode: "3342",
      trackingID: "xxxxxxx",
      dimension: "12 LBS",
      status: "Pending",
    },
    {
      date: "10/03/2023",
      uniqueCode: "3342",
      trackingID: "xxxxxxx",
      dimension: "32 LBS",
      status: "Pending",
    },
  ];
  return (
    <div>
      <h2 className='font-medium text-2xl'>Order Info</h2>
      <p className='my-4 text-base'>
        Kindly note that when shipment has been processed it can’t be cancelled.
      </p>

      <div className='my-8'>
        <h3 className='text-base font-medium'>Recent Orders</h3>
        <div className='overflow-scroll bg-gray-100 shadow-md rounded-md p-5'>
          <div className='min-w-[900px]'>
            <div className='grid gap-2 grid-cols-7'>
              {orderHeader.map((header, index) => (
                <h2 className='whitespace-nowrap font-medium' key={index}>
                  {header}
                </h2>
              ))}
            </div>
            <hr className='my-4' />
          </div>
          <div className='min-w-[900px]'>
            {orderContent.map((item, index) => (
              <SingleShipment
                setActiveSlide={setActiveSlide}
                item={item}
                key={index}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBase;
