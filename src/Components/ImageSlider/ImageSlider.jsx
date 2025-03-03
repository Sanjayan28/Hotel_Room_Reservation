import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageSlider.css";

// Import images from assets folder
import { assets } from "../../assets/assets";
import { assets1 } from "../../assets/assets1";

const ImageSlider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        
        <SwiperSlide>
          <img src={assets.S2} alt="Room 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets1.S3} alt="Room 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets1.S4} alt="Room 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets1.S5} alt="Room 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets1.S6} alt="Room 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets1.S8} alt="Room 8" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
