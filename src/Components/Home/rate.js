import React from "react";

const Rate = () => {
  return (
    <div className='py-10 bg-sec'>
      <div className='max-width1 grid grid-cols-1 md:grid-cols-2 items-center  gap-8'>
        <div className='text-white'>
          <h2 className='font-bold text-2xl md:text-4xl'>
            Want to know how much it will cost you to ship to your doorstep in
            Nigeria?
          </h2>
          <p className='my-4 text-lg'>
            Enter the weight of your shipment and get an estimated shipping
            cost.
          </p>
          <h4 className='font-medium'>
            Need more information?{" "}
            <span className='text-pry underline'>Go to Pricing</span>{" "}
          </h4>
        </div>
        <div className='bg-white rounded-md p-5 shadow-xl'>
          <input
            type='text'
            className='block w-full border-b p-2 my-4'
            placeholder='Weight of Shipment'
          />
          <div className='flex justify-between gap-4'>
            <h2 className='font-medium'>Shipping Rate</h2>
            <h2 className='font-medium'>$10</h2>
          </div>

          <select
            className='capitalize w-full p-4 rounded-md my-8 border-2'
            name=''
            id=''
          >
            <option value=''>Select Pickup</option>
            <option value=''>Ibadan Pickup</option>
            <option value=''>Lagos Pickup</option>
          </select>

          <h2 className='select-none p-4 bg-gray-200 rounded-md'>$0</h2>
        </div>
      </div>
    </div>
  );
};

export default Rate;
