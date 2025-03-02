import React from "react";
import "./Room.css";
import Header from "../../Components/Header/Header";
import Rooms from "../../Components/Rooms/Rooms";
import { assets } from "../../assets/assets";

const Room = () => {
  return (
    <div>
      <Header
        bannerImage={assets.RoomsBanner}
        heading="Choose Your Perfect Stay at Thamel Boutique Hotels"
        description="Explore our range of elegant rooms tailored for your comfort."
      />
      <div>
        <h1 className="Heading">Rooms</h1>
      </div>
      <Rooms />
      <Rooms />
    </div>
  );
};

export default Room;
