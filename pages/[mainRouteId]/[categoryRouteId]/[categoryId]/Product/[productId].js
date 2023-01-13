import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";

import { Zoom, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductDetailPage = ({ data }) => {
  const {
    media: { images },
    info,
    price,
    variants,
    brand,
    description,
    name,
    rating,
  } = data;

  console.log(data);

  return (
    <div className="flex flex-col items-center 2xl:pl-[20%] 2xl:pr-[20%] lg:pl-[10%] lg:pr-[10%] md:pr-[5%]">
      <div className="flex">
        <div className="flex justify-end w-full h-full 2xl:pr-[5%]">
          <div className="hidden sm:flex flex-col items-end pt-6 pr-6 gap-4 ">
            {images.map((image, index) => (
              <div>
                <Image height={60} width={40} src={`https://${image.url}`} />
              </div>
            ))}
          </div>
          <div className="">
            <div className="h-full w-[100vw] md:w-[46vw] lg:w-[40vw] xl:w-[33vw] relative w-full">
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
              </Swiper>

              <div className="absolute z-20  items-center  gap-2 bottom-[10%] right-0 font-bold text-white w-[70px] rounded-l-full py-[4px] bg-black/75 flex justify-center">
                <span className="text-[15px]">2K</span>{" "}
                <AiFillHeart size={20}></AiFillHeart>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-[50%] md:flex ml-6 2xl:ml-0 ">
          <div className="flex flex-col pt-6">
            <h1 className="text-[14px] lg:text-[17px] text-gray-800 font-semibold tracking-wide">
              {name}
            </h1>
            <div className="mt-2 flex flex-col">
              <span className="font-bold text-[13px] lg:text-[17px] tracking-wider text-[#d42051]">
                Now {price.current.text}
              </span>
              <div className="flex text-[8px] md:text-[10px] tracking-wide gap-2">
                <span className="text-gray-500">RRP {price.previous.text}</span>
                <span className="text-[#d42051]">(-52%)</span>
              </div>
            </div>
            <div className="mt-4 flex text-[10px] lg:text-[15px] gap-2 items-center">
              <div className="flex gap-2 ">
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarHalf></BsStarHalf>
              </div>
              <span className="text-[10px] lg:text-[15px] text-gray-600">
                4.7
              </span>
              <span className="text-gray-500 text-[10px] lg:text-[15px]">
                (3)
              </span>
            </div>
            <div className="flex flex-col mt-4  ">
              <span className="font-bold tracking-widest text-gray-800 text-[10px] lg:text-[12px]">
                SIZE:
              </span>
              <select className="w-full px-2 outline-none text-[12px] lg:text-[14px] border-[1px] border-gray-400 tracking-wide py-[10px] mt-2">
                {variants.map((size) => {
                  return size.isInStock ? (
                    <option className="flex tracking-widest">
                      <span className="py-4 ">
                        {size.brandSize.replaceAll(" ", " - ")}
                      </span>
                    </option>
                  ) : (
                    <option className="py-24 flex " disabled>
                      <span className="py-4">
                        {size.brandSize} - Out of stock
                      </span>
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <div className="flex mt-4 items-center gap-4 ">
                <button className="uppercase bg-[#0a8950] w-full font-bold bg-black text-[10px] lg:text-[14px] tracking-widest text-white  py-2">
                  add to bag
                </button>
                <AiOutlineHeart className="cursor-pointer" size={25} />
              </div>
              <div className="flex flex-col p-4 border-[1px] border-gray-200 gap-4 mt-5 ">
                <div className="flex gap-3 text-[10px] lg:text-[13px] tracking-wide text-gray-600">
                  <MdOutlineLocalShipping size={20} />
                  Free Delivery
                </div>
                <div className="flex gap-3 text-gray-600">
                  <TbTruckReturn size={20} />
                  <div className="text-[10px] lg:text-[13px] gap-2 flex flex-col tracking-wide ">
                    <span>Free Returns.</span>
                    <span>Ts&Cs apply. More delivery info</span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-gray-200 border-x-[1px] border-b-[1px]">
                <span className="text-[8px] lg:text-[10px] underline text-gray-500 tracking-wider">
                  This product has shipping restrictions.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-[5%]">
        <div>
          <span className="uppercase text-[17px] tracking-wider text-gray-800 font-bold">
            you might also like
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const axios = require("axios");

  const productId = context.params.productId;

  const detail_options = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/products/v3/detail",
    params: {
      id: productId,
      lang: "en-US",
      store: "US",
      sizeSchema: "US",
      currency: "USD",
    },
    headers: {
      "X-RapidAPI-Key": "f906b6c3a6msh49a5389c512d5c0p1819eajsn3b16cc8b1128",
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };

  const detail_response = await axios.request(detail_options);

  const data = detail_response.data;

  return {
    props: {
      data: data,
    },
  };
};

export default ProductDetailPage;
