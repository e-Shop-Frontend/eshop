import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import LandingPage from "../Pages/LandingPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='*' element={<h2>404</h2>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
