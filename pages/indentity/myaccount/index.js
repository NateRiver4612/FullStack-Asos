import React from "react";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { FiPackage } from "react-icons/fi";
import { TbPackgeImport } from "react-icons/tb";
import Link from "next/link";

const icons = new Map([
  ["My orders", FiPackage],
  ["My returns", TbPackgeImport],
  [
    "ASOS Premier",
    TbPackgeImport,
    // <Image height={30} width={30} src="/images/asos_premier_icon.ong" />,
  ],
]);

const section_1 = ["My orders", "My returns", "ASOS Premier"];

const MyAccount = () => {
  return (
    <div className="h-fit pb-[5%] absolute top-0 px-[20%]  w-screen bg-gray-200 z-30 ">
      <div className="">
        <div className="header py-8 flex justify-between items-center">
          <Image width={96} height={29} src="/icons/asos_icon.svg" />
          <span className="uppercase text-[#2d2d2d] text-[25px] font-bold tracking-wider font-raleway">
            my account
          </span>
          <Image width={80} height={38} src="/images/secured_icon.png" />
        </div>
        <div className="body flex gap-5 ">
          <div className="w-[31%] flex flex-col gap-2">
            <div className="h-[15%] bg-white flex gap-2 flex-col justify-center">
              <div className="flex justify-center ">
                <div className="w-[90px]  h-[90px] tracking-wider text-white font-bold text-[30px] flex items-center justify-center bg-[#2d2d2d] rounded-full">
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

            <Link href="/indentity/myaccount">
              <li
                className={`flex cursor-pointer transition-all duration-1000 items-center ${
                  1 != 1
                    ? "text-gray-700 bg-white"
                    : "text-white bg-[#2d2d2d] font-bold"
                } px-6 py-[12px] `}
              >
                <BiUser size={30} />
                <div className="px-3"></div>
                <span className="text-sm w-full tracking-wider font-raleway">
                  Account overview
                </span>
                <span className="h-full bg-white w-[2px]"></span>
              </li>
            </Link>

            <ul className="flex flex-col bg-white text-gray-700  capitalize">
              {section_1.map((key, index) => {
                const icon = icons.get(key);

                return (
                  <Link href="/">
                    <li
                      key={index}
                      className="flex cursor-pointer px-6 py-[8px] hover:bg-gray-300"
                    >
                      {index == section_1.length - 1 ? (
                        <img
                          loading="lazy"
                          className="w-[25px] h-[25px]"
                          src="/images/asos_premier_icon.png"
                        />
                      ) : (
                        icon({ size: 30 })
                      )}
                      {/* <BiUser size={30} /> */}
                      <div className="px-3"></div>
                      <span
                        className={`text-sm mt-1 pb-2  w-full border-gray-200`}
                      >
                        {key}
                      </span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="w-[68%] relative bg-black">
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
