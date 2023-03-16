import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/router";
import Select from "react-select";
import { CiCircleRemove } from "react-icons/ci";
import { useAuth } from "../../context/authUserContext";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setQuantity,
  removeCartItem,
  selectCartItems,
} from "../../redux/features/cart/cart.slice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CartItem = ({ cartItem }) => {
  const { productId, imageUrl, name, quantity, price, colour, link } = cartItem;

  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleSelect = () => {
    const query = {
      cid: router.query.cid,
      item: name,
      pid: productId.toString(),
    };

    return router.push({
      pathname: link,
      query: query,
    });
  };

  const handleRemoveFromCart = () => {
    dispatch(removeCartItem({ productId: productId }));
  };

  const options = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
  ];

  const qtyIndex = options.findIndex((item) => item.value == quantity);

  const handleSetQuantity = (e: any) => {
    dispatch(setQuantity({ productId: productId, quantity: e.value }));
  };

  const colourStyles = {
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? "#e3e4eb"
          : isFocused
          ? "#e5e7eb"
          : undefined,
        // color: isDisabled ? "#ccc" : "#757280",
        color: "#757280",
      };
    },
  };

  return (
    <div className="flex border-b-[1px] gap-5 py-5 border-gray-200">
      <div className="w-[30%] sm:w-[20%] " onClick={handleSelect}>
        <Image height={140} width={110} src={`https://${imageUrl}`} />
      </div>
      <div className=" w-[80%] flex flex-col gap-1 sm:gap-2">
        <span
          onClick={handleSelect}
          className="text-gray-600 text-sm w-full sm:w-[90%]"
        >
          {name}
        </span>
        <div className="flex items-center gap-2 ">
          <span
            className={`${
              price?.previous.value ? "text-red-700" : "text-gray-600"
            } items-center tracking-wider flex text-sm font-bold`}
          >
            {price?.current.text}
          </span>

          {price?.previous.value && (
            <span className="text-[10px] items-center tracking-wider flex line-through text-gray-500">
              {price.previous.text}
            </span>
          )}
        </div>
        <div className="flex gap-2  items-center text-gray-400 text-sm">
          <span>{colour}</span>
          <div className="border-r-[1px] h-[60%] border-gray-200"></div>
          <span>Qty:</span>
          <Select
            onChange={handleSetQuantity}
            className="outline-none;"
            styles={colourStyles}
            options={options}
            defaultValue={options[qtyIndex]}
          />
        </div>
        <div className="flex items-center gap-2 mt-4 text-sm w-fit text-gray-600 px-2 py-1 rounded-[1px] border-2 border-gray-300">
          <AiOutlineHeart size={20}></AiOutlineHeart>
          <span>Save for later</span>
        </div>
      </div>
      <div className="w-fit">
        <span className="transition-all duration-300 text-gray-800">
          <CiCircleRemove
            onClick={handleRemoveFromCart}
            size={25}
          ></CiCircleRemove>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
