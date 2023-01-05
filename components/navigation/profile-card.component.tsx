import React from "react";
import { BiUser } from "react-icons/bi";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";
import { TbPackgeImport } from "react-icons/tb";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiMessageSquareDots } from "react-icons/bi";

const map1 = new Map([
  ["my account", BiUser],
  ["my orders", FiPackage],
  ["my returns", TbPackgeImport],
  ["return information", AiOutlineQuestionCircle],
  ["contact preferences", BiMessageSquareDots],
]);

const platMain = [
  "my account",
  "my orders",
  "my returns",
  "return information",
  "contact preferences",
];

const ProfileCard = () => {
  return (
    <div className="h-full mx-2 md:mr-6 lg:mr-10 xl:mr-36 ">
      <ul className="flex h-full items-center gap-6 md:gap-4 xl:gap-6 ">
        <li className="">
          <div className="overflow-hidden cursor-pointer group">
            <BiUser size={26}></BiUser>

            <div
              className={`transition-all 
                        max-h-0 group-hover:max-h-[380px] duration-500 xl:right-36 md:absolute md:right-0 z-20 top-[60px] w-[325px] overflow-hidden bg-gray-100`}
            >
              <div className="h-full">
                <div className="static">
                  <div className="flex justify-center items-center w-full text-sm font-semibold text-gray-500 ">
                    <span className="hover:text-gray-900  hover:border-gray-800 border-b-2 p-3 h-[50px] text-center w-full">
                      <Link href="/">Sign In</Link>
                    </span>

                    <span className="border-gray-200 border-r-[1px] h-[30px] w-[0px]"></span>
                    <span className="hover:text-gray-900 hover:border-gray-800 border-b-2 p-3 h-[50px] text-center w-full">
                      <Link href="/">Join</Link>
                    </span>
                  </div>
                </div>
                <ul className="flex flex-col text-gray-600  capitalize">
                  {platMain.map((key, index) => {
                    const icon = map1.get(key);
                    return (
                      <li
                        key={index}
                        className="flex item-center px-6 py-[12px] hover:bg-gray-300"
                      >
                        {icon({ size: 24 })}
                        <div className="px-3"></div>
                        <span className="text-sm">{key}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </li>
        <Tooltip title="saved items" arrow>
          <li>
            <AiOutlineHeart size={26} />
          </li>
        </Tooltip>

        <Tooltip title="bag" arrow>
          <li>
            <RiShoppingBagLine size={26} />
          </li>
        </Tooltip>

        <Tooltip title="texting" arrow>
          <li>
            <AiOutlineMessage size={26} />
          </li>
        </Tooltip>
      </ul>
    </div>
  );
};
export default ProfileCard;
