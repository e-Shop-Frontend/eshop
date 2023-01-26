import React from "react";
import Btn from "../../../Button/btn";
import Input from "../../../Form/Input";

const CreditWallet = () => {
  return (
    <div className='max-w-xl my-8'>
      {/* <h2 className='my-3 text-lg font-medium'>Credit Wallet</h2> */}
      <Input input title='Amount' className={"border-2 font-medium"} />
      <Btn
        text={"Deposit(Paystack)"}
        className='bg-pry w-full my-4 font-bold'
      />
      <h2 className='border-2 p-3 text-center my-2 cursor-pointer'>
        {" "}
        + Add New Payment Method
      </h2>
    </div>
  );
};

export default CreditWallet;
