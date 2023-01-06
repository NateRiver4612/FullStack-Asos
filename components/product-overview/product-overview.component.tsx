import React from "react";
import { AiFillHeart } from "react-icons/ai";
import Image from "next/image";

const ProductOverview = ({ product }) => {
  const { price, imageUrl, name, isSellingFast } = product;
  return (
    <div key={product.id} className="flex relative flex-col mt-5 -z-10">
      <div className="flex justify-end items-end">
        <Image height={380} width={300} src={`https://${imageUrl}`} />
        {isSellingFast && (
          <span className="font-bold text-[12px] absolute mb-[12%] sm:mb-[7%] md:mb-[6%] lg:mb-[5%] xl:mb-[3.8%] sm:text-[13px] bg-black/60 rounded-l-full px-3 text-gray-200 p-[5px] uppercase">
            selling fast
          </span>
        )}

        <span className="absolute text-[20px] sm:text-[24px] bg-white/50 rounded-full p-[5px] mb-[10px] mr-[10px]">
          {/* <AiOutlineHeart size={26}></AiOutlineHeart> */}
          <AiFillHeart></AiFillHeart>
        </span>
      </div>
      <div className="flex flex-col h-full">
        <span className="capitalize  mt-2 font-thin line-clamp-2 tracking-wider text-black text-[15px]">
          {name}
        </span>
        <div className="flex items-center mt-3">
          {price.previous.value && (
            <span className="text-xs pr-5 items-center tracking-wider flex line-through text-gray-500">
              {price.previous.text}
            </span>
          )}

          <span
            className={`${
              price.previous.value ? "text-red-700" : "text-gray-600"
            } items-center tracking-wider flex text-sm font-bold`}
          >
            {price.current.text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
