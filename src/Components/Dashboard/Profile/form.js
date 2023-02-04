import React from "react";
import Btn from "../../Button/btn";
import Input from "../../Form/Input";

const Form = ({ nextSlide }) => {
  return (
    <div>
      <form action='' onSubmit={nextSlide}>
        <Input
          type='file'
          input
          // title={"First Name"}
          id=''
          className={"border-2"}
          required={true}
        />
        <Input
          type='name'
          input
          title={"First Name"}
          id=''
          className={"border-2"}
          required={true}
        />
        <Input
          type='name'
          input
          title={"Last Name"}
          id=''
          className={"border-2"}
          required={true}
        />

        <Input
          type='tel'
          input
          title={"Phone Number"}
          id=''
          className={"border-2"}
          required={true}
        />
        <Input
          type='email'
          input
          title={"Email Address"}
          id=''
          className={"border-2"}
          required={true}
        />
        <Input
          type='date'
          input
          title={"Date of Birth"}
          id=''
          className={"border-2"}
          required={true}
        />

        <Btn text={"Next"} className='bg-pry' />
      </form>
    </div>
  );
};

export default Form;
