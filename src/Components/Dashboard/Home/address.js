import React from "react";
import Btn from "../../Button/btn";
import Input from "../../Form/Input";
import { MdContentCopy } from "react-icons/md";
const Address = ({ nextSlide, addressDetails }) => {
  console.log(addressDetails);
  return (
    <div>
      <h2 className='text-xl font-medium my-4'>US Address</h2>
      <div className='bg-white w-full rounded-md shadow-md p-8'>
        <h2 className='text-center my-6'>
          Use the information below as your shipping address when shopping
          online. Please add the unique code to your name. We’ll receive and
          process the package in your name.
        </h2>
        <form action='' className='w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
            <div className='relative'>
              <Input
                input
                id='full_name'
                type='name'
                className={"bg-gray-100"}
                title='Full Name'
                required={true}
                value={addressDetails?.full_name}
                readOnly={true}
              />
              <i className='text-gray-400 absolute bottom-8 right-4'>
                <MdContentCopy />
              </i>
            </div>
            <div className='relative'>
              <Input
                input
                id='unique_code'
                type='text'
                className={"bg-gray-100"}
                title='Unique Code'
                required={true}
                value={addressDetails?.unique_code}
                readOnly={true}
              />
              <i className='text-gray-400 absolute bottom-8 right-4'>
                <MdContentCopy />
              </i>
            </div>
            <div className='relative'>
              <Input
                input
                id='address'
                type='text'
                className={"bg-gray-100"}
                title='Address'
                required={true}
                value={addressDetails?.address}
                readOnly={true}
              />
              <i className='text-gray-400 absolute bottom-8 right-4'>
                <MdContentCopy />
              </i>
            </div>
            <div className='relative'>
              <Input
                input
                id='tel'
                type='tel'
                className={"bg-gray-100"}
                title='Phone Number'
                required={true}
                value={addressDetails?.phone_number}
                readOnly={true}
              />
              <i className='text-gray-400 absolute bottom-8 right-4'>
                <MdContentCopy />
              </i>
            </div>
            <div className='relative'>
              <Input
                input
                id='city'
                type='text'
                className={"bg-gray-100"}
                title='City'
                required={true}
                value={addressDetails?.city}
                readOnly={true}
              />
              <i className='text-gray-400 absolute bottom-8 right-4'>
                <MdContentCopy />
              </i>
            </div>
            <div className='relative'>
              <Input
                input
                id='state'
                type='text'
                className={"bg-gray-100"}
                title='State'
                required={true}
                value={addressDetails?.state}
                readOnly={true}
              />
              <i className='text-gray-400 absolute bottom-8 right-4'>
                <MdContentCopy />
              </i>
            </div>
            <div className='relative'>
              <Input
                input
                id='zip'
                className={"bg-gray-100"}
                title='Zip Code'
                required={true}
                value={addressDetails?.zip_code}
                readOnly={true}
              />
              <i className='text-gray-400 absolute bottom-8 right-4'>
                <MdContentCopy />
              </i>
            </div>
            <div className='relative'>
              <Input
                input
                id='country'
                type='text'
                className={"bg-gray-100"}
                title='Country'
                required={true}
                value={addressDetails?.country}
                readOnly={true}
              />
              <i className='text-gray-400 absolute bottom-8 right-4'>
                <MdContentCopy />
              </i>
            </div>
          </div>
          <Btn
            text={"Continue"}
            className='w-full bg-pry my-6'
            onClick={nextSlide}
          />
        </form>
      </div>
    </div>
  );
};

export default Address;
