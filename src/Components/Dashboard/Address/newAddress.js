import React from "react";
import Btn from "../../Button/btn";
import Input from "../../Form/Input";

const NewAddress = ({
  nextSlide,
  prevSlide,
  handleInputChange,
  setSavedAddress,
  inputItems,
}) => {
  return (
    <div>
      <h2 className='2xl font-medium'>Add New Address</h2>
      <form
        action=''
        onSubmit={() => {
          prevSlide();
          setSavedAddress(true);
        }}
      >
        <Input
          type='name'
          input
          title={"Recipient Name"}
          id='name'
          className={"border-2"}
          required={true}
          setItem={handleInputChange}
          value={inputItems.name || ""}
        />
        <Input
          type='tel'
          input
          title={"Recipient Phone Number"}
          id='tel'
          className={"border-2"}
          required={true}
          setItem={handleInputChange}
          value={inputItems.tel || ""}
        />
        <Input
          type='text'
          input
          title={"House number and street name"}
          id='street_name'
          className={"border-2"}
          required={true}
          setItem={handleInputChange}
          value={inputItems.street_name || ""}
        />
        <Input
          type='text'
          dropdown
          data={["Select a country", "Nigeria", "USA"]}
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
          data={["Select a city", "Nigeria", "USA"]}
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
          <Btn text={"Save Address"} className='bg-pry' />
          <Btn onClick={prevSlide} text={"Cancel"} className='bg-gray-200' />
        </div>
      </form>
    </div>
  );
};

export default NewAddress;
