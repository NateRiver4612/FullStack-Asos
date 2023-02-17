import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_LIKED_PRODUCTS } from "../../../utils/graphQl.utils";
import { ProductOverview } from "../../../components/product-overview";

const WishList = () => {
  const { data, error, loading } = useQuery(GET_LIKED_PRODUCTS);
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    if (!loading) {
      return setLikedProducts(data.getLikedProducts);
    }
  }, []);

  console.log(likedProducts);

  return (
    <div className="h-screen ">
      <div className="w-full flex items-center justify-center bg-gray-200">
        <span className="py-6 text-xl font-extrabold text-gray-800 tracking-wider">
          Saved Items
        </span>
      </div>
    </div>
  );
};

export default WishList;
