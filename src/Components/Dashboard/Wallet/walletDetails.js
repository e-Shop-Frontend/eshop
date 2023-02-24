import React from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import Currency from "../../../Utils/currency";
import BtnGrid from "../../Button/BtnGrid";

const WalletDetails = ({ setIsTopupModalVisible }) => {
  return (
    <div className='bg-black text-white p-8 rounded-md my-2 sm:w-96'>
      <h2 className='text-sm'>Total Balance</h2>
      <Currency className={"my-3 font-bold text-xl"} amount={20000} />
      <div className='flex justify-end gap-4 mt-16'>
        <BtnGrid
          className={"bg-blue-600"}
          onClick={() => {
            setIsTopupModalVisible(true);
          }}
        >
          <IoMdAdd />
          <h2>Top Up</h2>
        </BtnGrid>
        <BtnGrid className={"bg-red-700"}>
          <AiOutlineCreditCard />
          <h2>Withdraw</h2>
        </BtnGrid>
      </div>
    </div>
  );
};

export default WalletDetails;
