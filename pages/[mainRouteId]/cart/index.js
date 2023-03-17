import Cart from "../../../components/cart";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import {
  GET_CART_ITEMS,
  GET_LIKED_PRODUCTS,
} from "../../../utils/graphQl.utils";
import {
  selectCartItems,
  setCartItems,
} from "../../../redux/features/cart/cart.slice";
import { useAuth } from "../../../context/authUserContext";
// import Cart_Skeleton from "../../../components/cart/cart-skeleton";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
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

  const cartItems = useAppSelector(selectCartItems);

  useEffect(() => {
    setTimeout(() => {
      setRendering(false);
    }, 3000);
  }, []);

  if (!authUser || cartItems.length == 0) {
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
