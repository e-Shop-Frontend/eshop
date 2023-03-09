import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import card from "../../../../Assets/images/card4.png";
import Btn from "../../../Button/btn";
import Input from "../../../Form/Input";
import DefaultModal from "../../../Modals/defaultModal";
import SuccessModal from "../../../Modals/success";
import { dollarRate } from "../../../../Utils/constants";
import ErrorModal from "../../../Modals/errorModal";
import WalletDetails from "../walletDetails";

const FundNew = ({ setSelectedIndex }) => {
  const [activePage, setActivePage] = useState(0);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isCompleteModalShown, setIsCompleteModalShown] = useState(false);
  const [isErrorModalShown, setIsErrorModalShown] = useState(false);
  const [amount, setAmount] = useState(0);
  const [dollarEqual, setDollarEqual] = useState(0);
  const [totalDebit, setTotalDebit] = useState(0);
  const navigate = useNavigate();

  const cardLimits = [
    "Minimum single deposit $5",
    "Maximum single deposit $50,000",
    "Maximum single transaction $50,000",
    "Monthly transaction limit $50,000",
  ];

  const handleAmountSubmit = (e) => {
    e.preventDefault();
    setActivePage(1);
    setIsModalShown(false);
    console.log(amount);
    setTotalDebit(+amount + +dollarRate);
  };

  useEffect(() => {
    setDollarEqual(amount / dollarRate);
  }, [amount]);

  const handlePayment = () => {
    if (WalletDetails?.wallet_balance > totalDebit) {
      setIsCompleteModalShown(true);
    } else {
      setIsErrorModalShown(true);
    }
  };

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
              <h2>₦{dollarRate}</h2>
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
            <h2>$1</h2>
          </div>
          <div className='flex justify-between font-medium my-4'>
            <h2>Amount deposited on card</h2>
            <h2>${dollarEqual.toFixed(2)}</h2>
          </div>
          <div className='flex justify-between font-medium my-4'>
            <h2>Total wallet debit</h2>
            <h2>&#8358; {totalDebit}</h2>
          </div>

          <Btn
            text='Continue'
            onClick={handlePayment}
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
          Minimum of $5 (&#8358;{dollarRate * 5}) in naira equivalant
        </p>
        <form action='' onSubmit={handleAmountSubmit}>
          <div className='my-4'>
            <div className='flex items-center border-b-2 gap-2'>
              <h2>&#8358;</h2>
              <div className='w-full'>
                <Input
                  setItem={(e) => setAmount(e.target.value)}
                  required={true}
                  className='-my-2'
                  type='number'
                  input
                />
              </div>
            </div>
            <h2 className='text-xs my-2'>
              Equivalent in Dollar:{" "}
              <span className='font-medium'>${dollarEqual.toFixed(2)}</span>{" "}
            </h2>
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
      <ErrorModal
        visibilityState={isErrorModalShown}
        closeModal={() => setIsErrorModalShown(false)}
      >
        <h2 className='my-3'>
          Insufficient Wallet Balance. Please top up your wallet balance to
          continue
        </h2>
        <Btn
          onClick={() => setSelectedIndex(null)}
          text='Continue'
          className='bg-red-600 text-white'
        />
      </ErrorModal>
    </div>
  );
};

export default FundNew;
