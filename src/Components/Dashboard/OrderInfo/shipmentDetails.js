import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import Btn from "../../Button/btn";
import CancelModal from "../../Modals/cancel";
import DefaultModal from "../../Modals/defaultModal";
import Currency from "../../../Utils/currency";
import SuccessModal from "../../Modals/success";
import { useEffect } from "react";
import ErrorModal from "../../Modals/errorModal";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Spinner } from "react-activity";
import { baseUrl } from "../../../Utils/constants";
const ShipmentDetails = ({
  setActiveSlide,
  isLoading,
  singleOrder,
  cancelShipment,
  cancelLoader,
}) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [isPayModalShown, setIsPayModalShown] = useState(false);
  const [isPaymentModal, setIsPaymentModal] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const makePayment = () => {
    setIsPayModalShown(false);
    toast.success("Payment made Successfully!");
    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  };

  const getAllCategories = async () => {
    const url = `${baseUrl}get-category`;
    try {
      const res = await fetch(url);
      const { data } = await res.json();
      const shipmentCategory = data.find(
        (cat) => cat.id == singleOrder?.category_id
      );
      setCategory(shipmentCategory?.category_name || "null");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, [isLoading, singleOrder]);

  if (isLoading) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[400px]'>
        <Spinner size={50} />
      </div>
    );
  }

  return (
    <div>
      <ToastContainer autoClose={3000} />
      <h2 className='font-medium text-lg'>Shipment Details</h2>

      <div className='rounded-md border shadow-md my-10 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 py-10 text-sm'>
        <div>
          <div className='flex items-center gap-2'>
            <i className='text-lg'>
              <FaMapMarkerAlt />
            </i>
            <h2 className='text-base font-medium'>Ship from</h2>
          </div>
          <p className='my-3'>
            {/* 109,Country club road Indianapolis, Indiana <br /> +(317)529-2934 */}
          </p>
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <i className='text-lg'>
              <FaMapMarkerAlt />
            </i>
            <h2 className='text-base font-medium'>Ship to</h2>
          </div>
          <p className='my-3'>
            {/* 17, Ibikunle street Ikeja, Lagos <br />
            +2348020309067 */}
          </p>
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <i className='text-lg'>
              <BiDetail />
            </i>
            <h2 className='text-base font-medium'>Item details</h2>
          </div>
          <p className='my-3'>
            Store name:
            <span className='capitalize'> {singleOrder?.store_name} </span>{" "}
            <br />
            Category: <span className='capitalize'>{category}</span> <br />
            Specification:
            <span className='capitalize'>{singleOrder?.specification}</span>
          </p>
        </div>
      </div>
      <div className='flex items-center justify-between my-10'>
        <Btn
          className='font-medium bg-gray-300'
          onClick={() => setIsModalShown(true)}
          text='Cancel'
        />

        <Btn
          onClick={() => setIsPayModalShown(true)}
          text={"Make Payment"}
          className='bg-pry font-medium'
        />
      </div>

      <CancelModal
        visibilityState={isModalShown}
        modalAction={() => cancelShipment(singleOrder?.id)}
        closeModal={() => setIsModalShown(false)}
        modalText='Cancel Shipment'
        loadingState={cancelLoader}
      />
      <DefaultModal
        visibilityState={isPayModalShown}
        closeModal={() => setIsPayModalShown(false)}
      >
        <div className='flex flex-col items-center justify-center'>
          <h2 className='font-medium text-2xl'>Pay</h2>
          <Currency
            className={"text-xl font-bold my-5 p-4 rounded-md bg-gray-200"}
            amount={10000}
          />
          <Btn
            onClick={makePayment}
            text='Continue'
            className='bg-pry font-medium'
          />
        </div>
      </DefaultModal>
      <SuccessModal visibilityState={isPaymentModal}>
        <h2 className='font-medium text-lg my-3'>Payment Successful</h2>
        <p className='text-sm'>Shipment payment of NGN 10,000 successful</p>
      </SuccessModal>
      <ErrorModal visibilityState={isErrorModal}>
        <div className='text-red-600 text-center'>
          <h2 className='font-medium text-lg my-3'>Insufficent Balance</h2>
          <p className='text-sm'>
            Top up your wallet to be able to make payment
          </p>
        </div>
      </ErrorModal>
    </div>
  );
};

export default ShipmentDetails;
