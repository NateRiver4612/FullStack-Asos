import { useAppDispatch } from "../../../redux/hooks";
import React, { useEffect, useState } from "react";
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
import WishEmpty from "../../../components/wish-list/wishList-empty.component";
import Wish from "../../../components/wish-list";
import Wish_Skeleton from "../../../components/wish-list/wish-skeleton";

const WishList_Page = () => {
  const wishItems = useAppSelector(selectWishItems);
  const dispatch = useAppDispatch();
  const [rendering, setRendering] = useState(true);

  const { authUser } = useAuth();

  const {
    loading: LIKED_PRODUCTS_LOADING,
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

  useEffect(() => {
    setTimeout(() => {
      setRendering(false);
    }, 2000);
  }, [LIKED_PRODUCTS_LOADING]);

  if (
    (LIKED_PRODUCTS_DATA && LIKED_PRODUCTS_DATA.getLikedProducts.length == 0) ||
    !authUser
  ) {
    return <WishEmpty></WishEmpty>;
  }

  if (rendering) return <Wish_Skeleton></Wish_Skeleton>;

  return <Wish wishItems={wishItems}></Wish>;
};

export default WishList_Page;
