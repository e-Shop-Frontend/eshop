import React from "react";
import Slider from "../../Utils/testimonialSlider";
const Testimonial = () => {
  return (
    <div className='bg-green-50 py-10'>
      <div className='max-width1'>
        <h2 className='text-center font-bold text-2xl md:text-4xl text-sec'>
          Testimonials
        </h2>
        <p className='my-4 text-lg text-center'>
          This is what our client are saying
        </p>
        <Slider />
      </div>
    </div>
  );
};

export default Testimonial;
