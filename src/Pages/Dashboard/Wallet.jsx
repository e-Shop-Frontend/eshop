import React, { useEffect } from "react";
import Currency from "../../Utils/currency";
import card from "../../Assets/images/card3.png";
import trans from "../../Assets/images/trans.png";
import { useState } from "react";
import FundExisting from "../../Components/Dashboard/Wallet/FundExisting";
import Success from "../../Components/Dashboard/Wallet/success";
import CreditWallet from "../../Components/Dashboard/Wallet/CreditWallet";
import FundNew from "../../Components/Dashboard/Wallet/FundNew";
import { AiOutlineCreditCard } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import BtnGrid from "../../Components/Button/BtnGrid";
import History from "../../Components/Dashboard/Wallet/history";
import WalletDetails from "../../Components/Dashboard/Wallet/walletDetails";
import axios from "axios";
import { baseUrl } from "../../Utils/constants";
import { useSelector } from "react-redux";

const Wallet = () => {
  const { token } = useSelector((state) => state.auth);
  const walletArr = [
    { title: "Fund Dollar Card", img: card },
    // { title: "Fund Existing Card", img: card },
    // { title: "Credit Wallet", img: card },
    // { title: "Transaction History", img: trans },
  ];
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isTopupModalVisible, setIsTopupModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [walletDetails, setWalletDetails] = useState(null);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getWallet = async () => {
    setIsLoading(true);
    const url = `${baseUrl}wallet`;
    try {
      const res = await axios.get(url, config);
      const data = res.data.data;
      setIsLoading(false);
      setWalletDetails(data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <div>
      {selectedIndex !== "success" && selectedIndex !== 0 && (
        <div>
          <h2 className='text-xl font-medium'>Wallet</h2>
          <p className='text-sm my-3'>
            All transaction are secured and encrypted
          </p>
          <div className='flex flex-col lg:flex-row gap-8'>
            <WalletDetails
              setIsTopupModalVisible={setIsTopupModalVisible}
              setSelectedIndex={setSelectedIndex}
              walletDetails={walletDetails}
            />
            <History />
          </div>
        </div>
      )}

      {selectedIndex === null && (
        <div className='my-10'>
          {walletArr.map(({ title, img }, i) => {
            return (
              <div
                className='flex gap-2 items-center my-5 hover:scale-95 transition cursor-pointer'
                key={i}
                onClick={() => {
                  setSelectedIndex(i);
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
      {selectedIndex === 0 && (
        <FundNew
          setSelectedIndex={setSelectedIndex}
          walletDetails={walletDetails}
        />
      )}
      {selectedIndex === 1 && (
        <FundExisting setSelectedIndex={setSelectedIndex} />
      )}

      <CreditWallet
        setIsTopupModalVisible={setIsTopupModalVisible}
        isTopupModalVisible={isTopupModalVisible}
        setSelectedIndex={setSelectedIndex}
      />

      {selectedIndex === "success" && (
        <Success setSelectedIndex={setSelectedIndex} />
      )}
    </div>
  );
};

export default Wallet;
