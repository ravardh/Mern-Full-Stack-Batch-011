import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";

import ApplicantDashbaord from "./pages/ApplicantDashbaord";
import RecruiterDashboard from "./pages/RecruiterDashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
        
          <Route path={"/applicantDashboard"} element={<ApplicantDashbaord />} />
          <Route path={"/recruiterDashboard"} element={<RecruiterDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
