import { useQuery } from "@apollo/client";
import React, { Fragment, useEffect } from "react";
import { useAuth } from "../context/authUserContext";
import { setCartItems } from "../redux/features/cart/cart.slice";
import { setWishItems } from "../redux/features/wish/wish.slice";
import { useAppDispatch } from "../redux/hooks";
import { GET_CART_ITEMS, GET_LIKED_PRODUCTS } from "../utils/graphQl.utils";

const State_Provider = ({ children }) => {
  const {
    loading: LIKED_PRODUCTS_LOADING,
    data: LIKED_PRODUCTS_DATA,
    error: Liked_Products_Error,
  } = useQuery(GET_LIKED_PRODUCTS);

  const dispatch = useAppDispatch();

  const { authUser } = useAuth();

  const {
    data: CART_ITEMS_DATA,
    loading: CART_ITEMS_LOADING,
    error,
  } = useQuery(GET_CART_ITEMS, {
    variables: { userId: authUser?.id },
  });

  useEffect(() => {
    if (!LIKED_PRODUCTS_LOADING && authUser) {
      const likedProductsByUser = LIKED_PRODUCTS_DATA.getLikedProducts.filter(
        (product) => product.likes.find((like) => like.id == authUser.id)
      );

      if (likedProductsByUser) {
        console.log(likedProductsByUser);
        dispatch(setWishItems(likedProductsByUser));
      }
    }
  }, [LIKED_PRODUCTS_DATA, authUser]);

  useEffect(() => {
    if (!CART_ITEMS_LOADING && authUser) {
      const cartByUser = CART_ITEMS_DATA.getCart;

      if (cartByUser) {
        dispatch(setCartItems(cartByUser));
      }
    }
  }, [CART_ITEMS_DATA, authUser]);

  return <Fragment>{children}</Fragment>;
};

export default State_Provider;
