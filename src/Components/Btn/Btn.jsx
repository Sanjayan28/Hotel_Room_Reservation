import React from 'react'
import './Btn.css';
import { useNavigate } from "react-router-dom";

const Btn = ({roomPath}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(roomPath);
  };
  return (
    <div><button className="home-banner-btn" onClick={handleClick}>
    Book Now
  </button></div>
  )
}

export default Btn