import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faUtensils,
  faConciergeBell,
  faDumbbell,
  faSwimmer,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import "./Offer.css";

const features = [
  {
    icon: faWifi,
    title: "Free Wi-Fi",
    description:
      "Complimentary high-speed Wi-Fi available in all rooms and public areas.",
  },
  {
    icon: faUtensils,
    title: "Complimentary Breakfast",
    description:
      "Enjoy a complimentary breakfast every morning during your stay.",
  },
  {
    icon: faConciergeBell,
    title: "24-Hour Concierge",
    description:
      "Our concierge service is available 24/7 to assist with all your needs.",
  },
  {
    icon: faDumbbell,
    title: "Fitness Center",
    description:
      "Our fully-equipped fitness center is open 24/7 for all guests.",
  },
  {
    icon: faSwimmer,
    title: "Swimming Pool",
    description: "Take a dip in our outdoor pool with breathtaking city views.",
  },
  {
    icon: faDog,
    title: "Pet-Friendly Rooms",
    description:
      "We offer pet-friendly rooms for guests traveling with their furry friends.",
  },
];

const Offer = () => {
  return (
    <div className="feature-cards">
      {features.map((feature, index) => (
        <div key={index} className="card">
          <FontAwesomeIcon icon={feature.icon} className="card-icon" />
          <h3 className="card-title">{feature.title}</h3>
          <p className="card-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Offer;
