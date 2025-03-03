import React, { useState } from "react";
import "./BookingForm.css";
import { assets } from "../../assets/assets";

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState("2025-02-25");
  const [checkOut, setCheckOut] = useState("2025-02-28");
  const [room, setRoom] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking confirmed:\nCheck-In: ${checkIn}\nCheck-Out: ${checkOut}\nRooms: ${room}`
    );
  };

  return (
    <div className="booking-container" style={{ backgroundImage: `url(${assets.banner1})` }}>
      <div className="booking-card">
        <h2>Book Your Room</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Check In</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Check Out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Room</label>
            <select
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              required
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>{" "}
          </div>
          <button type="submit" className="book-button">
            BOOK NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
