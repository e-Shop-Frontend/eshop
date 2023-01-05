import React from "react";
import logo from "../../Assets/images/logo.png";
import tw from "../../Assets/images/tw.png";
import ig from "../../Assets/images/ig.png";
import fb from "../../Assets/images/fb.png";
import gm from "../../Assets/images/gm.png";
import verve from "../../Assets/images/verve.png";
import master from "../../Assets/images/master.png";
import visa from "../../Assets/images/visa.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const socials = [
    { img: tw, url: "https://twitter.com/" },
    { img: ig, url: "https://instagram.com/" },
    { img: fb, url: "https://www.facebook.com/" },
    { img: gm, url: "mailto:" },
  ];
  const footerLinks = [
    {},
    {
      title: "Property",
      subLinks: [
        { heading: "How eShopAfrica Works", url: "/" },
        { heading: "Why choose eShopAfrica", url: "/" },
        { heading: "Exchange Rate", url: "/" },
        { heading: "What you cannot ship ", url: "/" },
      ],
    },
    {
      title: "About",
      subLinks: [
        { heading: "Our Company", url: "/" },
        { heading: "Patner with us", url: "/" },
        { heading: "FAQs", url: "/" },
      ],
    },
    {
      title: "Resources",
      subLinks: [
        { heading: "Contact", url: "/" },
        { heading: "eShopAfrica Reviews", url: "/" },
        { heading: "Delivery price and calculator", url: "/" },
        { heading: "Privacy Policy", url: "/" },
      ],
    },
    {
      title: "Payment ",
      subLinks: [
        { heading: "Virtual dollar card", url: "/", img: master },
        { heading: "Master Card", url: "/", img: master },
        { heading: "Visa Card ", url: "/", img: visa },
        { heading: "Verve Card ", url: "/", img: verve },
      ],
    },
  ];
  return (
    <footer className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 bg-sec p-8 gap-4'>
      {footerLinks.map(({ title, subLinks }, index) => {
        if (index === 0) {
          return (
            <div key={index} className='flex flex-col items-center mb-10'>
              <img src={logo} className='w-32' alt='' />
              <div className='flex gap-4 items-center'>
                {socials.map(({ img, url }, index) => (
                  <a key={index} href={url} target={"__blank"}>
                    <img src={img} className='w-6' alt={url} />
                  </a>
                ))}
              </div>
            </div>
          );
        } else
          return (
            <div key={index}>
              <h2 className='text-base font-bold text-white uppercase'>
                {title}
              </h2>
              <div className='flex flex-col gap-3 my-6'>
                {subLinks.map(({ heading, url, img }, i) => (
                  <div key={i} className='flex gap-3 items-center'>
                    {img && (
                      <img
                        src={img}
                        className='w-7 h-7 object-contain'
                        alt='master'
                      />
                    )}
                    <Link to={url} className='text-xs text-white'>
                      {heading}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
      })}
    </footer>
  );
};

export default Footer;
