import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Btn from "../../Button/btn";
import { ToastContainer, toast } from "react-toastify";

const TrackShipment = ({ isSidebarOpen, setIsbarOpen }) => {
  const [slideStatus, setSlideStatus] = useState(false);
  const [trackID, setTrackID] = useState(null);
  return (
    <div
      className={`${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      } fixed w-full md:w-[50%] h-screen bg-white top-0 right-0 transition p-8 py-12 z-20 shadow-md`}
    >
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-medium'>Track Shipment</h2>
        <i className='text-xl' onClick={() => setIsbarOpen(false)}>
          <MdClose />
        </i>
      </div>

      <hr className='-mx-8 my-6' />

      <div className='my-6'>
        <h2 className='text-sm'>Enter Shipment ID</h2>

        <input
          onChange={(e) => setTrackID(e.target.value)}
          type='number'
          className='rounded-md p-2 my-2 border-2 w-full'
        />
      </div>

      {slideStatus && (
        <div>
          <div className='flex gap-4 my-6'>
            <div className='w-3 h-3 rounded-full bg-green-500 mt-1' />
            <div className='text-sm'>
              <h2>06/04/2023 12:40pm</h2>
              <h2 className='my-2'>Item recieved at the warehouse.</h2>
            </div>
          </div>
          <div className='flex gap-4 my-6'>
            <div className='w-3 h-3 rounded-full bg-green-500 mt-1' />
            <div className='text-sm'>
              <h2>06/04/2023 2:15pm</h2>
              <h2 className='my-2'>Item leaves the warehouse.</h2>
            </div>
          </div>
          <div className='flex gap-4 my-6'>
            <div className='w-3 h-3 rounded-full bg-green-500 mt-1' />
            <div className='text-sm'>
              <h2>06/04/2023 9:00pm</h2>
              <h2 className='my-2'>Item arrived warehouse.</h2>
            </div>
          </div>
          <div className='flex gap-4 my-6'>
            <div className='w-3 h-3 rounded-full bg-green-500 mt-1' />
            <div className='text-sm'>
              <h2>06/04/2023 11:00pm</h2>
              <h2 className='my-2'>Item available for pick up.</h2>
            </div>
          </div>
          <hr className='-mx-8 my-6' />

          <div className='flex justify-between gap-4 my-5'>
            <div className='text-sm'>
              <h2>Tracking ID</h2>
              <h2>2342655412</h2>
            </div>
            <h2 className='italic text-xs text-white bg-green-500 rounded-md h-fit p-1 px-3'>
              Copy
            </h2>
          </div>
        </div>
      )}

      <hr className='-mx-8 my-6' />
      {slideStatus ? (
        <Btn
          onClick={() => {
            setIsbarOpen(false);
            setSlideStatus(false);
          }}
          text='Close'
          className='bg-pry w-full'
        />
      ) : (
        <Btn
          onClick={() => {
            if (trackID) {
              setSlideStatus(true);
            } else {
              toast.error("Shipment ID can't be empty");
            }
          }}
          className='bg-pry w-full'
          text='Track'
        />
      )}

      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default TrackShipment;
