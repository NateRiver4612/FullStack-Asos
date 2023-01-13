import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper";

export default function Slider() {
  return (
    <div className="bg-black w-[30%] flex justify-center">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://images.asos-media.com/products/brave-soul-cotton-ribbed-roll-neck-sweater-in-khaki/202867448-1-green?$n_640w$&wid=513&fit=constrain" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://images.asos-media.com/products/brave-soul-cotton-ribbed-roll-neck-sweater-in-khaki/202867448-1-green?$n_640w$&wid=513&fit=constrain" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://images.asos-media.com/products/brave-soul-cotton-ribbed-roll-neck-sweater-in-khaki/202867448-1-green?$n_640w$&wid=513&fit=constrain" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://images.asos-media.com/products/brave-soul-cotton-ribbed-roll-neck-sweater-in-khaki/202867448-1-green?$n_640w$&wid=513&fit=constrain" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://images.asos-media.com/products/brave-soul-cotton-ribbed-roll-neck-sweater-in-khaki/202867448-1-green?$n_640w$&wid=513&fit=constrain" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
