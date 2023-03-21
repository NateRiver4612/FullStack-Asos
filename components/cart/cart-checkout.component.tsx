import React, { useEffect, useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Select from "react-select";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";
import { useAuth } from "../../context/authUserContext";
import { useAppSelector } from "../../redux/hooks";
import { selectCartItems } from "../../redux/features/cart/cart.slice";
import { useShoppingCart } from "use-shopping-cart";

const listPaymentIcon = [
  "visa_icon",
  "payPal_icon",
  "american-express_icon",
  "apple-pay_icon",
  "mastercard_icon",
];

const options = [
  {
    value: 15.79,
    label: "Standart Delivery ($15.79)",
  },
  {
    value: 31.58,
    label: "Standart Delivery ($31.58)",
  },
];

const CartCheckout = ({ subTotal }) => {
  const { authUser } = useAuth();

  const cartItems = useAppSelector(selectCartItems);

  const { redirectToCheckout } = useShoppingCart();

  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? "#e3e4eb"
          : isFocused
          ? "#e5e7eb"
          : undefined,
        color: isDisabled ? "#ccc" : "#757280",
      };
    },
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    const url = "/api/stripe/checkout_sessions";

    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(cartItems || {}),
      });

      const data = await response.json();

      if (data.statusCode === 500) {
        console.error(data.message);
        return;
      }
      console.log(data);
      redirectToCheckout(data.id);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="w-full sm:w-[40%] flex flex-col h-full gap-2">
      <div className=" text-gray-800 h-fit bg-gray-100 p-5">
        <div className="font-bold tracking-widest w-full text-lg py-4 border-b-2 border-gray-300">
          TOTAL
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <div className=" flex justify-between tracking-widest">
            <span className="font-bold">Sub-total</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <div className=" flex justify-between tracking-widest">
            <span className="font-bold">Delivery</span>
            <Tooltip title="Read about the delivery options by clicking here">
              <span className="text-gray-400">
                <IoMdInformationCircleOutline size={20} />
              </span>
            </Tooltip>
          </div>
          <Select
            className="outline-none;"
            styles={colourStyles}
            options={options}
            defaultValue={options[0]}
          />
          <button
            onClick={handleCheckout}
            className="w-full  rounded-[2px] tracking-widest text-sm uppercase bg-green-600 font-bold py-3 text-gray-100"
          >
            checkout
          </button>
          <div className="flex flex-col gap-2 mt-[11px]">
            <span className="uppercase font-semibold tracking-widest text-[13px]">
              we accept:
            </span>
            <div>
              <ul className="flex w-full gap-2 items-center ">
                {listPaymentIcon.map((icon) => {
                  return (
                    <li key={icon}>
                      <Image
                        width={32}
                        height={20}
                        src={`/images/${icon}.png`}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <span className="text-[13px] tracking-wider text-gray-500">
              Got a discount code? Add it in the next step.
            </span>
          </div>
        </div>
      </div>
      <div className=" text-gray-800 h-fit bg-gray-100 p-5 flex flex-col gap-2">
        <div className="font-bold uppercase tracking-widest w-full text-sm ">
          email address
        </div>

        <span className="text-gray-400 text-sm">
          {authUser ? authUser.email : "Unknown"}
        </span>
      </div>
      <div className=" text-gray-800 h-fit bg-gray-100 p-5 flex flex-col gap-2">
        <div className="font-bold uppercase tracking-widest w-full text-sm ">
          delivery address
        </div>

        <span className="text-gray-400 text-sm">
          {authUser ? authUser.name : "Unknown"}
        </span>
        <span className="text-gray-400 text-sm">9, 49 Binh Thuan, Q7</span>
        <span className="text-gray-400 text-sm">Ho Chi Minh</span>
        <span className="text-gray-400 text-sm">700000</span>
        <span className="text-gray-400 text-sm">Vietnam</span>
        <span className="text-gray-400 text-sm">0909209967</span>
      </div>
    </div>
  );
};

export default CartCheckout;
