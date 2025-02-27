import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Rooms from "../../Components/Rooms/Rooms";
import Offer from "../../Components/Offer/Offer";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="Heading">
          Step into a room that blurs the lines between dreams and reality
        </h1>
      </div>
      <div className="Home-room">
        <Rooms />
      </div>
      <h1 className="Heading">What We Offer</h1>
      <div className="Home-offer">
        <Offer />
      </div>
      <h1 className="Heading">What Our Guests Say</h1>
      <div className="Home-Testimonials">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
