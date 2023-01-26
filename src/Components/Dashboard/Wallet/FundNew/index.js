import React from "react";
import { useState } from "react";
import card from "../../../../Assets/images/card4.png";
import Btn from "../../../Button/btn";

const FundNew = () => {
  const [activePage, setActivePage] = useState(0);
  const cardLimits = [
    "Minimum single deposit $10",
    "Maximum single deposit $40000",
    "Maximum single transaction $40000",
    "Monthly transaction limit $40000",
    "Maximum 3 cards per user.",
  ];

  return (
    <div className=''>
      <h2 className='text-xl font-medium'>Fund new card </h2>
      <p className='my-4 text-sm'>All transaction are secured and encrypted</p>
      <img src={card} className='w-96' alt='card' />
      {activePage === 0 && (
        <div>
          <div className='flex justify-between font-medium my-4'>
            <h2>Dollar card creation fee</h2>
            <h2>$0.00</h2>
          </div>
          <h2 className='font-medium text-lg'>Card Limit</h2>
          {cardLimits.map((limit, i) => {
            return (
              <li className='ml-4 my-3' key={i}>
                {limit}
              </li>
            );
          })}
          <h2 className='font-medium text-lg'>Rates and Conversion</h2>
          <p className='my-3 text-sm'>
            At the point of funding your eAfrica dollar caard, the current
            dollar rate will be shown to you, and the equivelant in Niara will
            be charged from your eAfrica Naira wallet balance.{" "}
          </p>
          <div className='my-5'>
            <h2 className='font-medium text-lg'>Rates and Conversion</h2>
            <p className='my-3 text-sm'>
              Per transaction you will be charged a fee as transaction fee.{" "}
            </p>
          </div>
          <Btn
            text='Continue'
            className={"bg-pry font-medium my-5"}
            onClick={() => setActivePage(1)}
          />
        </div>
      )}
      {activePage === 1 && (
        <div>
          <div className='flex justify-between font-medium my-4'>
            <h2>Current Rate</h2>
            <h2>NGN 750/$</h2>
          </div>
          <div className='flex justify-between font-medium my-4'>
            <h2>Funding</h2>
            <h2>$7</h2>
          </div>
          <div className='flex justify-between font-medium my-4'>
            <h2>Initial Funding Fee</h2>
            <h2>$7</h2>
          </div>
          <div className='flex justify-between font-medium my-4'>
            <h2>Total</h2>
            <h2>$10</h2>
          </div>
          <div className='flex justify-between font-medium my-4'>
            <h2>Total wallet debit</h2>
            <h2>NGN7500</h2>
          </div>
          <Btn text='Continue' className={"bg-pry font-medium my-5"} />
        </div>
      )}
    </div>
  );
};

export default FundNew;
