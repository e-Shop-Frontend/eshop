import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../Redux/features/dashboardSlice";
import Btn from "../../Button/btn";
import Input from "../../Form/Input";

const CreateShipment = ({ nextSlide, handleInputChange, inputItems }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLocation("Create Shipment"));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    nextSlide();
  };

  return (
    <div>
      <h2 className='text-xl font-medium my-4'>Create Shipment</h2>
      <div className='bg-white w-full rounded-md shadow-md p-8'>
        <h2 className='text-center'>
          Enter your order information to allow us process your order
        </h2>
        <form action='' className='w-full' onSubmit={handleSubmit}>
          <Input
            input
            id='store_name'
            type='text'
            className={"bg-gray-100"}
            title='Store Name'
            required={true}
            setItem={handleInputChange}
            value={inputItems.store_name || ""}
          />
          <Input
            input
            id='category'
            type='text'
            className={"bg-gray-100"}
            title='Category'
            required={true}
            setItem={handleInputChange}
            value={inputItems.category || ""}
          />
          <Input
            input
            id='quantity'
            type='number'
            className={"bg-gray-100"}
            title='Quantity'
            required={true}
            setItem={handleInputChange}
            value={inputItems.quantity || ""}
          />
          <Btn text={"Continue"} className='w-full bg-pry my-6' />
        </form>
      </div>
    </div>
  );
};

export default CreateShipment;
