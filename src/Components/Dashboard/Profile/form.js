import React from "react";
import Btn from "../../Button/btn";
import Input from "../../Form/Input";
import { ToastContainer, toast } from "react-toastify";

const Form = ({ nextSlide }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    toast.success("Profile updated successfully!");
    setTimeout(() => {
      nextSlide();
    }, 3000);
  };

  return (
    <div>
      <ToastContainer autoClose={3000} />
      <form action='' onSubmit={submitHandler}>
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
