import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, Pagination, Thumbs } from "swiper";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ProductDisplay = ({ images }) => {
  const [imagesNavSlider, setImagesNavSlider] = useState(null);

  return (
    <div className="flex justify-end w-full h-full  2xl:pr-[5%]">
      <div className="slider__col hidden sm:flex flex-col w-fit mr-[20px] mt-6">
        <Swiper
          onSwiper={setImagesNavSlider}
          direction="vertical"
          spaceBetween={12}
          slidesPerView={4}
          navigation={true}
          className=" flex flex-col sm:h-[40vh] md:h-[65%] lg:h-[65%] xl:h-[50vh]"
          modules={[Navigation, Thumbs]}
        >
          {images.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="slider__image">
                  <Image
                    width={50}
                    height={70}
                    src={`https://${slide.url}`}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="h-full w-[100vw] sm:w-[50vw] lg:w-[45vw] 2xl:w-[33vw] relative ">
        <Swiper
          style={{
            "--swiper-navigation-color": "#343530",
            "--swiper-pagination-color": "#343530",
            "--swiper-navigation-size": "30px",
          }}
          zoom={true}
          loop={true}
          thumbs={{
            swiper:
              imagesNavSlider && Object.keys(imagesNavSlider).length > 2
                ? imagesNavSlider
                : "",
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Zoom, Navigation, Pagination, Thumbs]}
          className="mySwiper text-[#343530]"
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <div key={index} className="swiper-zoom-container">
                  <img
                    src={`https://${image.url}`}
                    width={650}
                    alt="product image"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="absolute z-20  items-center  gap-2 bottom-[10%] right-0 font-bold text-white w-[70px] rounded-l-full py-[4px] bg-black/75 flex justify-center">
          <span className="text-[15px]">2K</span>{" "}
          <AiFillHeart size={20}></AiFillHeart>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
