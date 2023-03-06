import React, { useEffect, useState } from "react";
import Input from "../../Components/Form/Input";
const Calculator = () => {
  const data = [
    "Lagos - Pickup",
    "Lagos - Home Delivery",
    "Home Delivery - Outside Lagos",
  ];
  const [locationData, setLocationDate] = useState({});
  const [total, setTotal] = useState(0);

  const handleInputChange = (e) => {
    setLocationDate({ ...locationData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let rate = 0;
    if (locationData.location === "Lagos - Pickup") {
      rate = 0;
    } else {
      if (locationData.location === "Lagos - Home Delivery") {
        rate = 20;
      } else if (locationData.location === "Home Delivery - Outside Lagos") {
        rate = 50;
      }
    }
    const newTotal = rate + (locationData.weight || 0) * 5;
    setTotal(newTotal);
  }, [locationData]);

  return (
    <div>
      <h2 className='text-xl font-medium'>Delivery Calculator</h2>
      <hr className='my-3' />
      <div className='max-w-xl'>
        <h2 className='text-lg font-medium'>
          Calculate your shipping cost here
        </h2>
        <form action='' className='my-8'>
          <Input
            className='shadow-sm'
            title='Weight of shipment in lbs'
            input
            type='number'
            id='weight'
            setItem={handleInputChange}
          />
          <Input
            className='shadow-sm'
            title='Delivery Type'
            dropdown
            id='location'
            data={data}
            setItem={handleInputChange}
          />
        </form>
        <h2 className='bg-gray-200 p-3 font-medium text-lg my-4 rounded-md'>
          ${total}
        </h2>
      </div>
    </div>
  );
};

export default Calculator;
