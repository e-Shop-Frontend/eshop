import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../Redux/features/dashboardSlice";

const CreateShipment = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLocation("Create Shipment"));
  }, []);
  return (
    <div>
      <h2 className='text-2xl font-medium my-4'>Create Shipment</h2>
    </div>
  );
};

export default CreateShipment;
