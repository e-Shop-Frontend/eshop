import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Dashboard/Layout/header";
import Sidebar from "../../Components/Dashboard/Layout/sidebar";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className='bg-gray-50 md:w-[70%] lg:w-[80%] md:ml-auto p-8 min-h-screen pt-36'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
