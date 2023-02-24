import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_LIKED_PRODUCTS } from "../../../utils/graphQl.utils";
import dynamic from "next/dynamic";

const ProductOverview_Container = dynamic(
  () =>
    import("../../../components/product-overview/product-overview.container"),
  { ssr: false }
);

const WishList = () => {
  const { data, error, loading } = useQuery(GET_LIKED_PRODUCTS);
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    if (!loading) {
      return setLikedProducts(data.getLikedProducts);
    }
  }, [data]);

  return (
    <div className="h-fit pb-24 flex flex-col items-center">
      <div className="w-full flex items-center justify-center bg-gray-100">
        <span className="py-6 text-2xl font-extrabold text-gray-800 tracking-wider">
          Saved Items
        </span>
      </div>
      <ProductOverview_Container
        wish={true}
        products={likedProducts}
      ></ProductOverview_Container>
    </div>
  );
};

export default WishList;
