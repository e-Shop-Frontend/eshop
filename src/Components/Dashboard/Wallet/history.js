import React, { useState } from "react";
import Timestamp from "../../../Utils/timeStamp";
import round from "../../../Assets/images/round.png";
import round2 from "../../../Assets/images/round2.png";

const History = () => {
  const [transactions, setTransactions] = useState([]);
  const [activeButton, setActiveButton] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);

  const buttons = ["All Transactions", "Topup", "Wallet"];

  const activeButtonHandler = (id) => {
    setActiveButton(id);
    let transArray;
    if (id === 0) {
      transArray = allTransactions;
    } else if (id === 1) {
      transArray = allTransactions.filter((t) => t.amount_type === "credit");
    } else {
      transArray = allTransactions.filter((t) => t.amount_type === "debit");
    }
    setTransactions(transArray);
  };

  return (
    <div>
      <h2 className='my-2 font-medium text-xl'>Wallet Transactions</h2>
      <div className='flex gap-4 items-center my-4'>
        {buttons.map((button, i) => {
          return (
            <button
              className={`${
                activeButton === i
                  ? "bg-blue-800 rounded-md text-white p-2"
                  : "border-b-transparent"
              } transition text-sm font-medium`}
              key={i}
              onClick={() => activeButtonHandler(i)}
            >
              {button}
            </button>
          );
        })}
      </div>
      <div className='flex flex-col gap-2 overflow-y-scroll scrollbar max-h-[250px] scroll-smooth '>
        {transactions?.length < 1 && (
          <h1 className='text-sm my-3 '>No Transaction History</h1>
        )}
        {transactions?.map(
          ({ amount, amount_type, created_at, transaction_type }, i) => {
            return (
              <div
                key={i}
                className='grid grid-cols-3 gap-3 items-center p-4 bg-white text-xs text-black'
              >
                <div className='flex items-center gap-2'>
                  <img
                    src={amount_type === "credit" ? round : round2}
                    className='w-2'
                    alt='rounded'
                  />
                  <h2 className='font-medium text-sm capitalize'>
                    {transaction_type}
                  </h2>
                </div>
                <h2>{amount}</h2>
                <Timestamp time={created_at.slice(0, 10)} />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default History;
