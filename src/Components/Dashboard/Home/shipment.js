import React from "react";
import Btn from "../../Button/btn";
import amico from "../../../Assets/images/amico.png";
import track from "../../../Assets/images/track.png";
import { useState } from "react";
import TrackShipment from "./trackShipment";
import { useSelector } from "react-redux";
import { baseUrl } from "../../../Utils/constants";
import axios from "axios";
import { useEffect } from "react";

const Shipment = ({ nextSlide }) => {
  const { token } = useSelector((state) => state.auth);
  const [shipmentDetails, setShipmentDetails] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getShipmentDetails = async () => {
    const url = `${baseUrl}get-dashboard`;
    try {
      const res = await axios.get(url, config);
      setShipmentDetails(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getShipmentDetails();
  }, []);

  const details = [
    { name: "Total Shipments", value: shipmentDetails?.total_shipment || 0 },
    {
      name: "Pending Shipments",
      value: shipmentDetails?.pending_shipment || 0,
    },
    {
      name: "Cancelled Shipments",
      value: shipmentDetails?.cancelled_shipment || 0,
    },
    {
      name: "Processed Shipments",
      value: shipmentDetails?.processed_shipment || 0,
    },
    {
      name: "Delivered Shipments",
      value: shipmentDetails?.delivered_shipment || 0,
    },
  ];
  return (
    <div>
      <Btn text='Create Shipment' className={"bg-pry"} onClick={nextSlide} />
      <div className='bg-gray-200 h-[1px] my-10' />
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {details.map(({ name, value }, i) => {
          return (
            <div key={i} className='bg-white rounded-md shadow-md p-8'>
              <h2 className='text-center text-sm md:text-base font-medium'>
                {name}
              </h2>
              <h2 className='text-center text-2xl md:text-4xl font-medium'>
                {value}
              </h2>
            </div>
          );
        })}
      </div>
      <div className='my-6'>
        <h2 className='font-medium text-lg'>Helpful Resources</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 my-6 gap-4'>
          <div className='rounded-md border shadow-md p-6'>
            <div className='flex items-center justify-center'>
              <img src={amico} className='w-[214px]' alt='amico' />
            </div>
            <h2 className='font-medium my-3'>
              How to use eshopAfrica US address
            </h2>
            <p className='text-sm'>
              Checkout from online stores and get your item delivered to oue US
              address.
            </p>
            <p className='text-sec my-3 text-right font-medium text-xs'>
              Learn More
            </p>
          </div>
          <div className='rounded-md border shadow-md p-6'>
            <div className='flex items-center justify-center'>
              <img src={track} className='w-[214px]' alt='amico' />
            </div>
            <h2 className='font-medium my-3'>Track your shipment</h2>
            <p className='text-sm'>
              Get real tracking update on your shipment on the go.
            </p>
            <p
              onClick={() => setIsSidebarOpen(true)}
              className='cursor-pointer select-none text-sec my-3 text-right font-medium text-xs'
            >
              Track now
            </p>
          </div>
        </div>
      </div>
      <TrackShipment
        setIsbarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
    </div>
  );
};

export default Shipment;
