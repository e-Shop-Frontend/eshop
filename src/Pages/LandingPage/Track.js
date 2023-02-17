import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../Components/Form/Input";
import circle from "../../Assets/images/circle.png";
import circle2 from "../../Assets/images/circle2.png";
import circle3 from "../../Assets/images/circle3.png";
import warn from "../../Assets/images/warn.png";
import forum from "../../Assets/images/forum.png";
import phone from "../../Assets/images/phone.png";
import vector from "../../Assets/images/message.png";

const Track = () => {
  const { trackID } = useParams();
  return (
    <div>
      <div className='flex flex-col items-center justify-center bg-black py-16 w-full relative'>
        <h2 className='text-white text-2xl font-medium'>Track Shipment</h2>
        <div className='p-4 w-full max-w-3xl'>
          <Input
            readOnly={true}
            className='w-full cursor-not-allowed relative z-10'
            value={trackID}
            input
          />
        </div>
        <img
          src={circle}
          className='absolute bottom-0 left-0 w-16'
          alt='circle-1'
        />
        <img
          src={circle3}
          className='absolute top-0 right-0 w-10'
          alt='circle-1'
        />
        <img
          src={circle2}
          className='absolute bottom-5 right-[50%] w-8'
          alt='circle-1'
        />
      </div>
      <div className='flex flex-col items-center justify-center py-16 p-5'>
        <img src={warn} className='w-40' alt='' />
        <h2 className='font-medium text-lg my-4'>No Shipment Found</h2>
        <p className='text-base'>
          There is no shipment with the tracking number found
        </p>
      </div>
      <div className='flex flex-col items-center justify-center bg-black my-4 py-12 p-5 max-w-3xl mx-auto'>
        <h2 className='font-medium text-xl my-4 text-white'>Need help?</h2>
        <div className='grid grid-cols-3 gap-2 text-white text-sm'>
          <div className='flex flex-col items-center justify-center'>
            <img className='w-7 my-3' src={forum} alt='message' />
            <h2>Chat with us</h2>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img className='w-7 my-3' src={phone} alt='message' />
            <h2>Call us</h2>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img className='w-7 my-3' src={vector} alt='message' />
            <h2>Email us</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
