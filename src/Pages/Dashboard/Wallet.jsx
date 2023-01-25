import React from "react";
import Currency from "../../Utils/currency";
import card from "../../Assets/images/card3.png";
import trans from "../../Assets/images/trans.png";
import { useState } from "react";
import FundExisting from "../../Components/Dashboard/Wallet/FundExisting";
import Success from "../../Components/Dashboard/Wallet/success";

const Wallet = () => {
  const walletArr = [
    { title: "Fund New Card", img: card },
    { title: "Fund Existing Card", img: card },
    { title: "Credit Wallet", img: card },
    { title: "Transaction History", img: trans },
  ];
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <div>
      {selectedIndex !== "success" && (
        <div>
          <h2 className='text-xl font-medium'>Wallet</h2>
          <p className='text-sm my-3'>
            All transaction are secured and encrypted
          </p>
          <div className='bg-black text-white p-8 rounded-md my-2 sm:w-96 h-44'>
            <h2 className='text-sm'>Total Balance</h2>
            <Currency className={"my-3 font-bold text-xl"} amount={20000} />
          </div>
        </div>
      )}

      {selectedIndex === null && (
        <div className='my-10'>
          {walletArr.map(({ title, img }, i) => {
            return (
              <div
                className='flex gap-2 items-center my-5 hover:scale-95'
                key={i}
                onClick={() => {
                  setSelectedIndex(i);
                  console.log(selectedIndex);
                }}
              >
                <div className='bg-green-200 rounded-full p-3'>
                  <img className='w-5' src={img} alt='card' />
                </div>
                <h2
                  className={`${
                    selectedIndex === i ? "font-medium" : "font-normal"
                  }`}
                >
                  {title}
                </h2>
              </div>
            );
          })}
        </div>
      )}
      {selectedIndex === 0 && <div></div>}
      {selectedIndex === 1 && (
        <FundExisting setSelectedIndex={setSelectedIndex} />
      )}
      {selectedIndex === "success" && (
        <Success setSelectedIndex={setSelectedIndex} />
      )}
    </div>
  );
};

export default Wallet;
