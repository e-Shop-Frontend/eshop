import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Dashboard/Layout/header";
import Sidebar from "../../Components/Dashboard/Layout/sidebar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  return (
    <div>
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <div className='bg-gray-50 md:w-[70%] lg:w-[80%] md:ml-auto p-8 min-h-screen pt-36'>
        <div className='max-w-3xl'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
