import React from "react";
import { useState } from "react";
import Btn from "../../../Button/btn";
import Input from "../../../Form/Input";

const FundExisting = ({ setSelectedIndex }) => {
  const [activePage, setActivePage] = useState(0);
  return (
    <div>
      {activePage === 0 && (
        <div>
          <h2 className='text-lg text-sec font-medium my-3'>Enter Details</h2>
          <form action='' className='max-w-xl'>
            <Input
              input
              className={"border-2 font-medium"}
              title='Card Number'
              type='number'
            />
            <Input
              input
              className={"border-2 font-medium"}
              title='Amount'
              type='number'
            />
            <Btn
              text='Proceed'
              className={"bg-pry"}
              onClick={() => setActivePage(1)}
            />
          </form>
        </div>
      )}
      {activePage === 1 && (
        <div>
          <h2 className='text-lg text-sec font-medium my-3'>Enter Details</h2>
          <form action='' className='max-w-xl'>
            <Input
              input
              className={"border-2 font-medium"}
              title='Account Number'
              type='number'
            />
            <Input
              input
              className={"border-2 font-medium"}
              title='Account Name'
              type='name'
            />
            <Input
              input
              className={"border-2 font-medium"}
              title='Amount'
              type='number'
            />
            <Btn
              text='Proceed'
              className={"bg-pry"}
              onClick={() => setSelectedIndex("success")}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default FundExisting;
