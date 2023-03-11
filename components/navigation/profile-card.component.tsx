import React from "react";
import { BiUser } from "react-icons/bi";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineMessage, AiOutlineQuestionCircle } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";
import { TbPackgeImport } from "react-icons/tb";
import { BiMessageSquareDots } from "react-icons/bi";
import { HiLogout } from "react-icons/hi";
import { useAuth } from "../../context/authUserContext";
import { useRouter } from "next/router";
import { GoPrimitiveDot } from "react-icons/go";
import { useAppSelector } from "../../redux/hooks";
import { selectCartItems } from "../../redux/features/cart/cart.slice";

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

const ProfileCard = () => {
  const { authUser, SignOut } = useAuth();

  const cartItems = useAppSelector((state) =>
    selectCartItems(state, authUser?.id)
  );

  const quantitySum = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  const handleSignOut = async () => {
    await SignOut();
  };

  const router = useRouter();

  const { mainRouteId } = router.query;

  const handleSelect = (path) => {
    if (!authUser) {
      router.push("/identity/register");
    } else {
      router.push(`/${mainRouteId}/${path}`);
    }
  };

  return (
    <div className="h-full mx-2 md:mr-6 lg:mr-10 xl:mr-36 ">
      <ul className="flex h-full items-center gap-6 md:gap-4 xl:gap-6 ">
        <li>
          <div className="overflow-hidden group">
            <BiUser
              onClick={() => {
                authUser
                  ? router.push("/identity/myaccount")
                  : router.push("/identity/register");
              }}
              size={26}
            />

            <div
              className={`transition-all hidden md:block
                        max-h-0 group-hover:max-h-[380px] duration-500 xl:right-[9.3%] absolute md:right-0 z-20 top-[60px] w-[325px] overflow-hidden bg-gray-100`}
            >
              <div className="h-full">
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
            </div>
          </div>
        </li>

        <Tooltip title="saved items" arrow>
          <li className="cursor-pointer ">
            <AiOutlineHeart
              onClick={() => handleSelect("wish-list")}
              size={26}
            />
          </li>
        </Tooltip>

        <div
          className="relative cursor-pointer"
          onClick={() => handleSelect("cart")}
        >
          <Tooltip title="bag" arrow>
            <li>
              <RiShoppingBagLine size={26} />
            </li>
          </Tooltip>
          <span className="absolute right-0 top-[5px] ">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-300 "></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
          </span>
          <span className="absolute text-gray-100 font-bold top-[9px] left-[10px] text-[10px]">
            {quantitySum}
          </span>
        </div>

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
