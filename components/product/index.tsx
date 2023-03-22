import React, { useState, useEffect } from "react";
// import ProductOverview_Container from "../product-overview/product-overview.container";
// import ProductDisplay from "./product-display.component";
// import ProductInformation from "./product-information.component";
import ProductRating from "./product-rating.component";

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
import dynamic from "next/dynamic";

const ProductOverview_Container = dynamic(
  () => import("../product-overview/product-overview.container"),
  { ssr: false }
);

const ProductDisplay = dynamic(() => import("./product-display.component"), {
  ssr: false,
});

const ProductInformation = dynamic(
  () => import("./product-information.component"),
  { ssr: false }
);

const Product_Detail = ({ product }) => {
  const {
    media: { images },
  } = product;

  const [similaritems, setSimilarItems] = useState([]);

  useEffect(() => {
    const similar_items = JSON.parse(localStorage.getItem("items"));

    const random_items =
      similar_items && [...similar_items].sort(() => 0.5 - Math.random());

    setSimilarItems(random_items?.slice(0, 15));
  }, []);
  return (
    <div className="flex flex-col items-center 2xl:pl-[20%] 2xl:pr-[20%] lg:pl-[10%] lg:pr-[10%] md:pr-[5%] sm:pr-[5%] sm:pl-[5%]">
      <div className="flex flex-col w-full sm:flex-row">
        <ProductDisplay images={images} />
        <ProductInformation product={product} />
      </div>
      <div className="flex w-full flex-col mt-[5%] px-4 md:px-0">
        <div>
          <span className="uppercase text-[17px] tracking-wider text-gray-800 font-bold">
            you might also like
          </span>
        </div>
        <ProductOverview_Container
          similarList={true}
          products={similaritems}
          wish={undefined}
        />
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
export default Product_Detail;
