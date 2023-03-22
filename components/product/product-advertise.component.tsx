import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductAdvertise = () => {
  return (
    <div className="mt-[10%] w-full pb-[10%]">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            loading="lazy"
            src="https://s0.2mdn.net/dfp/489680/4527299243/1671458257325/A-Converse-HolidayProgramingAdsHO22A01330C-prospecting-mw-970x250-x2.jpg"
            alt="picture"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="https://s0.2mdn.net/dfp/489680/4527299243/1671461424644/B-Converse-HolidayProgramingAdsHO22A03275C-prospecting-mw-970x250-x2.jpg"
            alt="picture"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default ProductAdvertise;
