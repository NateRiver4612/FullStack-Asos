import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Select from "react-select";
import Image from "next/image";

const CartCheckout = () => {
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

  return (
    <div className="w-[40%] text-gray-800 h-fit bg-gray-100 p-5">
      <div className="font-bold tracking-widest w-full text-lg py-4 border-b-2 border-gray-300">
        TOTAL
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <div className=" flex justify-between tracking-widest">
          <span className="font-bold">Sub-total</span>
          <span>$278.16</span>
        </div>
        <div className=" flex justify-between tracking-widest">
          <span className="font-bold">Delivery</span>
          <span className="text-gray-400">
            <IoMdInformationCircleOutline size={20} />
          </span>
        </div>
        <Select
          className="outline-none;"
          styles={colourStyles}
          options={options}
        />
        <button className="w-full rounded-[2px] tracking-widest text-sm uppercase bg-green-600 font-bold py-3 text-gray-100">
          checkout
        </button>
        <div className="flex flex-col gap-1 mt-2">
          <span className="uppercase font-semibold tracking-widest text-[13px]">
            we accept:
          </span>
          <div>
            <ul className="flex w-full gap-2 items-center ">
              {listPaymentIcon.map((icon) => {
                return (
                  <li key={icon}>
                    <Image width={32} height={20} src={`/images/${icon}.png`} />
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
  );
};

export default CartCheckout;
