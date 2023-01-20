import React, { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { ProductOverview } from "../../../../../components/product-overview";
import ProductDisplay from "../../../../../components/product/product-display.component";
import ProductInformation from "../../../../../components/product/product-information.component";
import { BiCut } from "react-icons/bi";
import { IoDiamondOutline } from "react-icons/io5";
import Image from "next/image";

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

  const [similaritems, setSimilarItems] = useState([]);

  useEffect(() => {
    const similar_items = JSON.parse(localStorage.getItem("items"));

    const random_items = [...similar_items].sort(() => 0.5 - Math.random());

    setSimilarItems(random_items.slice(0, 18));
  }, []);

  return (
    <div className="flex flex-col items-center 2xl:pl-[20%] 2xl:pr-[20%] lg:pl-[10%] lg:pr-[10%] md:pr-[5%] sm:pr-[5%] sm:pl-[5%]">
      <div className="flex flex-col w-full sm:flex-row">
        <ProductDisplay images={images} />
        <ProductInformation name={name} variants={variants} price={price} />
      </div>
      <div className="flex w-full flex-col mt-[5%] px-4 md:px-0">
        <div>
          <span className="uppercase text-[17px] tracking-wider text-gray-800 font-bold">
            you might also like
          </span>
        </div>
        <div className="grid w-full grid-cols-3 sm:grid-cols-5 gap-3">
          {similaritems.map((product) => {
            return (
              <ProductOverview
                key={product.id}
                product={product}
              ></ProductOverview>
            );
          })}
        </div>
      </div>
      <div className="flex w-full flex-col mt-[5%] px-4 md:px-0">
        <div>
          <span className="uppercase text-[18px] tracking-wider text-gray-800 font-bold">
            reviews
          </span>
        </div>
        <div className="flex flex-col gap-8 sm:flex-row w-full ">
          <div className="w-full flex-col">
            <div>
              <div className="mt-4 flex text-[10px] lg:text-[13px] gap-2 items-center">
                <div className="flex gap-2 ">
                  <BsStarFill></BsStarFill>
                  <BsStarFill></BsStarFill>
                  <BsStarFill></BsStarFill>
                  <BsStarFill></BsStarFill>
                  <BsStarHalf></BsStarHalf>
                </div>
                <span className="text-[10px] lg:text-[15px] text-gray-700">
                  4.7
                </span>
                <span className="text-gray-500 text-[10px] lg:text-[15px]">
                  (3 reviews)
                </span>
              </div>
              <span className="text-[14px] pt-2 text-gray-800 tracking-wider">
                100% of customers recommend this product
              </span>
            </div>
            <div className="mt-6 text-gray-700">
              <span className="uppercase font-bold text-[14px] tracking-wider">
                Customer Rating
              </span>
              <div className="mt-6 flex flex-col gap-2">
                <span className="uppercase gap-2 items-center flex text-[12px] font-bold tracking-wider">
                  <BiCut size={21} />
                  fit:
                </span>
                <div className="w-[80%] h-[13px] bg-gray-200/80">
                  <div className="ml-[30%] mr-[10%] w-[12%] h-[13px] bg-black/80 block"></div>
                </div>
                <div className="flex w-[80%] justify-between text-gray-500 text-[12px]">
                  <span>Runs Small</span>
                  <span>Runs Large</span>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <span className="uppercase gap-2 items-center flex text-[12px] font-bold tracking-wider">
                  <IoDiamondOutline size={21} />
                  quality:
                </span>
                <div className="w-[80%] h-[13px] bg-gray-200/80">
                  <div className="ml-[75%] mr-[10%] w-[12%] h-[13px] bg-black/80 block"></div>
                </div>
                <div className="flex w-[80%] justify-between text-gray-500 text-[12px]">
                  <span>Poor</span>
                  <span>Great</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:pl-[10%]">
            <span className="uppercase font-bold text-[13.5px] tracking-widest">
              most recent review
            </span>
            <div>
              <div className="mt-4 flex text-[10px] justify-between lg:text-[13px] gap-2 items-center">
                <div className="flex gap-2 ">
                  <BsStarFill></BsStarFill>
                  <BsStarFill></BsStarFill>
                  <BsStarFill></BsStarFill>
                  <BsStarFill></BsStarFill>
                  <BsStarHalf></BsStarHalf>
                </div>
                <span className="text-gray-500 tracking-wider text-[12px]">
                  14 days ago
                </span>
              </div>
              <span className="text-[10.5px] tracking-widest pt-2 text-gray-500 tracking-wider">
                Verified Purchasers
              </span>
            </div>
            <div className="flex flex-col gap-1 mt-4 ">
              <span className="text-[12px] tracking-wider font-bold text-gray-700">
                FIT PERFECT. GOOD MATERIAL
              </span>
              <span className="text-[12px] tracking-wider text-gray-600">
                Color was great. It fit snug like I was looking for. I’m 175 and
                wore a medium
              </span>
              <button className="uppercase hover:bg-gray-300 hover:text-white font-bold mt-4 tracking-wide text-gray-700 border-gray-300 border-2 py-2">
                view all reviews
              </button>
              <span className="text-[11px] mt-2 text-gray-400">
                All reviews are verified by ASOS unless otherwise indicated.
                Where a review states 'originally posted' by one of our brand
                partners; this has not been verified by ASOS.
              </span>
            </div>
          </div>
        </div>
      </div>
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
              src="https://s0.2mdn.net/dfp/489680/4527299243/1671458257325/A-Converse-HolidayProgramingAdsHO22A01330C-prospecting-mw-970x250-x2.jpg"
              alt="picture"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://s0.2mdn.net/dfp/489680/4527299243/1671461424644/B-Converse-HolidayProgramingAdsHO22A03275C-prospecting-mw-970x250-x2.jpg"
              alt="picture"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const axios = require("axios");
  const { ProductDetail } = require("../../../../../public/detailProduct.data");

  // const productId = context.params.productId;

  // const detail_options = {
  //   method: "GET",
  //   url: "https://asos2.p.rapidapi.com/products/v3/detail",
  //   params: {
  //     id: productId,
  //     lang: "en-US",
  //     store: "US",
  //     sizeSchema: "US",
  //     currency: "USD",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "f906b6c3a6msh49a5389c512d5c0p1819eajsn3b16cc8b1128",
  //     "X-RapidAPI-Host": "asos2.p.rapidapi.com",
  //   },
  // };

  // const detail_response = await axios.request(detail_options);

  // const data = detail_response.data;

  // We fetch local sample data because RapidAPI has expired temporarily
  let data = {};

  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    // development build code
    console.log("Development");
    const response = await fetch(
      "http://localhost:3000/api/local_detailProductData"
    );

    data = await response.json();
  } else {
    // production build code
    console.log("Prodution");
    data = ProductDetail[0];
  }

  return {
    props: {
      data: data,
    },
  };
};

export default ProductDetailPage;
