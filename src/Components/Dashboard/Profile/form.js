import React from "react";
import Btn from "../../Button/btn";
import Input from "../../Form/Input";

const Form = (nextSlide) => {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-4'>
        <Input
          type='name'
          input
          title={"First Name"}
          id=''
          className={"border-2"}
        />
        <Input
          type='name'
          input
          title={"Last Name"}
          id=''
          className={"border-2"}
        />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <Input
          type='tel'
          input
          title={"Phone Number"}
          id=''
          className={"border-2"}
        />
        <Input
          type='email '
          input
          title={"Email Address"}
          id=''
          className={"border-2"}
        />
      </div>
      <Btn text={"Next"} className='bg-pry' onClick={() => nextSlide()} />
    </div>
  );
};

export default Form;
