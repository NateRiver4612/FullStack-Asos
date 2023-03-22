import React, { useState, useEffect } from "react";

import Product_Detail from "../../../../../components/product";
import Product_Detail_Skeleton from "../../../../../components/product/product-skeleton";

const ProductDetail_Page = ({ data }) => {
  const [rendering, setRendering] = useState(true);
  const [similarItems, setSimilarItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setRendering(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const similar_items = JSON.parse(localStorage.getItem("items"));

    const random_items =
      similar_items && [...similar_items].sort(() => 0.5 - Math.random());

    setSimilarItems(random_items?.slice(0, 15));
  }, []);

  if (rendering)
    return (
      <div className="w-full flex justify-center">
        <Product_Detail_Skeleton
          similarItems={similarItems}
        ></Product_Detail_Skeleton>
      </div>
    );

  return (
    <Product_Detail similarItems={similarItems} product={data}></Product_Detail>
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

export default ProductDetail_Page;
