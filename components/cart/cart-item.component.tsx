import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/router";
import Select from "react-select";
import { CiCircleRemove } from "react-icons/ci";
import { useAuth } from "../../context/authUserContext";
import { useAppDispatch } from "../../redux/hooks";
import {
  setQuantity,
  removeCartItem,
  selectCartItems,
} from "../../redux/features/cart/cart.slice";
import "react-loading-skeleton/dist/skeleton.css";
import { useMutation } from "@apollo/client";
import {
  GET_CART_ITEMS,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
} from "../../utils/graphQl.utils";

const CartItem = ({ cartItem }) => {
  const { productId, imageUrl, name, quantity, price, colour, link, total } =
    cartItem;

  const router = useRouter();

  const dispatch = useAppDispatch();

  const { authUser } = useAuth();

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

  const [removeFromCart] = useMutation(REMOVE_FROM_CART, {
    refetchQueries: [
      { query: GET_CART_ITEMS, variables: { userId: authUser?.id } },
    ],
  });

  const handleRemoveFromCart = async () => {
    const input = {
      value: {
        productId: productId,
        userId: authUser.id,
      },
    };

    await removeFromCart({ variables: { input: input.value } });

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

  const [updateCartQuantity] = useMutation(UPDATE_CART_QUANTITY, {
    refetchQueries: [
      { query: GET_CART_ITEMS, variables: { userId: authUser?.id } },
    ],
  });

  const handleSetQuantity = async (e: any) => {
    const input = {
      value: {
        productId: productId,
        userId: authUser.id,
        quantity: e.value,
      },
    };
    await updateCartQuantity({ variables: { input: input.value } });
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
    <div className="flex border-b-[1px] gap-4 py-5 border-gray-200">
      <div className="w-[40%] sm:w-[20%] cursor-pointer" onClick={handleSelect}>
        <Image height={140} width={110} src={`https://${imageUrl}`} />
      </div>
      <div className=" w-full sm:w-[80%] flex flex-col gap-1 sm:gap-2">
        <div className="flex justify-between">
          <span
            onClick={handleSelect}
            className="text-gray-600 cursor-pointer text-sm w-full sm:w-[90%]"
          >
            {name}
          </span>
          <span className="transition-all duration-300 text-gray-800">
            <CiCircleRemove
              onClick={handleRemoveFromCart}
              size={25}
            ></CiCircleRemove>
          </span>
        </div>

        <div className="flex items-center gap-2 ">
          <span
            className={`${
              price?.previous.value ? "text-red-700" : "text-gray-600"
            } items-center tracking-wider flex text-sm font-bold`}
          >
            {price?.current.text}
          </span>

          <span className="text-xs font-light items-center tracking-wider flex text-gray-400">
            Total: ${total.toFixed(2)}
          </span>
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
    </div>
  );
};

export default CartItem;
