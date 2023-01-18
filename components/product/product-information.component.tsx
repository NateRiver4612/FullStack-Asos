import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";

const ProductInformation = ({ variants, name, price }) => {
  return (
    <div className=" w-[80%] sm:w-[50%] sm:flex ml-6 2xl:ml-0 ">
      <div className="flex flex-col pt-6">
        <h1 className="text-[22px] sm:text-[20px] text-gray-800 font-semibold tracking-wide">
          {name}
        </h1>
        <div className="mt-2 flex flex-col">
          <span className="font-bold text-[17px] tracking-wider text-[#d42051]">
            Now {price.current.text}
          </span>
          <div className="flex text-[14px] sm:text-[12px] tracking-wide gap-2">
            <span className="text-gray-500">RRP {price.previous.text}</span>
            <span className="text-[#d42051]">(-52%)</span>
          </div>
        </div>
        <div className="mt-4 flex text-[15px] sm:text-[13px] gap-2 items-center">
          <div className="flex gap-2 ">
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>
            <BsStarHalf></BsStarHalf>
          </div>
          <span className="text-[15px] sm:text-[15px] text-gray-600">4.7</span>
          <span className="text-gray-500 text-[15px] sm:text-[15px]">(3)</span>
        </div>
        <div className="flex flex-col mt-4  ">
          <span className="font-bold tracking-widest text-gray-800 text-[10px] sm:text-[12px]">
            SIZE:
          </span>
          <select className="w-full px-2 outline-none text-[12px] sm:text-[14px] border-[1px] border-gray-400 tracking-wide py-[10px] mt-2">
            {variants.map((size) => {
              return size.isInStock ? (
                <option
                  value={size.brandSize.replaceAll(" ", " - ")}
                  className="flex tracking-widest py-4"
                >
                  {size.brandSize.replaceAll(" ", " - ")}
                </option>
              ) : (
                <option value={size.brandSize} className="py-4 flex " disabled>
                  {size.brandSize} - Out of stock
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <div className="flex mt-4 items-center gap-4 ">
            <button className="uppercase bg-[#0a8950] w-full font-bold bg-black text-[10px] sm:text-[14px] tracking-widest text-white  py-2">
              add to bag
            </button>
            <AiOutlineHeart className="cursor-pointer" size={25} />
          </div>
          <div className="flex flex-col p-4 border-[1px] border-gray-200 gap-4 mt-5 ">
            <div className="flex gap-3 tracking-wide text-gray-600">
              <MdOutlineLocalShipping size={20} />
              <span className="text-[10px] sm:text-[13px]">Free Delivery</span>
            </div>
            <div className="flex gap-3 text-gray-600">
              <TbTruckReturn size={24} />
              <div className=" gap-2 flex flex-col text-[10px] sm:text-[13px] tracking-wide ">
                <span>Free Returns.</span>
                <span>Ts&Cs apply. More delivery info</span>
              </div>
            </div>
          </div>
          <div className="p-4 border-gray-200 border-x-[1px] border-b-[1px]">
            <span className="text-[8px] sm:text-[10px] underline text-gray-500 tracking-wider">
              This product has shipping restrictions.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
