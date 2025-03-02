import React from "react";
import Navbar from "./Components/Navbar/Navbar";
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Room from "./Pages/Room/Room";
import LogIn from "./Pages/LogIn/LogIn";
import Register from "./Pages/Register/Register";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/room" element={<Room />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
