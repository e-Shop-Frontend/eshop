import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import Btn from "../../Button/btn";

const ShipmentSummary = ({
  inputItems,
  setActiveSlide,
  isLoading,
  createShipment,
}) => {
  const prevSlide = () => {
    setActiveSlide(1);
  };

  return (
    <div>
      <h2 className='text-xl font-medium my-4'>Shipment Summary</h2>
      <div className='bg-white w-full rounded-md shadow-md p-8'>
        <h2 className='text-center my-6'>Review shipment information</h2>
        <div className='border-b p-2 flex items-center justify-between gap-2 font-medium text-xs md:text-sm'>
          <h2>Store Name:</h2>
          <h2 className='text-gray-600'>{inputItems.store_name}</h2>
          <button
            className='flex items-center p-2 rounded-md bg-pry text-black gap-2'
            onClick={prevSlide}
          >
            <h2 className='text-xs hidden md:block'>Edit</h2>
            <i>
              <AiOutlineEdit />
            </i>
          </button>
        </div>
        <div className='border-b p-2 flex items-center justify-between gap-2 font-medium text-xs md:text-sm'>
          <h2>Category:</h2>
          <h2 className='text-gray-600'>{inputItems.category}</h2>
          <button
            className='flex items-center p-2 rounded-md bg-pry text-black gap-2'
            onClick={prevSlide}
          >
            <h2 className='text-xs hidden md:block'>Edit</h2>
            <i>
              <AiOutlineEdit />
            </i>
          </button>
        </div>
        <div className='border-b p-2 flex items-center justify-between gap-2 font-medium text-xs md:text-sm'>
          <h2>Specification:</h2>
          <h2 className='text-gray-600'>{inputItems.specification}</h2>
          <button
            className='flex items-center p-2 rounded-md bg-pry text-black gap-2'
            onClick={prevSlide}
          >
            <h2 className='text-xs hidden md:block'>Edit</h2>
            <i>
              <AiOutlineEdit />
            </i>
          </button>
        </div>
        <div className='border-b p-2 flex items-center justify-between gap-2 font-medium text-xs md:text-sm'>
          <h2>Quantity:</h2>
          <h2 className='text-gray-600'>{inputItems.quantity}</h2>
          <button
            className='flex items-center p-2 rounded-md bg-pry text-black gap-2'
            onClick={prevSlide}
          >
            <h2 className='text-xs hidden md:block'>Edit</h2>
            <i>
              <AiOutlineEdit />
            </i>
          </button>
        </div>
        <Btn
          text={"Continue"}
          className='w-full bg-pry my-6'
          onClick={createShipment}
          loadingState={isLoading}
        />
      </div>
    </div>
  );
};

export default ShipmentSummary;
