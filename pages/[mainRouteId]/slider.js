import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel, Zoom, Pagination } from "swiper";
import "swiper/css";
// import "swiper/css/navigation";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const slides = [
  "https://picsum.photos/1920/1080",
  "https://picsum.photos/1920/1081",
  "https://picsum.photos/1920/1082",
  "https://picsum.photos/1920/1083",
];

export default function App() {
  const [imagesNavSlider, setImagesNavSlider] = useState(null);
  return (
    <div className="App">
      <section className="slider">
        <div className="slider__flex">
          <div className="slider__col">
            <div className="slider__thumbs">
              <Swiper
                onSwiper={setImagesNavSlider}
                direction="vertical"
                spaceBetween={12}
                slidesPerView={4}
                navigation={true}
                className="swiper-container1"
                modules={[Navigation, Thumbs]}
              >
                {slides.map((slide, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="slider__image">
                        <img src={slide} alt="" />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          <div className="h-full w-[100vw] md:w-[46vw] lg:w-[40vw] xl:w-[33vw] relative ">
            <Swiper
              thumbs={{
                swiper:
                  imagesNavSlider && Object.keys(imagesNavSlider).length > 2
                    ? imagesNavSlider
                    : "",
              }}
              style={{
                "--swiper-navigation-color": "#343530",
                "--swiper-pagination-color": "#343530",
                "--swiper-navigation-size": "30px",
              }}
              zoom={true}
              loop={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Zoom, Navigation, Pagination, Thumbs]}
              className="mySwiper"
            >
              {slides.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div key={index} className="swiper-zoom-container">
                      <img
                        src={image}
                        width={510}
                        height={600}
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

          {/* <div className="slider__images">
            <Swiper
              thumbs={{
                swiper:
                  imagesNavSlider && Object.keys(imagesNavSlider).length > 2
                    ? imagesNavSlider
                    : "",
              }}
              direction="horizontal"
              slidesPerView={1}
              spaceBetween={32}
              mousewheel={true}
              navigation={true}
              className="swiper-container2"
              modules={[Navigation, Thumbs, Mousewheel]}
            >
              {slides.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="slider__image">
                      <img src={slide} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div> */}
        </div>
      </section>
    </div>
  );
}
