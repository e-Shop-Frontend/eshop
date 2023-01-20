import React from "react";

import doc from "../../../Assets/images/doc.png";
import Btn from "../../Button/btn";
const Base = ({ nextSlide }) => {
  return (
    <div>
      <div className='my-5'>
        <div className='bg-sec w-fit p-3 rounded-full'>
          <img src={doc} alt='image' className='w-6 h-6' />
        </div>
        <div className='grid grid-cols-2 gap-2 text-sm my-4'>
          <div>
            <h2>First Name</h2>
            <h2 className='font-medium my-2'>John</h2>
          </div>
          <div>
            <h2>Last Name</h2>
            <h2 className='font-medium my-2'>Doe</h2>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2 text-sm my-4'>
          <div>
            <h2>Phone Number</h2>
            <h2 className='font-medium my-2'>080123456789</h2>
          </div>
          <div>
            <h2>Email</h2>
            <h2 className='font-medium my-2'>Johndoe@gmail.com</h2>
          </div>
        </div>
        <Btn text={"Next"} className='bg-pry' onClick={() => nextSlide()} />
      </div>
    </div>
  );
};

export default Base;
