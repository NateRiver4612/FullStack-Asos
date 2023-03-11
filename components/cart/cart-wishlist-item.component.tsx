import React, { Fragment } from "react";
import Image from "next/image";

const CartWishlistItem = ({ item }) => {
  const { imageUrl, id, isSellingFast, name, price, colour } = item;
  return (
    <div className="flex sm:flex-col pb-6 w-full sm:w-[28%] gap-2 border-b-[1px] border-gray-300">
      <div className="">
        <Image src={`https://${imageUrl}`} height={160} width={120} />
      </div>

      <div className="w-full">
        <span className="text-xs font-semibold text-gray-500 sm:line-clamp-2 ">
          {name}
        </span>
        <div className="flex items-center gap-3 ">
          <span
            className={`${
              price.previous.value ? "text-red-700" : "text-gray-600"
            } items-center tracking-wider flex text-sm font-bold`}
          >
            {price.current.text}
          </span>

          {price.previous.value && (
            <span className="text-[10px] items-center tracking-wider flex line-through text-gray-500">
              {price.previous.text}
            </span>
          )}
        </div>
        <Fragment>
          <div className="sm:py-2 sm:mt-3 sm:border-y-[1px] border-gray-200">
            <span className="text-gray-300 text-sm font-thin">{colour}</span>
          </div>
          <button
            onClick={() => {}}
            className="rounded-[1px] w-[60%] sm:w-full uppercase transition-all duration-300 bg-gray-400 text-[10px] hover:bg-gray-600 font-semibold tracking-widest text-gray-300 py-2 my-2 "
          >
            move to bag
          </button>
        </Fragment>
      </div>
    </div>
  );
};

export default CartWishlistItem;
