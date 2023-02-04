import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/LandingPage/Home";
import DashboardHome from "../Pages/Dashboard/Home";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import Dashboard from "../Pages/Dashboard";
import Virtual from "../Pages/Dashboard/Virtual";
import Profile from "../Pages/Dashboard/Profile";
import Referral from "../Pages/Dashboard/Referral";
import Wallet from "../Pages/Dashboard/Wallet";
import Address from "../Pages/Dashboard/Address";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path='virtual-card' element={<Virtual />} />
          <Route path='referral' element={<Referral />} />
          <Route path='profile' element={<Profile />} />
          <Route path='wallet' element={<Wallet />} />
          <Route path='address' element={<Address />} />
        </Route>
        <Route path='*' element={<h2>404</h2>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
