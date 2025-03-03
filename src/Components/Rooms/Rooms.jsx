import React from "react";
import "./Rooms.css";
import { assets } from "../../assets/assets";
import Btn from "../Btn/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faUsers } from "@fortawesome/free-solid-svg-icons";

const Rooms = () => {
  return (
    <div className="Rooms">
      <div className="Room">
        <img src={assets.double} alt="" className="banner1" />
        <div className="caption">
          <h1 className="room-title">DELUXE DOUBLE ROOM</h1>
          <div className="room-features">
            <div className="feature">
              <FontAwesomeIcon icon={faBed} className="icon1" />

              <h3>1 Queen Size Bed</h3>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faUsers} className="icon1" />

              <h3>2 Guests</h3>
            </div>
          </div>
          <p className="room-description1">
            Thamel Boutique Hotel has been honored with the prestigious
            Three-Star Award.
          </p>
          <h2 className="room-price">From $55 / NIGHT</h2>
          <Btn roomPath="/rooms/deluxe-single-room" />
        </div>
      </div>

      <div className="Room">
        <img src={assets.single} alt="" className="banner1" />
        <div className="caption">
          <h1 className="room-title">DELUXE SINGLE ROOM</h1>
          <div className="room-features">
            <div className="feature">
              <FontAwesomeIcon icon={faBed} className="icon1" />
              <h3>1 Single Bed</h3>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faUsers} className="icon1" />
              <h3>1 Guest</h3>
            </div>
          </div>
          <p className="room-description1">
            Thamel Boutique Hotel has been honored with the prestigious
            Three-Star Award.
          </p>
          <h2 className="room-price">From $55 / NIGHT</h2>
          <Btn roomPath="/rooms/deluxe-single-room" />
        </div>
      </div>

      <div className="Room">
        <img src={assets.twin} alt="" className="banner1" />
        <div className="caption">
          <h1 className="room-title">DELUXE TWIN ROOM</h1>
          <div className="room-features">
            <div className="feature">
              <FontAwesomeIcon icon={faBed} className="icon1" />
              <h3>1 Single BedS</h3>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faUsers} className="icon1" />
              <h3>2 Guests</h3>
            </div>
          </div>
          <p className="room-description1">
            Thamel Boutique Hotel has been honored with the prestigious
            Three-Star Award.
          </p>
          <h2 className="room-price">From $55 / NIGHT</h2>
          <Btn roomPath="/rooms/deluxe-single-room" />
        </div>
      </div>
      <div className="Room">
        <img src={assets.triple} alt="" className="banner1" />
        <div className="caption">
          <h1 className="room-title">DELUXE TRIPLE ROOM</h1>
          <div className="room-features">
            <div className="feature">
              <FontAwesomeIcon icon={faBed} className="icon1" />
              <h3>3 Single Beds</h3>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faUsers} className="icon1" />
              <h3>3 Guests</h3>
            </div>
          </div>
          <p className="room-description1">
            Thamel Boutique Hotel has been honored with the prestigious
            Three-Star Award.
          </p>
          <h2 className="room-price">From $55 / NIGHT</h2>
          <Btn roomPath="/rooms/deluxe-single-room" />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
