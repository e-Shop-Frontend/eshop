import React from "react";
import About from "../Components/Home/about";
import CTA from "../Components/Home/cta";
import Hero from "../Components/Home/hero";
import How from "../Components/Home/how";
import Rate from "../Components/Home/rate";
import Shop from "../Components/Home/shop";
import Sponsors from "../Components/Home/sponsors";
import Testimonial from "../Components/Home/testimonial";
import Virtual from "../Components/Home/virtual";
import Why from "../Components/Home/why";

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Sponsors />
      <About />
      <How />
      <Why />
      <CTA />
      <Virtual />
      <Shop />
      <Rate />
      <Testimonial />
    </div>
  );
};

export default Home;
