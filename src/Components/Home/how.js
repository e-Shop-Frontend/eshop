import React from "react";
import ship from "../../Assets/images/ship.png";
import home from "../../Assets/images/home.png";
import bag from "../../Assets/images/Bag.png";
import card from "../../Assets/images/card.png";
import lock from "../../Assets/images/lock.png";
const How = () => {
  const items = [
    {
      img: lock,
      title: "Sign Up",
      text: "Sign up to get access to a US address and storage facilities.",
    },
    {
      img: bag,
      title: "Order",
      text: "Make order from any of your favourite store around the world.",
    },
    {
      img: card,
      title: "Pay with Card",
      text: "Make payment with your virtual card to make shopping experience seamless.",
    },
    {
      img: home,
      title: "Save",
      text: "Save up to 95% on shopping by combining packages. ",
    },
    {
      img: ship,
      title: "Ship",
      text: "Get your package delivered to you in a timely manner.",
    },
  ];
  return (
    <section className='bg-sec py-10'>
      <div className='max-width1 py-10'>
        <h2 className='font-bold text-2xl uppercase text-center text-white my-8'>
          How it works
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {items.map(({ img, title, text }, index) => (
            <div
              key={index}
              className='bg-white p-5 rounded-md flex flex-col items-center shadow-xl'
            >
              <img src={img} alt={title} />
              <h2 className='my-4 text-center font-medium text-sec text-lg'>
                {title}
              </h2>
              <p className='text-center text-sm'>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default How;
