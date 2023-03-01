import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import card from "../../../../Assets/images/card4.png";
import Btn from "../../../Button/btn";
import Input from "../../../Form/Input";
import DefaultModal from "../../../Modals/defaultModal";
import SuccessModal from "../../../Modals/success";

const FundNew = () => {
  const [activePage, setActivePage] = useState(0);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isCompleteModalShown, setIsCompleteModalShown] = useState(false);
  const navigate = useNavigate();

  const cardLimits = [
    "Minimum single deposit $5",
    "Maximum single deposit $50,000",
    "Maximum single transaction $50,000",
    "Monthly transaction limit $50,000",
  ];

  return (
    <div className=''>
      <h2 className='text-xl font-medium'>Fund new card </h2>
      <p className='my-4 text-sm'>All transaction are secured and encrypted</p>
      <img src={card} className='w-96' alt='card' />
      {activePage === 0 && (
        <div>
          <div className='my-10'>
            <div className='flex justify-between font-medium my-4'>
              <h2>Current Dollar Rate</h2>
              <h2>$750.00</h2>
            </div>
            <div className='flex justify-between font-medium my-4'>
              <h2>Dollar Creation Fee</h2>
              <h2>$0.00</h2>
            </div>
          </div>
          <h2 className='font-medium text-lg'>Card Limit</h2>
          {cardLimits.map((limit, i) => {
            return (
              <li className='ml-4 my-3' key={i}>
                {limit}
              </li>
            );
          })}

          <Btn
            text='Continue'
            className={"bg-pry font-medium my-5"}
            onClick={() => setIsModalShown(true)}
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
            <h2>First time fund fee</h2>
            <h2>$2</h2>
          </div>
          <div className='flex justify-between font-medium my-4'>
            <h2>Amount deposited on card</h2>
            <h2>$12</h2>
          </div>
          <div className='flex justify-between font-medium my-4'>
            <h2>Total wallet debit</h2>
            <h2>&#8358; 1200</h2>
          </div>

          <Btn
            text='Continue'
            onClick={() => setIsCompleteModalShown(true)}
            className={"bg-pry font-medium my-5"}
          />
        </div>
      )}

      <DefaultModal
        visibilityState={isModalShown}
        closeModal={() => setIsModalShown(false)}
      >
        <h2 className='text-base font-medium'>
          Enter Amount to be credited on Dollar card.
        </h2>
        <p className='text-sm'>
          Minimum of $5 (&#8358;3000) in naira equivalant
        </p>
        <form
          action=''
          onSubmit={(e) => {
            e.preventDefault();
            setActivePage(1);
            setIsModalShown(false);
          }}
        >
          <div className='flex items-center border-b-2 my-4 gap-2'>
            <h2>&#8358;</h2>
            <div className='w-full'>
              <Input required={true} className='-my-2' type='number' input />
            </div>
          </div>
          <Btn text='Continue' className='bg-pry w-full' />
        </form>
      </DefaultModal>
      <SuccessModal
        closeModal={() => setIsCompleteModalShown(false)}
        visibilityState={isCompleteModalShown}
      >
        <h2 className='text-xl font-medium my-2 '>Transaction Successful</h2>
        <p className='text-sm'>
          Kindly note that it takes few minutes to enable your balance to appear
          on your card
        </p>
        <Btn
          text='Ok'
          className='bg-pry w-full my-4'
          onClick={() => {
            setIsCompleteModalShown(false);
            navigate("/dashboard/virtual-card");
          }}
        />
      </SuccessModal>
    </div>
  );
};

export default FundNew;
