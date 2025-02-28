import React from "react";
import "./Room.css";
import Header from "../../Components/Header/Header";
import Rooms from "../../Components/Rooms/Rooms";

const Room = () => {
  return <div>
    <Header />
    <div>
        <h1 className="Heading">
          Rooms
        </h1>
      </div>
      <Rooms/>
      <Rooms/>
  </div>;
};

export default Room;
