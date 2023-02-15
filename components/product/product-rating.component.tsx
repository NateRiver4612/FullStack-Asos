import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiCut } from "react-icons/bi";
import { IoDiamondOutline } from "react-icons/io5";

const ProductRating = () => {
  return (
    <div className="flex flex-col gap-8 sm:flex-row w-full ">
      <div className="w-full flex-col">
        <div>
          <div className="mt-4 flex text-[10px] lg:text-[13px] gap-2 items-center">
            <div className="flex gap-2 ">
              <BsStarFill></BsStarFill>
              <BsStarFill></BsStarFill>
              <BsStarFill></BsStarFill>
              <BsStarFill></BsStarFill>
              <BsStarHalf></BsStarHalf>
            </div>
            <span className="text-[10px] lg:text-[15px] text-gray-700">
              4.7
            </span>
            <span className="text-gray-500 text-[10px] lg:text-[15px]">
              (3 reviews)
            </span>
          </div>
          <span className="text-[14px] pt-2 text-gray-800 tracking-wider">
            100% of customers recommend this product
          </span>
        </div>
        <div className="mt-6 text-gray-700">
          <span className="uppercase font-bold text-[14px] tracking-wider">
            Customer Rating
          </span>
          <div className="mt-6 flex flex-col gap-2">
            <span className="uppercase gap-2 items-center flex text-[12px] font-bold tracking-wider">
              <BiCut size={21} />
              fit:
            </span>
            <div className="w-[80%] h-[13px] bg-gray-200/80">
              <div className="ml-[30%] mr-[10%] w-[12%] h-[13px] bg-black/80 block"></div>
            </div>
            <div className="flex w-[80%] justify-between text-gray-500 text-[12px]">
              <span>Runs Small</span>
              <span>Runs Large</span>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-2">
            <span className="uppercase gap-2 items-center flex text-[12px] font-bold tracking-wider">
              <IoDiamondOutline size={21} />
              quality:
            </span>
            <div className="w-[80%] h-[13px] bg-gray-200/80">
              <div className="ml-[75%] mr-[10%] w-[12%] h-[13px] bg-black/80 block"></div>
            </div>
            <div className="flex w-[80%] justify-between text-gray-500 text-[12px]">
              <span>Poor</span>
              <span>Great</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full xl:pl-[10%]">
        <span className="uppercase font-bold text-[13.5px] tracking-widest">
          most recent review
        </span>
        <div>
          <div className="mt-4 flex text-[10px] justify-between lg:text-[13px] gap-2 items-center">
            <div className="flex gap-2 ">
              <BsStarFill></BsStarFill>
              <BsStarFill></BsStarFill>
              <BsStarFill></BsStarFill>
              <BsStarFill></BsStarFill>
              <BsStarHalf></BsStarHalf>
            </div>
            <span className="text-gray-500 tracking-wider text-[12px]">
              14 days ago
            </span>
          </div>
          <span className="text-[10.5px] tracking-widest pt-2 text-gray-500 tracking-wider">
            Verified Purchasers
          </span>
        </div>
        <div className="flex flex-col gap-1 mt-4 ">
          <span className="text-[12px] tracking-wider font-bold text-gray-700">
            FIT PERFECT. GOOD MATERIAL
          </span>
          <span className="text-[12px] tracking-wider text-gray-600">
            Color was great. It fit snug like I was looking for. I’m 175 and
            wore a medium
          </span>
          <button className="uppercase hover:bg-gray-300 hover:text-white font-bold mt-4 tracking-wide text-gray-700 border-gray-300 border-2 py-2">
            view all reviews
          </button>
          <span className="text-[11px] mt-2 text-gray-400">
            All reviews are verified by ASOS unless otherwise indicated. Where a
            review states 'originally posted' by one of our brand partners; this
            has not been verified by ASOS.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductRating;
