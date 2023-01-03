import React from "react";
import logo from "../../Assets/images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Nav = () => {
  const navItems = [
    { title: "About Us", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "API Documentation", url: "/documentation" },
    { title: "Dolar card", url: "dolar-card" },
  ];
  return (
    <div className='bg-sec'>
      <div className='max-width1 flex items-center justify-between'>
        <div className='flex justify-between w-full md:w-fit items-center'>
          <img className='w-14' src={logo} alt='logo' />
          <i className='text-pry text-xl md:hidden'>
            <RxHamburgerMenu />
          </i>
        </div>
        <div className='flex gap-4 items-center'>
          {navItems.map(({ url, title }, index) => {
            return (
              <Link
                key={index}
                className='text-white block whitespace-nowrap text-sm font-medium capitalize'
                to={url}
              >
                {title}
              </Link>
            );
          })}
        </div>
        <div>button</div>
      </div>
    </div>
  );
};

export default Nav;
