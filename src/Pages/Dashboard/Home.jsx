import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Address from "../../Components/Dashboard/Home/address";
import CreateShipment from "../../Components/Dashboard/Home/createShipment";
import Shipment from "../../Components/Dashboard/Home/shipment";
import ShipmentSuccess from "../../Components/Dashboard/Home/shipmentSuccess";
import ShipmentSummary from "../../Components/Dashboard/Home/shipmentSummary";
import { baseUrl } from "../../Utils/constants";

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [inputItems, setInputItems] = useState({});
  const [allCategories, setAllCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [addressDetails, setAddressDetails] = useState({});

  const { token } = useSelector((state) => state.auth);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const nextSlide = () => {
    setActiveSlide(activeSlide + 1);
  };
  const handleInputChange = (e) => {
    setInputItems({ ...inputItems, [e.target.name]: e.target.value });
  };

  const getAllCategories = async () => {
    const url = `${baseUrl}get-category`;
    try {
      const res = await fetch(url);
      const { data } = await res.json();
      setAllCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    nextSlide();
  };

  const createShipment = async () => {
    console.log("first");
    setIsLoading(true);
    const selectedCategory = allCategories?.find(
      (cat) => cat.category_name === inputItems.category
    );
    const category_id = selectedCategory?.id || "0";
    const inputs = { ...inputItems, category_id };
    const url = `${baseUrl}create-shipment`;
    let msg;
    try {
      const { data } = await axios.post(url, inputs, config);
      // console.log(res);
      setIsLoading(false);
      setAddressDetails(data.data);
      msg = "Shipment created successfully";
      toast.success(msg);
      nextSlide();
    } catch (error) {
      console.log(error);
      msg = "An error occurred while creating shipment";
      setIsLoading(false);
      toast.error(msg);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className=''>
      <ToastContainer autoClose={3000} />
      {activeSlide === 0 ? (
        <Shipment nextSlide={nextSlide} />
      ) : activeSlide === 1 ? (
        <CreateShipment
          handleInputChange={handleInputChange}
          nextSlide={nextSlide}
          inputItems={inputItems}
          allCategories={allCategories}
          handleSubmit={handleSubmit}
        />
      ) : activeSlide === 2 ? (
        <ShipmentSummary
          setActiveSlide={setActiveSlide}
          inputItems={inputItems}
          nextSlide={nextSlide}
          createShipment={createShipment}
          isLoading={isLoading}
        />
      ) : activeSlide === 3 ? (
        <Address addressDetails={addressDetails} nextSlide={nextSlide} />
      ) : (
        <ShipmentSuccess setActiveSlide={setActiveSlide} />
      )}
    </div>
  );
};

export default Home;
