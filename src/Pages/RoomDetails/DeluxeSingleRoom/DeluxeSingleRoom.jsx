import React from "react";
import "./DeluxeSingleRoom.css";
import { assets } from "../../../assets/assets";
import Header from "../../../Components/Header/Header";

const DeluxeSingleRoom = () => {
  return (
    <div>
      <Header
        bannerImage={assets.single}
        heading="Choose Your Perfect Stay at Thamel Boutique Hotels"
        description="Explore our range of elegant rooms tailored for your comfort"
      />
      <h1 className="Heading">Deluxe Single Room</h1>
    </div>
  );
};

export default DeluxeSingleRoom;
