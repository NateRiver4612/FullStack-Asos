import React, { useState } from "react";
import Image from "next/image";
import {
  BiUser,
  BiMessageDetail,
  BiHelpCircle,
  BiLogOut,
} from "react-icons/bi";
import { FiPackage } from "react-icons/fi";
import { TbPackgeImport } from "react-icons/tb";
import Link from "next/link";
import { MdPayment } from "react-icons/md";
import { FaAddressCard, FaHome } from "react-icons/fa";
import { BsPeopleFill, BsFillGiftFill } from "react-icons/bs";
import { HiGiftTop } from "react-icons/hi2";
import { AiOutlineSwitcher } from "react-icons/ai";
import { RiLogoutBoxLine } from "react-icons/ri";

const icons = new Map([
  ["My orders", FiPackage],
  ["My returns", TbPackgeImport],
  ["ASOS Premier"],
  ["My details", FaAddressCard],
  ["Address book", FaHome],
  ["Payment methods", MdPayment],
  ["Contact preferences", BiMessageDetail],
  ["Social accounts", BsPeopleFill],
  ["Need help?", BiHelpCircle],
  ["Where's my order?", AiOutlineSwitcher],
  ["How do i make a return?", AiOutlineSwitcher],
  ["I need a new returns note", AiOutlineSwitcher],
]);

const section_1 = ["My orders", "My returns", "ASOS Premier"];

const section_2 = [
  "My details",
  "Address book",
  "Payment methods",
  "Contact preferences",
  "Social accounts",
];

const section_3 = [
  "Need help?",
  "Where's my order?",
  "How do i make a return?",
  "I need a new returns note",
];

const MyAccount = () => {
  const [selectedItem, setSelectedItem] = useState("Account overview");

  const handleSelect = (select) => {
    return setSelectedItem(select);
  };

  return (
    <div className="h-screen lg:h-fit pb-[5%] absolute top-0 lg:px-[15%] 2xl:px-[20%]  w-screen bg-gray-200 z-30 ">
      <div className="">
        <div className="header px-5 lg:px-0 py-8 flex justify-between items-center">
          <Image width={96} height={29} src="/icons/asos_icon.svg" />
          <span className="uppercase text-[#2d2d2d] text-[25px] font-bold tracking-wider font-raleway">
            my account
          </span>
          <Image width={80} height={38} src="/images/secured_icon.png" />
        </div>
        <div className="body pb-10 px-2 lg:px-0 flex bg-gray-200  gap-5 ">
          <div className="w-[31%] flex flex-col gap-2">
            <div className="h-[15%] bg-white flex gap-2 flex-col justify-center">
              <div className="flex justify-center ">
                <div className=" w-[60px] h-[60px] md:w-[90px]  md:h-[90px] tracking-wider text-white font-bold lg:text-[25px] xl:text-[30px] flex items-center justify-center bg-[#2d2d2d] rounded-full">
                  NR
                </div>
              </div>
              <div className=" text-center">
                <span className="font-thin text-gray-600">Hi, </span>
                <span className="font-semibold text-lg text-[#2d2d2d] tracking-wider">
                  Nate River
                </span>
              </div>
            </div>

            <li
              onClick={() => {
                handleSelect("Account overview");
              }}
              className={`flex cursor-pointer items-center ${
                selectedItem == "Account overview"
                  ? "text-white bg-[#2d2d2d] font-bold"
                  : "text-gray-700 bg-white"
              } px-6 py-[12px] `}
            >
              <BiUser size={30} />
              <div className="px-3"></div>
              <span className="text-sm flex items-center w-full border-gray-200">
                Account overview
              </span>
              <span className="h-full bg-white w-[2px]"></span>
            </li>

            <ul className="flex flex-col bg-white text-gray-700  capitalize">
              {section_1.map((key, index) => {
                const icon = icons.get(key);

                return (
                  <li
                    onClick={() => {
                      handleSelect(key);
                    }}
                    key={key}
                    className={`flex cursor-pointer items-center ${
                      selectedItem == key
                        ? "text-white bg-[#2d2d2d] font-bold"
                        : "text-gray-700 bg-white"
                    } px-6 py-[12px] `}
                  >
                    {index == section_1.length - 1 ? (
                      <img
                        loading="lazy"
                        className="w-[24px] h-[24px]"
                        src="/images/asos_premier_icon.png"
                      />
                    ) : (
                      icon({ size: 30 })
                    )}

                    <div className="px-3"></div>
                    <span
                      className={`text-sm flex items-center w-full border-gray-200`}
                    >
                      {key}
                    </span>
                    <span className="h-full bg-white w-[2px]"></span>
                  </li>
                );
              })}
            </ul>

            <ul className="flex flex-col bg-white text-gray-700  capitalize">
              {section_2.map((key, index) => {
                const icon = icons.get(key);

                return (
                  <li
                    key={key}
                    onClick={() => {
                      handleSelect(key);
                    }}
                    className={`flex cursor-pointer items-center ${
                      selectedItem == key
                        ? "text-white bg-[#2d2d2d] font-bold"
                        : "text-gray-700 bg-white"
                    } px-6 py-[12px] `}
                  >
                    {icon({ size: 30 })}
                    <div className="px-3"></div>
                    <span
                      className={`text-sm flex items-center  w-full border-gray-200`}
                    >
                      {key}
                    </span>
                    <span className="h-full bg-white w-[2px]"></span>
                  </li>
                );
              })}
            </ul>

            <li
              onClick={() => {
                handleSelect("Gift cards & e-gift cards");
              }}
              className={`flex cursor-pointer items-center ${
                selectedItem == "Gift cards & e-gift cards"
                  ? "text-white bg-[#2d2d2d] font-bold"
                  : "text-gray-700 bg-white"
              } px-6 py-[12px] `}
            >
              <HiGiftTop size={30} />
              <div className="px-3"></div>
              <span className="text-sm flex items-center w-full border-gray-200">
                Gift cards & e-gift cards
              </span>
              <span className="h-full bg-white w-[2px]"></span>
            </li>

            <ul className="flex flex-col bg-white text-gray-700  capitalize">
              {section_3.map((key, index) => {
                const icon = icons.get(key);

                return (
                  <li
                    key={key}
                    onClick={() => {
                      handleSelect(key);
                    }}
                    className={`flex cursor-pointer items-center ${
                      selectedItem == key
                        ? "text-white bg-[#2d2d2d] font-bold"
                        : "text-gray-700 bg-white"
                    } px-6 py-[12px] `}
                  >
                    {icon({ size: 30 })}
                    <div className="px-3"></div>
                    <span
                      className={`text-sm flex items-center  w-full border-gray-200`}
                    >
                      {key}
                    </span>
                    <span className="h-full bg-white w-[2px]"></span>
                  </li>
                );
              })}
            </ul>

            <li
              className={`flex cursor-pointer items-center text-gray-700 bg-white px-6 py-[12px] `}
            >
              <BiLogOut size={30} />
              <div className="px-3"></div>
              <span className="text-sm flex items-center w-full border-gray-200">
                Sign out
              </span>
              <span className="h-full bg-white w-[2px]"></span>
            </li>
          </div>

          <div className="w-[68%] relative ">
            <div className="uppercase left-8 top-16 tracking-widest font-bold text-white absolute flex gap-1 flex-col">
              <span className="p-3 w-fit text-2xl bg-[#2d2d2d]">
                welcome to
              </span>
              <span className="p-3  w-fit  text-2xl bg-[#2d2d2d]">
                your account
              </span>
            </div>
            <img loading="lazy" src="/icons/account_QR.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
