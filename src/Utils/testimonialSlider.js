import React, { useRef, useState } from "react";
// Import Swiper React components
import { SwiperSlide, Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import daniel from "../Assets/images/daniel.png";
import faith from "../Assets/images/faith.png";
import grace from "../Assets/images/grace.png";

export default function Slider() {
  const testimonial = [
    {
      name: "Daniel Uduak",
      location: "Lagos",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi consectetur quas accusamus.",
      img: daniel,
    },
    {
      name: "Damilola Faith",
      location: "Lagos",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi consectetur quas accusamus.",
      img: faith,
    },
    {
      name: "Amarachi Grace",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi consectetur quas accusamus.",
      img: grace,
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
      >
        {testimonial.map(({ content, name, img }, i) => {
          return (
            <SwiperSlide key={i}>
              <div className='hover:scale-105 transition flex flex-col items-center justify-center my-6 py-6'>
                <img
                  src={img}
                  className='w-32 rounded-full h-32 object-cover'
                  alt={name}
                />
                <p className='uppercase text-sm font-bold mt-3'>{name}</p>
                <p className='text-sm text-center capitalize font-medium'>
                  {content}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
