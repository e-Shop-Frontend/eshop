import React from "react";
import Btn from "../../Button/btn";
import Input from "../../Form/Input";
const Generate = ({ nextSlide }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextSlide();
  };
  return (
    <div>
      <h2 className='font-medium text-2xl'>Generate Virtual Dollar Card</h2>
      <p className='text-base my-2'>
        Kindly fill out the informations correctly.
      </p>
      <form onSubmit={handleSubmit}>
        <Input
          title='Address'
          id='address'
          type='text'
          input
          required={true}
          className='border-2'
        />
        <Input
          title='BVN'
          id='bvn'
          type='number'
          input
          required={true}
          className='border-2'
        />
        <Input
          title='Date of Birth'
          id='dob'
          type='text'
          input
          required={true}
          className='border-2'
        />
        <Btn text={"Continue"} className='bg-pry' />
      </form>
    </div>
  );
};

export default Generate;
