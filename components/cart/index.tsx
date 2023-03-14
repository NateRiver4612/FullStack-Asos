import React, { Fragment, useEffect, useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import {
  selectCartItems,
  setCartItems,
} from "../../redux/features/cart/cart.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectWishItems } from "../../redux/features/wish/wish.slice";
import { useAuth } from "../../context/authUserContext";
import { useQuery } from "@apollo/client";
import { GET_CART_ITEMS } from "../../utils/graphQl.utils";
import dynamic from "next/dynamic";
import { RiShoppingBagLine } from "react-icons/ri";
import Cart_Skeleton from "./cart-skeleton";
import CartWishList from "./cart-wishList.components";
import CartList from "./cart-list.component";
import CartCheckout from "./cart-checkout.component";
import CartSubTotal from "./cart-subTotal.component";

const Cart = () => {
  const cartItems = useAppSelector(selectCartItems);

  const dispatch = useAppDispatch();

  const wishItems = useAppSelector(selectWishItems);

  const { authUser } = useAuth();

  const cartWishItems = [...wishItems].slice(0, 3);

  const [rendering, setRendering] = useState(true);

  const priceSum = cartItems.reduce(
    (accumulator, item) =>
      accumulator + item.price?.current.value * item.quantity,
    0
  );

  const quantitySum = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  console.log(priceSum, quantitySum);

  const {
    data: CART_ITEMS_DATA,
    loading: CART_ITEMS_LOADING,
    error,
  } = useQuery(GET_CART_ITEMS, {
    variables: { userId: authUser?.id },
  });

  useEffect(() => {
    setTimeout(() => {
      setRendering(CART_ITEMS_LOADING);
    }, 3000);
  }, [CART_ITEMS_LOADING]);

  useEffect(() => {
    if (!CART_ITEMS_LOADING && authUser) {
      const cartByUser = CART_ITEMS_DATA.getCart;

      dispatch(setCartItems(cartByUser));
    }
  }, [CART_ITEMS_DATA, authUser]);

  if (CART_ITEMS_DATA && CART_ITEMS_DATA.getCart.length == 0) {
    return (
      <div className="h-screen sm:h-[67vh] flex pt-20 justify-center w-screen">
        <div className="flex w-full sm:w-[30vw] tracking-widest items-center flex-col gap-4">
          <span className="text-[30px]">
            <RiShoppingBagLine></RiShoppingBagLine>
          </span>
          <span className="font-bold text-xl">Your bag is empty</span>
          <span className="text-center text-[13px]  ">
            Items remain in your bag for 60 minutes, and then they’re moved to
            your Saved Items.
          </span>
          {authUser ? (
            <Fragment>
              <button className="bg-gray-500 uppercase w-[50%] text-gray-200 transition-all duration-300 hover:bg-gray-400 py-3 text-sm font-bold tracking-widest">
                View saved items
              </button>
              <span className="underline text-xs">Continue Shopping</span>
            </Fragment>
          ) : (
            <Fragment>
              <span className="text-[13px] font-bold">
                Sign in to see your bag
              </span>
              <button className="bg-gray-500 w-[50%] text-gray-200 transition-all duration-300 hover:bg-gray-400 py-3 text-sm font-bold tracking-widest">
                SIGN IN
              </button>
            </Fragment>
          )}
        </div>
      </div>
    );
  }

  if (rendering) return <Cart_Skeleton></Cart_Skeleton>;

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

        <CartSubTotal
          priceSum={priceSum}
          quantitySum={quantitySum}
        ></CartSubTotal>

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
