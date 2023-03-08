import React, { Fragment } from "react";
import Image from "next/image";

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
      <div className="flex justify-between mt-4 w-[80%]">
        {cartWishItems.map((item, index) => {
          const { imageUrl, id, isSellingFast, name, price, colour } = item;
          return (
            <div key={index + id} className="flex flex-col w-[28%] gap-2">
              <Image src={`https:${imageUrl}`} height={160} width={120} />
              <span className="text-xs font-semibold text-gray-500 line-clamp-2">
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
                <div className="py-2 mt-3 border-y-[1px] border-gray-200">
                  <span className="text-gray-300 text-sm font-thin">
                    {colour}
                  </span>
                </div>
                <button
                  onClick={() => {}}
                  className="rounded-[1px] uppercase transition-all duration-300 bg-gray-400 text-[11px] hover:bg-gray-600 font-semibold tracking-widest text-gray-300 py-2 my-2 "
                >
                  move to bag
                </button>
              </Fragment>
            </div>
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
