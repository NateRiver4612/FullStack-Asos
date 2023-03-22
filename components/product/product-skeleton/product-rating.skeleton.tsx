import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiCut } from "react-icons/bi";
import { IoDiamondOutline } from "react-icons/io5";

const ProductRating_Skeleton = () => {
  return (
    <div className="flex w-full flex-col mt-[5%] px-4 md:px-0">
      <div>
        <div className="bg-gray-200 h-5 w-[15%] rounded-md"></div>
      </div>
      <div className="flex flex-col gap-8 sm:flex-row w-full">
        <div className="w-full flex-col">
          <div>
            <div className="mt-4 flex text-[10px] lg:text-[13px] gap-2 items-center">
              <div className="bg-gray-200 h-3 w-[80%] rounded-lg"></div>
            </div>
            <span className="text-[14px] pt-2 text-gray-800 tracking-wider">
              <div className="bg-gray-200 mt-2 h-3 w-[80%] rounded-md"></div>
            </span>
          </div>
          <div className="mt-6 text-gray-700">
            <div className="bg-gray-200 h-5 w-[30%] rounded-md"></div>
            <div className="mt-6 flex flex-col gap-2">
              <div className="bg-gray-200 h-3 w-[15%] rounded-full"></div>
              <div className="bg-gray-200 h-3 w-[80%] rounded-full"></div>
              <div className="flex w-[80%] justify-between text-gray-500 text-[12px]">
                <div className="bg-gray-200 h-3 w-[15%] rounded-full"></div>
                <div className="bg-gray-200 h-3 w-[15%] rounded-full"></div>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <div className="bg-gray-200 h-3 w-[15%] rounded-full"></div>
              <div className="bg-gray-200 h-3 w-[80%] rounded-full"></div>
              <div className="flex w-[80%] justify-between text-gray-500 text-[12px]">
                <div className="bg-gray-200 h-3 w-[15%] rounded-full"></div>
                <div className="bg-gray-200 h-3 w-[15%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:pl-[10%]">
          <div className="bg-gray-200 h-5 w-[40%] rounded-md"></div>
          <div>
            <div className="mt-4 flex text-[10px] justify-between lg:text-[13px] gap-2 items-center">
              <div className="bg-gray-200 h-3 w-[30%] rounded-full"></div>
              <div className="bg-gray-200 h-3 w-[20%] rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-4 ">
            <div className="bg-gray-200 h-3 w-[40%] rounded-full"></div>
            <div className="bg-gray-200 h-3 w-full rounded-full"></div>
            <div className="bg-gray-200 h-10 w-full rounded-md mt-4"></div>
            <div className="bg-gray-200 h-2 w-full rounded-full mt-2"></div>
            <div className="bg-gray-200 h-2 w-full rounded-full"></div>
            <div className="bg-gray-200 h-2 w-full rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRating_Skeleton;
