import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Rooms from "../../Components/Rooms/Rooms";
import Offer from "../../Components/Offer/Offer";
import Testimonials from "../../Components/Testimonials/Testimonials";
import {assets} from "../../assets/assets"

const Home = () => {
  return (
    <div>
      <Header  bannerImage={assets.single}
      heading="Welcome to Thamel Boutique Hotel"
      description="Experience luxury and comfort in the heart of Thamel."/>
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
