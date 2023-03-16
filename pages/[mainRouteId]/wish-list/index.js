import { useAppDispatch } from "../../../redux/hooks";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useAppSelector } from "../../../redux/hooks";
import {
  selectWishItems,
  setWishItems,
} from "../../../redux/features/wish/wish.slice";
import { useAuth } from "../../../context/authUserContext";
import {
  GET_LIKED_PRODUCTS,
  GET_CART_ITEMS,
} from "../../../utils/graphQl.utils";
import { useQuery } from "@apollo/client";
import { setCartItems } from "../../../redux/features/cart/cart.slice";

const ProductOverview_Container = dynamic(
  () =>
    import("../../../components/product-overview/product-overview.container"),
  { ssr: false }
);

const WishList_Page = () => {
  const wishItems = useAppSelector(selectWishItems);
  const dispatch = useAppDispatch();

  const { authUser } = useAuth();

  const {
    loading: Liked_Products_Loading,
    data: LIKED_PRODUCTS_DATA,
    error: Liked_Products_Error,
  } = useQuery(GET_LIKED_PRODUCTS);

  const {
    data: CART_ITEMS_DATA,
    loading: CART_ITEMS_LOADING,
    error,
  } = useQuery(GET_CART_ITEMS, {
    variables: { userId: authUser?.id },
  });

  useEffect(() => {
    if (authUser) {
      const likedProductsByUser = LIKED_PRODUCTS_DATA?.getLikedProducts.filter(
        (product) => product.likes.find((like) => like.id == authUser.id)
      );

      if (likedProductsByUser) {
        dispatch(setWishItems(likedProductsByUser));
      }
    }
  }, [LIKED_PRODUCTS_DATA, authUser]);

  useEffect(() => {
    if (authUser) {
      const cartByUser = CART_ITEMS_DATA?.getCart;

      if (cartByUser) {
        dispatch(setCartItems(cartByUser));
      }
    }
  }, [CART_ITEMS_DATA, authUser]);

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

export default WishList_Page;
