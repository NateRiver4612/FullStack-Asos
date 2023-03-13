import React, { useEffect, useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import {
  clearCart,
  selectCartItems,
  setCartItems,
} from "../../redux/features/cart/cart.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import CartList from "./cart-list.component";
import Image from "next/image";
import CartWishList from "./cart-wishList.components";
import { selectWishItems } from "../../redux/features/wish/wish.slice";
import { useAuth } from "../../context/authUserContext";
import CartCheckout from "./cart-checkout.component";
import { useQuery } from "@apollo/client";
import { GET_CART_ITEMS } from "../../utils/graphQl.utils";

const Cart = () => {
  const { authUser } = useAuth();
  const cartItems = useAppSelector(selectCartItems);

  const dispatch = useAppDispatch();

  const wishItems = useAppSelector(selectWishItems);

  const cartWishItems = [...wishItems].slice(0, 3);

  const priceSum = cartItems.reduce(
    (accumulator, item) =>
      accumulator + item.price?.current.value * item.quantity,
    0
  );

  const quantitySum = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  const {
    data: CART_ITEMS_DATA,
    loading: CART_ITEMS_LOADING,
    error,
  } = useQuery(GET_CART_ITEMS, {
    variables: { userId: authUser?.id },
  });

  useEffect(() => {
    if (!CART_ITEMS_LOADING && authUser) {
      const cartByUser = CART_ITEMS_DATA.getCart;

      dispatch(setCartItems(cartByUser));
    } else {
      dispatch(clearCart());
    }
  }, [CART_ITEMS_DATA, authUser]);

  return (
    <div className="flex flex-col sm:flex-row pb-12 px-2 w-full lg:w-[85%] xl:w-[75%] 2xl:w-[65%] mt-2 gap-2 ">
      <div className="w-full sm:w-[60%] h-fit flex flex-col gap-2 ">
        <div className="bg-gray-100 h-[4rem] flex items-center">
          <div className="flex justify-between  w-full tracking-wider items-center px-6">
            <span className="uppercase font-bold text-lg text-gray-800">
              my bag
            </span>
            <span className="text-[11px] text-gray-400">
              Items are waiting to be checkout
            </span>
          </div>
        </div>
        <CartList cartItems={cartItems}></CartList>
        <div className="bg-gray-100 h-[4rem] flex items-center">
          <div className="flex justify-between  w-full tracking-wider items-center px-6">
            <span className="uppercase font-bold text-md text-gray-600">
              Sub-total
            </span>
            <span className="uppercase font-bold text-md text-gray-800 flex items-center gap-1">
              ${priceSum.toFixed(2)}{" "}
              <span className="text-xs font-light text-gray-400">
                ({quantitySum} items)
              </span>
            </span>
          </div>
        </div>
        <CartWishList cartWishItems={cartWishItems}></CartWishList>
        <div className="flex bg-gray-100 p-5 gap-2">
          <div className=" w-[15%] text-gray-600 flex justify-center ">
            <TbTruckDelivery size={35}></TbTruckDelivery>
          </div>
          <div className=" w-full flex flex-col gap-1">
            <span className="uppercase text-xs sm:text-sm tracking-widest font-extrabold text-gray-600 ">
              free* standard delivery
            </span>
            <span className="text-gray-600 text-xs sm:text-sm font-thin">
              Faster delivery options available to most contries.
            </span>
            <span className="text-xs text-gray-400 underline">More info</span>
          </div>
        </div>
      </div>
      <CartCheckout subTotal={priceSum}></CartCheckout>
    </div>
  );
};
export default Cart;
