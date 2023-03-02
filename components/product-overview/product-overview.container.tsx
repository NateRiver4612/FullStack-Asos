import React, { useEffect } from "react";
import ProductOverview from "./product-overview.component";
import { useMutation, useQuery } from "@apollo/client";
import { GET_LIKED_PRODUCTS, LIKE_PRODUCT } from "../../utils/graphQl.utils";
import Spinner from "../spinner/spinner.component";
import client from "../../utils/apolloClient";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setWishItems,
  selectWishItems,
} from "../../redux/features/wish/wish.slice";
import { useAuth } from "../../context/authUserContext";

const ProductOverview_Container = ({ products, wish, similarList }) => {
  const dispatch = useAppDispatch();
  const wishItems = useAppSelector(selectWishItems);

  const { authUser } = useAuth();

  const {
    loading: Liked_Products_Loading,
    data: Liked_Products_Data,
    error: Liked_Products_Error,
  } = useQuery(GET_LIKED_PRODUCTS);

  useEffect(() => {
    if (!Liked_Products_Loading && authUser) {
      const likedProductsByUser = Liked_Products_Data.getLikedProducts.filter(
        (product) => product.likes.find((like) => like.id == authUser.id)
      );

      dispatch(setWishItems(likedProductsByUser));
    }
  }, [Liked_Products_Data?.getLikedProducts, authUser]);

  if (Liked_Products_Loading || !authUser) {
    return <Spinner></Spinner>;
  }

  return (
    <div
      className={`grid transition-all ${
        similarList
          ? "w-full grid-cols-3 sm:grid-cols-5"
          : "grid-cols-2 w-[85%] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      } duration-1000  gap-3`}
    >
      {products?.map((product) => {
        return (
          <ProductOverview
            isWishItem={wish}
            wishItems={wishItems}
            key={product.id}
            product={product}
          ></ProductOverview>
        );
      })}
    </div>
  );
};

export default ProductOverview_Container;
