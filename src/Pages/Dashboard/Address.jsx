import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Base from "../../Components/Dashboard/Address/base";
import NewAddress from "../../Components/Dashboard/Address/newAddress";
import { baseUrl } from "../../Utils/constants";

const Address = () => {
  const { token } = useSelector((state) => state.auth);
  const [activeSlide, setActiveSlide] = useState(0);
  const [inputItems, setInputItems] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [allAddress, setAllAddress] = useState([]);
  const [allCountries, setAllCountries] = useState([]);

  const nextSlide = () => {
    setActiveSlide(activeSlide + 1);
  };

  const prevSlide = () => {
    setActiveSlide(activeSlide - 1);
  };

  const handleInputChange = (e) => {
    setInputItems({ ...inputItems, [e.target.name]: e.target.value });
    console.log(inputItems);
  };
  const [savedAddress, setSavedAddress] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const url = `${baseUrl}add-address`;
    let msg;
    const selectedCountry = allCountries.find(
      (country) => country.name === inputItems.country
    );
    const country_id = selectedCountry.id;

    try {
      const res = await axios.post(url, { ...inputItems, country_id }, config);
      msg = res.data.message;
      toast.success(msg);
      setIsLoading(false);
    } catch (error) {
      msg = error.response.data.message;
      console.log(error);
      toast.error(msg);
      setIsLoading(false);
    }
    setTimeout(() => {
      prevSlide();
    }, 3000);
  };

  const getAddress = async () => {
    const url = `${baseUrl}get-user-address`;
    try {
      const res = await axios.get(url, config);
      const address = res.data.data;
      setAllAddress(address);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCountries = async () => {
    const url = `${baseUrl}get-country`;
    try {
      const res = await axios.get(url);
      setAllCountries(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAddress();
  }, [activeSlide]);

  useEffect(() => {
    getAllCountries();
  }, []);

  useEffect(() => {
    if (allAddress.length > 0) {
      setSavedAddress(true);
    }
  }, [allAddress]);

  return (
    <div>
      {activeSlide === 0 && (
        <Base
          savedAddress={savedAddress}
          nextSlide={nextSlide}
          inputItems={inputItems}
          allAddress={allAddress}
        />
      )}
      {activeSlide === 1 && (
        <NewAddress
          prevSlide={prevSlide}
          inputItems={inputItems}
          nextSlide={nextSlide}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          allCountries={allCountries}
        />
      )}
    </div>
  );
};

export default Address;
