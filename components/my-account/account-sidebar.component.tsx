import React, { useState } from "react";
import { FiPackage } from "react-icons/fi";
import { TbPackgeImport } from "react-icons/tb";
import Link from "next/link";
import { MdPayment } from "react-icons/md";
import { FaAddressCard, FaHome } from "react-icons/fa";
import { BsPeopleFill, BsFillGiftFill } from "react-icons/bs";
import { HiGiftTop } from "react-icons/hi2";
import { AiOutlineSwitcher } from "react-icons/ai";
import {
  BiMessageDetail,
  BiHelpCircle,
  BiUser,
  BiLogOut,
} from "react-icons/bi";
import { IconType } from "react-icons/lib";
import ListItem from "./list-item.component";
import SidebarList from "./sidebar-list.component";

const icons: Map<string, IconType> = new Map([
  ["My orders", FiPackage],
  ["My returns", TbPackgeImport],
  ["ASOS Premier", TbPackgeImport],
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

const AccountSidebar = () => {
  const [selectedItem, setSelectedItem] = useState("Account overview");

  const handleSelect = (select: string) => {
    return setSelectedItem(select);
  };

  return (
    <div className="w-screen relative sm:w-[31%] flex flex-col gap-2">
      <div className="sm:hidden absolute ">
        <img
          loading="lazy"
          src="/icons/account_bg.svg"
          className="object-cover w-screen h-32"
        ></img>
      </div>
      <div className="h-[15%] mt-20 sm:mt-0 bg-white flex gap-2 pb-4 flex-col justify-center">
        <div className="flex z-10 justify-center ">
          <div className=" w-[90px] h-[90px]  tracking-wider text-white font-bold text-[30px] flex items-center justify-center bg-[#2d2d2d] rounded-full">
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

      <ListItem
        handleSelect={() => {
          handleSelect("Account overview");
        }}
        selectedItem={selectedItem}
        icon={BiUser}
        label="Account overview"
      ></ListItem>

      <SidebarList
        section={section_1}
        icons={icons}
        handleSelect={handleSelect}
        selectedItem={selectedItem}
      ></SidebarList>

      <SidebarList
        section={section_2}
        icons={icons}
        handleSelect={handleSelect}
        selectedItem={selectedItem}
      ></SidebarList>

      <ListItem
        handleSelect={() => {
          handleSelect("Gift cards & e-gift cards");
        }}
        selectedItem={selectedItem}
        icon={HiGiftTop}
        label="Gift cards & e-gift cards"
      ></ListItem>

      <SidebarList
        section={section_3}
        icons={icons}
        handleSelect={handleSelect}
        selectedItem={selectedItem}
      ></SidebarList>

      <ListItem
        label="Sign Out"
        handleSelect={() => {}}
        selectedItem={selectedItem}
        icon={BiLogOut}
      ></ListItem>
    </div>
  );
};

export default AccountSidebar;
