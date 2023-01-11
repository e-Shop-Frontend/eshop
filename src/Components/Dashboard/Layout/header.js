import React from "react";
import { useSelector } from "react-redux";
import logo from "../../../Assets/images/logo.png";
import { IoNotificationsOutline } from "react-icons/io5";
import profile from "../../../Assets/images/profile.jpg";
const Header = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const { dashLocation } = useSelector((state) => state.dashboard);
  return (
    <header className='bg-white shadow-md fixed top-0 right-0 w-full z-10'>
      <div className='max-width1 flex justify-between gap-4 font-medium text-sm'>
        <div>
          <div className='flex gap-4 items-center'>
            <img className='w-20' src={logo} alt='logo' />
            <h2 className='uppercase'>{dashLocation}</h2>
          </div>
          <h2
            className='text-xs text-sec italic underline md:hidden'
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "Close Menu" : "Open Menu"}
          </h2>
        </div>

        <div className='flex items-center gap-2'>
          {/* <Btn text={"Logout"} className='bg-pry' /> */}
          <div className='flex items-center gap-2'>
            <h2 className='hidden md:block'>Notifications</h2>
            <i className='flex items-center'>
              <IoNotificationsOutline className='text-xl' />
              <h2 className='text-xs bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center -translate-y-2 -translate-x-3'>
                4
              </h2>
            </i>
          </div>
          <img
            className='w-14 h-14 object-cover rounded-full'
            src={profile}
            alt='profile'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
