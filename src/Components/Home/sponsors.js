import React from "react";
import walmart from "../../Assets/images/walmart.png";
import ebay from "../../Assets/images/ebay.png";
import amazon from "../../Assets/images/amazon.png";
import nike from "../../Assets/images/nike.png";
import adidas from "../../Assets/images/adidas.png";
import samsung from "../../Assets/images/samsung.png";
const Sponsors = () => {
  const images = [walmart, ebay, amazon, nike, adidas, samsung];
  return (
    <div className='max-width1 grid grid-cols-6 items-center py-10 gap-4 bg-white'>
      {images.map((image, i) => (
        <img key={i} src={image} alt='sponsors' />
      ))}
    </div>
  );
};

export default Sponsors;
