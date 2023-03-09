import React, { Fragment } from "react";
import Image from "next/image";
import CartWishlistItem from "./cart-wishlist-item.component";

const CartWishList = ({ cartWishItems }) => {
  return (
    <div className="flex flex-col bg-gray-100 gap-3 items-center">
      <div className="flex flex-col tracking-widest gap-1  items-center py-5 w-[80%] border-b-2 border-gray-200">
        <span className="font-bold text-[17px] uppercase text-gray-700">
          looking for these...?
        </span>
        <span className="text-[13px] text-gray-500">
          These items were recently moved to your Saved Items
        </span>
      </div>
      <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row justify-between mt-4 w-[80%]">
        {cartWishItems.map((item, index) => {
          return (
            <CartWishlistItem key={item.id} item={item}></CartWishlistItem>
          );
        })}
      </div>
      <div className="py-6 pb-8">
        <button className="uppercase rounded-[1px] hover:bg-gray-500 transiton-all duration-300 hover:text-gray-200 text-sm border-2 border-gray-500 px-8 py-2 font-semibold text-gray-600">
          view all saved items
        </button>
      </div>
    </div>
  );
};

export default CartWishList;
