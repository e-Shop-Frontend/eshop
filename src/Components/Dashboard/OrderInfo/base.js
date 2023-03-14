import React from "react";
import { Spinner } from "react-activity";
import SingleShipment from "./singleShipment";

const OrderBase = ({
  setActiveSlide,
  getSingleOrder,
  allOrders,
  isLoading,
}) => {
  const orderHeader = [
    "S/N",
    "Date",
    "Unique Code",
    "Tracking ID",
    "Kg/Dimension",
    "Amount",
    "Payment Staus",
    "Status",
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
          <div className='min-w-[1200px]'>
            <div className='grid gap-2 grid-cols-9'>
              {orderHeader.map((header, index) => (
                <h2 className='whitespace-nowrap font-medium' key={index}>
                  {header}
                </h2>
              ))}
            </div>
            <hr className='my-4' />
          </div>
          <div className='min-w-[1200px]'>
            {isLoading ? (
              <div className='flex flex-col items-center justify-center min-h-[300px]'>
                {/* <h2>Loading Shipments...</h2> */}
                <Spinner size={50} />
              </div>
            ) : allOrders?.length < 1 ? (
              <h2>
                No orders to display at the moment, please proceed to create a
                shipment
              </h2>
            ) : (
              allOrders?.map((item, index) => (
                <SingleShipment
                  setActiveSlide={setActiveSlide}
                  item={item}
                  key={index}
                  index={index}
                  getSingleOrder={getSingleOrder}
                  isLoading={isLoading}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBase;
