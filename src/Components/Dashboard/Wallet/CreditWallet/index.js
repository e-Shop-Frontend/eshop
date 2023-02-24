import React, { useEffect, useState } from "react";
import Btn from "../../../Button/btn";
import Input from "../../../Form/Input";
import DefaultModal from "../../../Modals/defaultModal";
import SuccessModal from "../../../Modals/success";

const CreditWallet = ({ setIsTopupModalVisible, isTopupModalVisible }) => {
  const [isTopupCompleted, setIsTopupCompleted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTopupCompleted(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [isTopupCompleted]);
  return (
    <>
      <DefaultModal
        visibilityState={isTopupModalVisible}
        closeModal={() => setIsTopupModalVisible(false)}
      >
        <Input
          input
          title='Amount'
          type='number'
          className={"border-2 font-medium"}
        />
        <Btn
          text={"Make Payment"}
          className='bg-pry w-full my-4 font-bold'
          onClick={() => {
            setIsTopupModalVisible(false);
            setIsTopupCompleted(true);
          }}
        />
        {/* <h2 className='border-2 p-3 text-center my-2 cursor-pointer'>
        {" "}
        + Add New Payment Method
      </h2> */}
      </DefaultModal>
      <SuccessModal visibilityState={isTopupCompleted}>
        <h2 className='text-lg font-medium my-2'>Payment Successful </h2>
        <p className='text-sm'>You paid NGN 10,000 to EshopAfrica</p>
      </SuccessModal>
    </>
  );
};

export default CreditWallet;
