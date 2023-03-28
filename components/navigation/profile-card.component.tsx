import React from "react";
import { BiUser } from "react-icons/bi";
import Link from "next/link";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";
import { TbPackgeImport } from "react-icons/tb";
import { BiMessageSquareDots } from "react-icons/bi";
import { HiLogout } from "react-icons/hi";
import { useAuth } from "../../context/authUserContext";

import { useAppDispatch } from "../../redux/hooks";
import { clearCart } from "../../redux/features/cart/cart.slice";
import { clearWish } from "../../redux/features/wish/wish.slice";

const urls = new Map([
  ["my account", "/identity/myaccount"],
  ["my orders", "/identity/myaccount"],
  ["my returns", "/identity/myaccount"],
  ["return information", "/identity/myaccount"],
  ["contact preferences", "/identity/myaccount"],
]);

const icons = new Map([
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

const ProfileCard = ({ setOpenCard }) => {
  const { authUser, SignOut } = useAuth();
  const dispatch = useAppDispatch();

  const handleSignOut = async () => {
    await SignOut();
    dispatch(clearCart());
    dispatch(clearWish());
  };

  return (
    <div
      onMouseEnter={() => {
        setOpenCard(true);
      }}
      onMouseLeave={() => {
        setOpenCard(false);
      }}
      className="h-full "
    >
      <div className="static">
        {authUser ? (
          <div className="flex justify-center text-gray-600  items-center w-full ">
            <span className=" p-3 h-[50px] text-md font-semibold  text-start w-[78%]">
              <span>Hi {authUser.name}!</span>
            </span>

            <button
              onClick={handleSignOut}
              className="text-xl justify-end flex items-center p-3 h-[50px] w-fit"
            >
              <HiLogout />
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center w-full text-sm font-semibold text-gray-500 ">
            <span className="hover:text-gray-900 hover:border-gray-800 border-b-2 p-3 h-[50px] text-center w-full">
              <Link href="/identity/register">Sign In</Link>
            </span>

            <span className="border-gray-200 border-r-[1px] h-[30px] w-[0px]"></span>
            <span className="hover:text-gray-900 hover:border-gray-800 border-b-2 p-3 h-[50px] text-center w-full">
              <Link href="/identity/register">Join</Link>
            </span>
          </div>
        )}
      </div>
      <ul className="flex flex-col text-gray-600  capitalize">
        {platMain.map((key, index) => {
          const icon = icons.get(key);
          const url = authUser ? urls.get(key) : "/identity/register";

          return (
            <Link key={index} href={url}>
              <li className="flex cursor-pointer item-center px-6 py-[12px] hover:bg-gray-300">
                {icon({ size: 24 })}
                <div className="px-3"></div>
                <span className="text-sm">{key}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
export default ProfileCard;
