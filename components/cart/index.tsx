import React, { Fragment } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { selectCartItems } from "../../redux/features/cart/cart.slice";
import { useAppSelector } from "../../redux/hooks";
import ProductOverview_Container from "../product-overview/product-overview.container";
import CartList from "./cart-list.component";
import Image from "next/image";
import CartWishList from "./cart-wishList.components";
import { selectWishItems } from "../../redux/features/wish/wish.slice";

const Cart = () => {
  const cartItems = useAppSelector(selectCartItems);
  const wishItems = useAppSelector(selectWishItems);

  const cartWishItems = [...wishItems].slice(3, 6);

  return (
    <div className="w-[60%] h-fit flex flex-col gap-2 ">
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
          <span className="uppercase font-bold text-md text-gray-800">
            $278.16
          </span>
        </div>
      </div>
      <CartWishList cartWishItems={cartWishItems}></CartWishList>
      <div className="flex bg-gray-100 p-5">
        <div className=" w-[18%] text-gray-600 flex justify-center ">
          <TbTruckDelivery size={35}></TbTruckDelivery>
        </div>
        <div className=" w-full flex flex-col gap-1">
          <span className="uppercase text-md tracking-widest font-bold text-gray-600 w-[60%]">
            free* standard delivery
          </span>
          <span className="text-gray-600 text-sm font-thin">
            Faster delivery options available to most contries.
          </span>
          <span className="text-xs text-gray-400 underline">More info</span>
        </div>
      </div>
    </div>
  );
};
export default Cart;
