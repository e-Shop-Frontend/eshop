import React from "react";
import vCard from "../../Assets/images/vCard.png";
const Virtual = () => {
  const cards = [
    {
      title: "Virtual Card is Free",
      text: "Our virtual card works with all websites like Amazon, Facebook, Instagram, Netflix, Apple, Youtube, Google, and many more.",
    },
    {
      title: "Take Control of all activities on your card",
      text: "With eShop virtual card you have access  to control how you spend  online and access to daily transactions, freeze and unfreeze card any time.",
    },
    {
      title: "Best exchange rate like no other",
      text: "We offer best exchange rate and and seamless transaction at all time.",
    },
  ];
  return (
    <div className='py-10 bg-green-50'>
      <div className='max-width1 py-10'>
        <h2 className='font-medium text-sec text-lg'>
          Why choose eShopAfrica Virtual Dollar Card
        </h2>
        <h3 className='text-3xl my-4'>
          eShopAfrica Virtual Dollar Card is the best and absolutely free
        </h3>
        <div className='flex flex-col md:flex-row-reverse gap-4 items-center'>
          <div className='p-8'>
            <img src={vCard} className='h-fit' alt='card' />
          </div>
          <div className='md:w-[50%]'>
            {cards.map(({ title, text }, i) => (
              <div
                key={i}
                className='rounded-md border-2 border-green-200 flex gap-4 my-10 p-5'
              >
                <h2 className='bg-green-200 text-xl font-medium p-2 px-5 rounded-xl w-fit h-fit'>
                  {i + 1}
                </h2>
                <div className=''>
                  <h2 className='font-medium text-2xl'>{title}</h2>
                  <p className='text-sm my-4'>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Virtual;
