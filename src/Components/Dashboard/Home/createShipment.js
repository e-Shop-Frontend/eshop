import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../Redux/features/dashboardSlice";
import Btn from "../../Button/btn";
import Input from "../../Form/Input";

const CreateShipment = ({
  handleInputChange,
  inputItems,
  allCategories,
  handleSubmit,
  isLoading,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLocation("Create Shipment"));
  }, []);

  const categories = allCategories?.map((category) => category.category_name);

  return (
    <div>
      <h2 className='text-xl font-medium my-4'>Create Shipment</h2>
      <div className='bg-white w-full rounded-md shadow-md p-8'>
        <h2 className='text-center'>
          Enter your order information to allow us process your order
        </h2>
        <form action='' className='w-full' onSubmit={handleSubmit}>
          <Input
            input
            id='store_name'
            type='text'
            className={"bg-gray-100"}
            title='Store Name'
            required={true}
            setItem={handleInputChange}
            value={inputItems.store_name || ""}
          />
          <Input
            id='category'
            dropdown
            data={["select", ...categories, "others"]}
            type='text'
            className={"bg-gray-100 capitalize"}
            title='Category'
            required={true}
            setItem={handleInputChange}
            value={inputItems.category || ""}
          />
          <h2 className='italic text-xs -mt-2'>
            Note: Choose others if category is more than one.
          </h2>
          <Input
            input
            id='specification'
            type='text'
            className={"bg-gray-100"}
            title='Specification'
            placeholder={"e.g Two shoes and two bags "}
            required={true}
            setItem={handleInputChange}
            value={inputItems.specification || ""}
          />
          <Input
            input
            id='quantity'
            type='number'
            className={"bg-gray-100"}
            title='Quantity'
            required={true}
            setItem={handleInputChange}
            value={inputItems.quantity || ""}
          />
          <Btn
            loadingState={isLoading}
            text={"Continue"}
            className='w-full bg-pry my-6'
          />
        </form>
      </div>
    </div>
  );
};

export default CreateShipment;
