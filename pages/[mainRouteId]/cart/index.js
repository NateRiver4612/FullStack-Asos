import Cart from "../../../components/cart";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import {
  GET_CART_ITEMS,
  GET_LIKED_PRODUCTS,
} from "../../../utils/graphQl.utils";
import { setCartItems } from "../../../redux/features/cart/cart.slice";
import { useAuth } from "../../../context/authUserContext";
// import Cart_Skeleton from "../../../components/cart/cart-skeleton";
import { useAppDispatch } from "../../../redux/hooks";
import { setWishItems } from "../../../redux/features/wish/wish.slice";
// import CartEmpty from "../../../components/cart/cart-empty.component";

import dynamic from "next/dynamic";

const CartEmpty = dynamic(() =>
  import("../../../components/cart/cart-empty.component")
);

const Cart_Skeleton = dynamic(() =>
  import("../../../components/cart/cart-skeleton")
);

const Cart_Page = () => {
  const [rendering, setRendering] = useState(true);

  const { authUser } = useAuth();

  const dispatch = useAppDispatch();

  const { data: CART_ITEMS_DATA, loading: CART_ITEMS_LOADING } = useQuery(
    GET_CART_ITEMS,
    {
      variables: { userId: authUser?.id },
    }
  );

  const { data: LIKED_PRODUCTS_DATA, loading: LIKED_PRODUCTS_LOADING } =
    useQuery(GET_LIKED_PRODUCTS);

  useEffect(() => {
    if (!LIKED_PRODUCTS_LOADING && authUser) {
      const likedProductsByUser = LIKED_PRODUCTS_DATA.getLikedProducts.filter(
        (product) => product.likes.find((like) => like.id == authUser.id)
      );

      if (likedProductsByUser) {
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

  useEffect(() => {
    setTimeout(() => {
      setRendering(false);
    }, 2000);
  }, [CART_ITEMS_LOADING]);

  if ((CART_ITEMS_DATA && CART_ITEMS_DATA.getCart.length == 0) || !authUser) {
    return <CartEmpty></CartEmpty>;
  }

  if (rendering)
    return (
      <div className="w-full flex justify-center">
        <Cart_Skeleton></Cart_Skeleton>
      </div>
    );

  return (
    <div className="w-screen bg-gray-200 flex justify-center ">
      <Cart></Cart>
    </div>
  );
};

export default Cart_Page;
