import React, { useEffect, useState } from "react";
import req from "../../../../Assets/images/req.png";
import block from "../../../../Assets/images/block.png";
import unblock from "../../../../Assets/images/unblock.png";
import Card from "./card";
import DefaultModal from "../../../Modals/defaultModal";
import CancelModal from "../../../Modals/cancel";
import ErrorModal from "../../../Modals/errorModal";
import Input from "../../../Form/Input";
import Btn from "../../../Button/btn";
import SuccessModal from "../../../Modals/success";
import { toast, ToastContainer } from "react-toastify";

const DollarCard = () => {
  const [activeIndex, setActiveIndex] = useState("");
  const [isHistoryModalOpen, setIsHistoryModal] = useState(false);
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);
  const [isUnblockModalOpen, setIsUnblockModalOpen] = useState(false);
  const [isHistorySuccessModalOpen, setIsHistorySuccessModalOpen] =
    useState(false);
  const [isBlockSuccessModalOpen, setIsBlockSuccessModalOpen] = useState(false);

  const lists = [
    { title: "Request Transaction History", img: req },
    { title: "Block Card", img: block },
    { title: "Unblock Card", img: unblock },
  ];

  useEffect(() => {
    if (activeIndex === 0) {
      setIsHistoryModal(true);
    } else if (activeIndex === 1) {
      setIsBlockModalOpen(true);
    } else if (activeIndex === 2) {
      setIsUnblockModalOpen(true);
    } else return;
  }, [activeIndex]);

  const handleHistorySubmit = (e) => {
    e.preventDefault();
    setIsHistoryModal(false);
    toast.success("Transaction history sent to your mail successfully");
  };

  return (
    <div>
      <ToastContainer autoClose={3000} />
      <h2 className='text-xl font-medium'>Virtual Dollar Card</h2>
      <p className='text-sm my-3'>All transaction are secured and encrypted</p>
      <Card />
      <div className='my-10'>
        {lists.map(({ title, img }, index) => {
          return (
            <div
              key={index}
              className='flex items-center gap-3 my-3 cursor-pointer hover:scale-95 hover:text-sec font-medium transition'
              onClick={() => {
                setActiveIndex(index);
                // modalHandler();
              }}
            >
              <div className='bg-green-200 rounded-full p-3'>
                <img className='w-5' src={img} alt={title} />
              </div>
              <h2 className='text-base select-none'>{title}</h2>
            </div>
          );
        })}
      </div>
      <DefaultModal
        visibilityState={isHistoryModalOpen}
        closeModal={() => setIsHistoryModal(false)}
      >
        <h2 className='text-sec'>Request transaction History</h2>
        <form action='' onSubmit={handleHistorySubmit}>
          <Input
            input
            title='Enter Email Address'
            required={true}
            type='email'
            id='email'
            className='border-2 my-3'
          />
          <Btn text='Continue' className='w-full bg-pry' />
        </form>
      </DefaultModal>
      <CancelModal
        closeModal={() => setIsBlockModalOpen(false)}
        visibilityState={isBlockModalOpen}
        modalText='Block Card'
        modalAction={() => {
          toast.success("Card blocked successfully.");
          setIsBlockModalOpen(false);
        }}
      />
      <ErrorModal
        visibilityState={isUnblockModalOpen}
        closeModal={() => setIsUnblockModalOpen(false)}
      >
        <h2 className='my-2'>
          To unblock your card kindly reach out to our customers service via
          email info@eshopafrica.co
        </h2>
      </ErrorModal>
      {/* <SuccessModal visibilityState={isHistorySuccessModalOpen}>
        <h2>Transaction history sent to your mail successfully</h2>
      </SuccessModal>
      <SuccessModal visibilityState={isHistorySuccessModalOpen}>
        <h2>Transaction history sent to your mail successfully</h2>
      </SuccessModal> */}
    </div>
  );
};

export default DollarCard;
