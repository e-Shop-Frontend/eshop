import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import Btn from "../../Button/btn";
const ShipmentDetails = ({ setActiveSlide }) => {
  return (
    <div>
      <h2 className='font-medium text-lg'>Shipment Details</h2>

      <div className='rounded-md border shadow-md my-10 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 py-10 text-sm'>
        <div>
          <div className='flex items-center gap-2'>
            <i className='text-lg'>
              <FaMapMarkerAlt />
            </i>
            <h2 className='text-base font-medium'>Ship from</h2>
          </div>
          <p className='my-3'>
            109,Country club road Indianapolis, Indiana <br /> +(317)529-2934
          </p>
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <i className='text-lg'>
              <FaMapMarkerAlt />
            </i>
            <h2 className='text-base font-medium'>Ship to</h2>
          </div>
          <p className='my-3'>
            17, Ibikunle street Ikeja, Lagos <br />
            +2348020309067
          </p>
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <i className='text-lg'>
              <BiDetail />
            </i>
            <h2 className='text-base font-medium'>Item details</h2>
          </div>
          <p className='my-3'>
            Store name: Mark and Spencer Category: Shoe and bag Specification:
            Two shoe and two bag Quantity: 7
          </p>
        </div>
      </div>
      <div className='flex items-center justify-between my-10'>
        <Btn
          className='font-medium bg-gray-300'
          onClick={() => setActiveSlide(0)}
          text='Cancel'
        />

        <Btn text={"Make Payment"} className='bg-pry font-medium' />
      </div>
    </div>
  );
};

export default ShipmentDetails;
