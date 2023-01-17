import React from "react";
import Btn from "../../Button/btn";

const Shipment = ({ nextSlide }) => {
  const details = [
    { name: "Total Shipments", value: 0 },
    { name: "Pending Shipments", value: 0 },
    { name: "Cancelled Shipments", value: 0 },
    { name: "Processed Shipments", value: 0 },
    { name: "Delivered Shipments", value: 0 },
  ];
  return (
    <div>
      <Btn text='Create Shipment' className={"bg-pry"} onClick={nextSlide} />
      <div className='bg-gray-200 h-[1px] my-10' />
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {details.map(({ name, value }, i) => {
          return (
            <div key={i} className='bg-white rounded-md shadow-md p-8'>
              <h2 className='text-center text-sm md:text-base font-medium'>
                {name}
              </h2>
              <h2 className='text-center text-2xl md:text-4xl font-medium'>
                {value}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shipment;
