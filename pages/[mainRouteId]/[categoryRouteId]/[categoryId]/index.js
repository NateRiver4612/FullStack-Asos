import React, { useState, useEffect } from "react";
import Product_Overview_Skeleton from "../../../../components/product-overview/product-overview-skeleton";
import ProductList from "../../../../components/product-overview";

const ProductList_Page = ({ data }) => {
  const [rendering, setRendering] = useState(true);
  const { products, facets } = data;

  useEffect(() => {
    setTimeout(() => {
      setRendering(false);
    }, 3000);
  }, []);

  if (rendering)
    return (
      <Product_Overview_Skeleton
        facets={facets}
        products={products}
      ></Product_Overview_Skeleton>
    );

  return <ProductList data={data}></ProductList>;
};

export async function getServerSideProps({ query, res, req }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const axios = require("axios");
  const { ListProduct } = require("../../../../public/listProduct.data");

  var bodyObj = {};

  let data = {};

  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    // development build code
    console.log("Development");
    data = ListProduct[0];
  } else {
    // production build code
    console.log("Prodution");
    Object.entries(query).map((object, index) => {
      const key = object[0];
      const value = object[1];

      bodyObj[key] = value;
    });

    const options = {
      method: "GET",
      url: process.env.PRODUCT_LIST,
      params: {
        store: "US",
        offset: "0",
        limit: "50",
        country: "US",
        sort: "freshness",
        currency: "USD",
        sizeSchema: "US",
        lang: "en-US",
        ...bodyObj,
      },
      headers: {
        "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
      },
    };

    const response = await axios.request(options);

    data = response.data;
  }

  return { props: { data: data } };
}

export default ProductList_Page;
