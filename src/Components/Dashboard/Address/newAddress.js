import React, { useEffect, useState } from "react";
import Btn from "../../Button/btn";
import Input from "../../Form/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewAddress = ({
  nextSlide,
  prevSlide,
  handleInputChange,
  handleSubmit,
  inputItems,
  isLoading,
  allCountries,
}) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const newCountries = allCountries.map((country) => country.name);
    setCountries(newCountries);
  }, [allCountries]);

  return (
    <div>
      <h2 className='2xl font-medium'>Add New Address</h2>
      <form action='' onSubmit={handleSubmit}>
        <ToastContainer autoClose={3000} />
        <Input
          type='name'
          input
          title={"Recipient Name"}
          id='recipient_name'
          className={"border-2"}
          required={true}
          setItem={handleInputChange}
          value={inputItems.recipient_name || ""}
        />
        <Input
          type='tel'
          input
          title={"Recipient Phone Number"}
          id='recipient_number'
          className={"border-2"}
          required={true}
          setItem={handleInputChange}
          value={inputItems.recipient_number || ""}
        />
        <Input
          type='number'
          input
          title={"House Number"}
          id='house_number'
          className={"border-2"}
          required={true}
          setItem={handleInputChange}
          value={inputItems.house_number || ""}
        />
        <Input
          type='text'
          input
          title={"Street Name"}
          id='street_name'
          className={"border-2"}
          required={true}
          setItem={handleInputChange}
          value={inputItems.street_name || ""}
        />
        <Input
          type='text'
          dropdown
          data={["Select", ...countries]}
          title={"Country"}
          id='country'
          className={"border-2"}
          required={true}
          setItem={handleInputChange}
          value={inputItems.country || ""}
        />
        <Input
          type='text'
          dropdown
          data={["Select a state", "Lagos", "Oyo"]}
          title={"State/Province"}
          id='state'
          className={"border-2"}
          required={true}
          setItem={handleInputChange}
          value={inputItems.state || ""}
        />
        <Input
          type='text'
          dropdown
          data={["Select a city", "Ikeja", "Oshodi"]}
          title={"City"}
          id='city'
          className={"border-2"}
          required={true}
          setItem={handleInputChange}
          value={inputItems.city || ""}
        />
        <Input
          type='textarea'
          textarea
          title={"Additional Information"}
          id='information'
          className={"border-2"}
          required={true}
          setItem={handleInputChange}
          value={inputItems.information || ""}
        />
        <div className='flex gap-4'>
          <Btn
            loadingState={isLoading}
            text={"Save Address"}
            className='bg-pry'
          />
          <Btn onClick={prevSlide} text={"Cancel"} className='bg-gray-200' />
        </div>
      </form>
    </div>
  );
};

export default NewAddress;
