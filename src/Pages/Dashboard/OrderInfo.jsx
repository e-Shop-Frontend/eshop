import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import OrderBase from "../../Components/Dashboard/OrderInfo/base";
import ShipmentDetails from "../../Components/Dashboard/OrderInfo/shipmentDetails";
import { baseUrl } from "../../Utils/constants";

const OrderInfo = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { token } = useSelector((state) => state.auth);
  const [allOrders, setAllOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [singleOrder, setSingleOrder] = useState({});
  const [cancelLoader, setCancelLoader] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getAllOrders = async () => {
    setIsLoading(true);
    const url = `${baseUrl}get-orders`;
    try {
      const { data } = await axios.get(url, config);
      setAllOrders(data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, [activeSlide]);

  const getSingleOrder = async (id) => {
    setActiveSlide(1);
    setIsLoading(true);
    const url = `${baseUrl}get-single-order/${id}`;
    try {
      const { data } = await axios.get(url, config);
      setSingleOrder(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const cancelShipment = async (id) => {
    setCancelLoader(true);
    const url = `${baseUrl}cancel-shipment/${id}`;
    try {
      const res = await axios.post(url, {}, config);
      setCancelLoader(false);
      toast.success(res.data.message);
      setTimeout(() => {
        setActiveSlide(0);
      }, 2000);
    } catch (error) {
      setCancelLoader(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      {activeSlide === 0 ? (
        <OrderBase
          allOrders={allOrders}
          isLoading={isLoading}
          getSingleOrder={getSingleOrder}
        />
      ) : (
        <ShipmentDetails
          isLoading={isLoading}
          setActiveSlide={setActiveSlide}
          singleOrder={singleOrder}
          cancelShipment={cancelShipment}
          cancelLoader={cancelLoader}
        />
      )}
    </div>
  );
};

export default OrderInfo;
