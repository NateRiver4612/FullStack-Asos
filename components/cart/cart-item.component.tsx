import React from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

const CartItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price, colour } = cartItem;

  return (
    <div className="flex border-b-[1px] gap-5 pb-5 border-gray-200">
      <div className=" w-[20%] ">
        <Image height={140} width={110} src={`https:${imageUrl}`} />
      </div>
      <div className=" w-[80%] flex flex-col gap-2">
        <span className="text-gray-600 w-[80%]">{name}</span>
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
        <div className="flex gap-2 text-gray-400 text-sm">
          <span>{colour}</span>
          <div className="border-r-2 border-gray-200"></div>
          <span>Qty: {quantity}</span>
        </div>
        <div className="flex items-center gap-2 mt-4 text-sm w-fit text-gray-600 px-2 py-1 rounded-[1px] border-2 border-gray-300">
          <AiOutlineHeart size={20}></AiOutlineHeart>
          <span>Save for later</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
