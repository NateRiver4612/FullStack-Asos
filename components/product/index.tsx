import React from "react";
// import ProductOverview_Container from "../product-overview/product-overview.container";
// import ProductDisplay from "./product-display.component";
import ProductInformation from "./product-information.component";
import ProductRating from "./product-rating.component";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import ProductSimliarities from "./product-simliarities.component";
import ProductAdvertise from "./product-advertise.component";

import Product_Detail_Skeleton from "./product-skeleton";

const ProductOverview_Container = dynamic(
  () => import("../product-overview/product-overview.container"),
  { ssr: false }
);

const ProductDisplay = dynamic(() => import("./product-display.component"), {
  ssr: false,
});

// const

const Product_Detail = ({ product, similarItems }) => {
  const {
    media: { images },
  } = product;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex flex-col items-center 2xl:pl-[20%] 2xl:pr-[20%] lg:pl-[10%] lg:pr-[10%] md:pr-[5%] sm:pr-[5%] sm:pl-[5%]"
    >
      <div className="flex flex-col w-full sm:flex-row">
        <ProductDisplay images={images} />

        <ProductInformation product={product} />
      </div>
      <ProductSimliarities similarItems={similarItems}></ProductSimliarities>

      <ProductRating></ProductRating>

      <ProductAdvertise></ProductAdvertise>
    </motion.div>
  );
};
export default Product_Detail;
