import React from 'react'
import { faBed, faUsers, faRulerCombined, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './RoomDetail.css';


const RoomDetail = () => {
  const details = [
    { icon: faBed, title: "Bed", value: "1 Single Bed" },
    { icon: faUsers, title: "Max Guest", value: "1 Guest" },
    { icon: faRulerCombined, title: "Room Space", value: "45 sqm" },
    { icon: faWindowMaximize, title: "Room View", value: "None" },
  ];
  return (
    <div className="room-details-grid">
      {details.map((item, index) => (
        <div key={index} className="detail-item">
          <FontAwesomeIcon icon={item.icon} className="icon" />
          <div className="text-container">
            <h4>{item.title}</h4>
            <span>{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RoomDetail