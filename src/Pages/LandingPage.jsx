import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Layout/Footer";
import Nav from "../Components/Layout/Nav";

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingPage;
