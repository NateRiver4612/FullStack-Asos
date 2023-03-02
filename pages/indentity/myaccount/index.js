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
import { AiOutlineSwitcher } from "react-icons/ai";
import dynamic from "next/dynamic";

const AccountSidebar = dynamic(
  () => import("../../../components/my-account/account-sidebar.component"),
  { ssr: false }
);

const MyAccount = () => {
  return (
    <div className="h-screen lg:h-fit pb-[5%] absolute top-0 lg:px-[15%] 2xl:px-[20%]  w-screen bg-gray-200 z-30 ">
      <div className="">
        <div className="header px-5 sm:px-0 py-2 sm:py-8 flex justify-between items-center">
          <Link href="/">
            <span className="relative cursor-pointer w-[50px] h-[15px]  sm:w-[96px] sm:h-[29px]">
              <Image layout="fill" src="/icons/asos_icon.svg" />
            </span>
          </Link>

          <span className="uppercase text-[#2d2d2d] text-[15px] sm:text-[25px] font-bold tracking-wider font-raleway">
            my account
          </span>
          <span className="relative w-[50px] h-[25px] sm:w-[80px] sm:h-[38px]">
            <Image layout="fill" src="/images/secured_icon.png" />
          </span>
        </div>
        <div className="body pb-10 px-2 lg:px-0 flex bg-gray-200  gap-5 ">
          <AccountSidebar />

          <div className="hidden sm:block w-[68%] relative ">
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
