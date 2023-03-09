import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../Button/btn";
import OTPInput from "../../../Utils/OTP";

const OTP = ({ prevSlide, nextSlide }) => {
  const [OTP, setOTP] = useState("");
  console.log(OTP);
  const navigate = useNavigate();

  return (
    <div>
      <h2 className='font-medium text-2xl'>Create your unique 4-digit pin!</h2>
      <p className='my-2'>
        Please remenber this pin. It will be used to keep your account secure
      </p>
      <form className='' onSubmit={(e) => e.preventDefault()}>
        <div>
          <OTPInput OTP={OTP} setOTP={setOTP} />
        </div>
        <Btn onClick={nextSlide} text={"Confirm Pin"} className='bg-pry my-6' />
      </form>
    </div>
  );
};

export default OTP;
