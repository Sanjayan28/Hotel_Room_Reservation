import React from "react";
import "./Rooms.css";
import { assets } from "../../assets/assets";
import Btn from "../Btn/Btn";

const Rooms = () => {
  return (
    <div className="Rooms">
      <div className="Room">
        <img src={assets.banner1} alt="" className="banner1" />
        <div className="caption">
          <h1 className="room-title">DELUXE DOUBLE ROOM</h1>
          <div className="room-features">
            <div className="feature">
              <img src={assets.bed} alt="" className="icon" />
              <h3>1 Queen Size Bed</h3>
            </div>
            <div className="feature">
              <img src={assets.users} alt="" className="icon" />
              <h3>2 Guests</h3>
            </div>
          </div>
          <p className="room-description">
            Thamel Boutique Hotel has been honored with the prestigious
            Three-Star Award.
          </p>
          <h2 className="room-price">From $55 / NIGHT</h2>
          <Btn />
        </div>
      </div>

      <div className="Room">
        <img src={assets.banner1} alt="" className="banner1" />
        <div className="caption">
          <h1 className="room-title">DELUXE DOUBLE ROOM</h1>
          <div className="room-features">
            <div className="feature">
              <img src={assets.bed} alt="" className="icon" />
              <h3>1 Queen Size Bed</h3>
            </div>
            <div className="feature">
              <img src={assets.users} alt="" className="icon" />
              <h3>2 Guests</h3>
            </div>
          </div>
          <p className="room-description">
            Thamel Boutique Hotel has been honored with the prestigious
            Three-Star Award.
          </p>
          <h2 className="room-price">From $55 / NIGHT</h2>
          <Btn />
        </div>
      </div>
      <div className="Room">
        <img src={assets.banner1} alt="" className="banner1" />
        <div className="caption">
          <h1 className="room-title">DELUXE DOUBLE ROOM</h1>
          <div className="room-features">
            <div className="feature">
              <img src={assets.bed} alt="" className="icon" />
              <h3>1 Queen Size Bed</h3>
            </div>
            <div className="feature">
              <img src={assets.users} alt="" className="icon" />
              <h3>2 Guests</h3>
            </div>
          </div>
          <p className="room-description">
            Thamel Boutique Hotel has been honored with the prestigious
            Three-Star Award.
          </p>
          <h2 className="room-price">From $55 / NIGHT</h2>
          <Btn />
        </div>
      </div>
      <div className="Room">
        <img src={assets.banner1} alt="" className="banner1" />
        <div className="caption">
          <h1 className="room-title">DELUXE DOUBLE ROOM</h1>
          <div className="room-features">
            <div className="feature">
              <img src={assets.bed} alt="" className="icon" />
              <h3>1 Queen Size Bed</h3>
            </div>
            <div className="feature">
              <img src={assets.users} alt="" className="icon" />
              <h3>2 Guests</h3>
            </div>
          </div>
          <p className="room-description">
            Thamel Boutique Hotel has been honored with the prestigious
            Three-Star Award.
          </p>
          <h2 className="room-price">From $55 / NIGHT</h2>
          <Btn />
        </div>
      </div>
      
    </div>
  );
};

export default Rooms;
