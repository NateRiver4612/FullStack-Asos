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
import { motion } from "framer-motion";
import { RiShoppingBagLine } from "react-icons/ri";
import Cart_Skeleton from "./cart-skeleton";
import CartWishList from "./cart-wishList.components";
import CartList from "./cart-list.component";
import CartCheckout from "./cart-checkout.component";
import CartSubTotal from "./cart-subTotal.component";
import CartEmpty from "./cart-empty.component";

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
    }
  }, [CART_ITEMS_DATA, authUser]);

  useEffect(() => {
    setTimeout(() => {
      setRendering(false);
    }, 2000);
  }, [CART_ITEMS_LOADING]);

  if (CART_ITEMS_DATA && CART_ITEMS_DATA.getCart.length == 0) {
    return <CartEmpty></CartEmpty>;
  }

  if (rendering) return <Cart_Skeleton></Cart_Skeleton>;

  return (
    <motion.div
      initial={{ opacity: 0.4, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex flex-col sm:flex-row pb-12 px-2 w-full lg:w-[85%] xl:w-[75%] 2xl:w-[65%] mt-2 gap-2 "
    >
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
    </motion.div>
  );
};
export default Cart;
