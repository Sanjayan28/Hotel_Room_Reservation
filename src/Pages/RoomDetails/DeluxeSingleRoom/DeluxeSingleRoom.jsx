import React from "react";
import "./DeluxeSingleRoom.css";
import { assets } from "../../../assets/assets";
import Header from "../../../Components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTv,
  faPhone,
  faWifi,
  faLock,
  faThermometerHalf,
  faCoffee,
  faConciergeBell,
  faParking,
  faUtensils,
  faGlassMartiniAlt,
  faFan,
} from "@fortawesome/free-solid-svg-icons";
import RoomDetail from "../../../Components/RoomDetail/RoomDetail";
import BookingForm from "../../../Components/BookingForm/BookingForm";
import ImageSlider from "../../../Components/ImageSlider/ImageSlider";
import Rooms from "../../../Components/Rooms/Rooms";

const DeluxeSingleRoom = () => {
  return (
    <div>
      <Header
        bannerImage={assets.single}
        heading="Choose Your Perfect Stay at Thamel Boutique Hotels"
        description="Explore our range of elegant rooms tailored for your comfort"
      />
      <div>
        <h1 className="Heading">Deluxe Single Room</h1>
      </div>

      <div className="deluxe-room-container">
        <img
          src={assets.banner1}
          alt="Deluxe Single Room"
          className="singleroom-banner"
        />
        <RoomDetail />

        <div>
          <p className="room-description">
            The Deluxe single room is ideal for business travelers who need to
            relax and unwind after a long day. For the traveler with a taste for
            privacy, this deluxe room not only allows you to take full advantage
            of the contemporary comforts of our hotel but provides you with a
            private bathroom and seating area that can enhance your experience.
            This hotel room comes with a single bed, a flat-screen TV, Free
            Wi-Fi access, and air conditioning.
          </p>
        </div>

        <div className="amenities-container">
          <div className="amenities-section">
            <h3>Room Amenities</h3>
            <div className="amenities-grid">
              <div className="amenity-item">
                <FontAwesomeIcon icon={faTv} className="amenity-icon" />
                <span>Television</span>{" "}
              </div>
              <div className="amenity-item">
                <FontAwesomeIcon icon={faPhone} className="amenity-icon" />
                <span>Phone</span>{" "}
              </div>
              <div className="amenity-item">
                <FontAwesomeIcon icon={faWifi} className="amenity-icon" />
                <span>Free Wifi</span>{" "}
              </div>
              <div className="amenity-item">
                <FontAwesomeIcon icon={faLock} className="amenity-icon" />
                <span>Safe</span>{" "}
              </div>
              <div className="amenity-item">
                <FontAwesomeIcon
                  icon={faThermometerHalf}
                  className="amenity-icon"
                />
                <span>Heater</span>{" "}
              </div>
              <div className="amenity-item">
                <FontAwesomeIcon icon={faFan} className="amenity-icon" />
                <span>Air Conditioning</span>
              </div>
            </div>
          </div>
          <div className="amenities-section">
            <h3>Hotel Amenities</h3>
            <div className="amenities-grid">
              <div className="amenity-item">
                <FontAwesomeIcon
                  icon={faGlassMartiniAlt}
                  className="amenity-icon"
                />
                <span>Bar</span>{" "}
              </div>
              <div className="amenity-item">
                <FontAwesomeIcon icon={faCoffee} className="amenity-icon" />
                <span>Coffee</span>{" "}
              </div>
              <div className="amenity-item">
                <FontAwesomeIcon icon={faParking} className="amenity-icon" />
                <span>Parking</span>{" "}
              </div>
              <div className="amenity-item">
                <FontAwesomeIcon icon={faUtensils} className="amenity-icon" />
                <span>Restaurant</span>{" "}
              </div>
              <div className="amenity-item">
                <FontAwesomeIcon
                  icon={faConciergeBell}
                  className="amenity-icon"
                />
                <span>Room Service</span>
              </div>
              <div className="amenity-item">
                <FontAwesomeIcon
                  icon={faGlassMartiniAlt}
                  className="amenity-icon"
                />
                <span>Mini Bar</span>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="hotel-rules">
          <h2 className="hotelRule">Hotel Rules</h2>
          <ul>
            <li>Smoking not allowed</li>
            <li>Pets not allowed</li>
            <li>Check-in Time: After 12:00 pm Noon</li>
            <li>Check-out Time: Before 12:00 pm</li>
          </ul>
        </div>
      </div>
      <div>
        <BookingForm />
      </div>
      <div>
        <h1 className="Heading">View of Room</h1>
      </div>
      <div>
        <ImageSlider />
      </div>
      <div>
        <h1 className="Heading">More Rooms</h1>
      </div>
     <Rooms/>
    </div>
  );
};

export default DeluxeSingleRoom;
