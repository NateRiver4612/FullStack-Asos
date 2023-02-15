import React, { useEffect, useState } from "react";
import { ProductOverview } from "../../../../../components/product-overview";
import ProductDisplay from "../../../../../components/product/product-display.component";
import ProductInformation from "../../../../../components/product/product-information.component";
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
import ProductRating from "../../../../../components/product/product-rating.component";

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
        <ProductRating />
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
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const axios = require("axios");
  const { ProductDetail } = require("../../../../../public/detailProduct.data");

  // We fetch local sample data because RapidAPI has expired temporarily
  let data = {};

  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    // development build code
    data = ProductDetail[0];
  } else {
    // production build code
    const productId = context.params.productId;

    const detail_options = {
      method: "GET",
      url: process.env.PRODUCT_DETAIL,
      params: {
        id: productId,
        lang: "en-US",
        store: "US",
        sizeSchema: "US",
        currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
      },
    };

    const detail_response = await axios.request(detail_options);

    data = detail_response.data;
  }

  return {
    props: {
      data: data,
    },
  };
};

export default ProductDetailPage;
