import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../Button/btn";

const ConfirmPin = ({ prrevSlide, nextSlide }) => {
  const OTPArray = new Array(4).fill("");
  const [otp, setOtp] = useState(OTPArray);
  const navigate = useNavigate();
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <div>
      <h2 className='font-medium text-2xl'>Type it again for confirmation</h2>
      <p className='my-2'>
        Please remenber this pin. It will be used to keep your account secure
      </p>
      <form className='' onSubmit={(e) => e.preventDefault()}>
        <div className='flex gap-4'>
          {OTPArray.map((cont, i) => {
            return (
              <input
                className='bg-gray-200 w-10 h-10 rounded-md text-center font-bold text-xl'
                type='number'
                inputMode='numeric'
                autoComplete='one-time-code'
                name=''
                id=''
                key={i}
                maxLength={1}
                onFocus={(e) => e.target.select()}
                onChange={(e) => handleChange(e.target, i)}
              />
            );
          })}
        </div>
        <Btn onClick={nextSlide} text={"Finish"} className='bg-pry my-6' />
      </form>
    </div>
  );
};

export default ConfirmPin;
