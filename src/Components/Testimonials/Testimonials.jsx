import React, { useRef } from "react";
import "./Testimonials.css";
import { assets } from "../../assets/assets";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -75) {
      tx -= 25;
    }
    if (slider.current) {
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    if (slider.current) {
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  return (
    <div className="testimonials">
      <img
        src={assets.next}
        alt=""
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={assets.back}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user2} alt="" className="User" />
                <div>
                  <h3>John D</h3>
                  <span>London, UK</span>
                </div>
              </div>
              <p>
                Staying at Thamel Boutique Hotels was a fantastic experience!
                The staff were so welcoming, and the rooms were incredibly
                luxurious. I can’t wait to come back!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user1} alt="" className="User" />
                <div>
                  <h3>Emily R.</h3>
                  <span>Sydney, Australia</span>
                </div>
              </div>
              <p>
                Staying at Thamel Boutique Hotels was a fantastic experience!
                The staff were so welcoming, and the rooms were incredibly
                luxurious. I can’t wait to come back!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user3} alt="" className="User" />
                <div>
                  <h3>Sophia L.</h3>
                  <span>Paris, France</span>
                </div>
              </div>
              <p>
                "Staying at Thamel Boutique Hotels was a fantastic experience!
                The staff were so welcoming, and the rooms were incredibly
                luxurious. I can’t wait to come back!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user4} alt="" className="User" />
                <div>
                  <h3>David m.</h3>
                  <span>New York, USA</span>
                </div>
              </div>
              <p>
                "Staying at Thamel Boutique Hotels was a fantastic experience!
                The staff were so welcoming, and the rooms were incredibly
                luxurious. I can’t wait to come back!"
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
