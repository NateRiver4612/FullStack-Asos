import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_LIKED_PRODUCTS } from "../../../utils/graphQl.utils";
import dynamic from "next/dynamic";
import { useAuth } from "../../../context/authUserContext";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import {
  selectWishItems,
  setWishItems,
} from "../../../redux/features/wish/wish.slice";

const ProductOverview_Container = dynamic(
  () =>
    import("../../../components/product-overview/product-overview.container"),
  { ssr: false }
);

const WishList = () => {
  const { data, error, loading } = useQuery(GET_LIKED_PRODUCTS);
  const { authUser } = useAuth();

  const wishItems = useAppSelector(selectWishItems);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (!loading && authUser) {
  //     const likedProductsByUser = data.getLikedProducts.filter((product) =>
  //       product.likes.find((like) => like.id == authUser.id)
  //     );

  //     dispatch(setWishItems(likedProductsByUser));
  //   }
  // }, [data, authUser]);

  // console.log(wishItems);

  return (
    <div className="h-fit pb-24 flex flex-col items-center">
      <div className="w-full flex items-center justify-center bg-gray-100">
        <span className="py-6 text-2xl font-extrabold text-gray-800 tracking-wider">
          Saved Items
        </span>
      </div>
      {wishItems.length > 0 ? (
        <ProductOverview_Container wish={true} products={wishItems} />
      ) : (
        <div className="h-[65vh] flex justify-center items-center w-screen">
          <span className="font-bold font-raleway tracking-widest text-gray-300  text-[15px] md:text-[20px] lg:text-[25px] xl:text-[30px] uppercase">
            You haven't like any item
          </span>
        </div>
      )}
    </div>
  );
};

export default WishList;
