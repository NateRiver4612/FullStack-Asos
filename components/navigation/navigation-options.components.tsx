import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import Tooltip from "@mui/material/Tooltip";
import { AiFillCaretUp, AiOutlineHeart } from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { useAuth } from "../../context/authUserContext";
import { useRouter } from "next/router";
import { useAppSelector } from "../../redux/hooks";
import { selectCartItems } from "../../redux/features/cart/cart.slice";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import BagCard from "./bag-card.component";

const ProfileCard = dynamic(() => import("./profile-card.component"), {
  ssr: false,
});

const NavigationOptions = () => {
  const { authUser } = useAuth();

  const [option, setOption] = useState(null);
  const [openCard, setOpenCard] = useState(false);

  const cartItems = useAppSelector(selectCartItems);

  const quantitySum = cartItems.length;

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
        <li
          onMouseEnter={() => {
            setOption("account");
            setOpenCard(true);
          }}
          onMouseLeave={() => {
            setOpenCard(false);
          }}
          className="h-full flex items-center justify-center w-full"
        >
          <BiUser
            onClick={() => {
              authUser
                ? router.push("/identity/myaccount")
                : router.push("/identity/register");
            }}
            size={26}
          />

          {option == "account" && (
            <motion.span
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0, 0.21, 0.2, 1],
              }}
              className="absolute text-[2rem] mt-12 text-gray-100"
            >
              <AiFillCaretUp></AiFillCaretUp>
            </motion.span>
          )}
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
          onMouseEnter={() => {
            setOption("bag");
            setOpenCard(true);
          }}
          onMouseLeave={() => {
            setOpenCard(false);
          }}
          className="relative cursor-pointer h-full flex justify-center items-center"
          onClick={() => handleSelect("cart")}
        >
          <li>
            <RiShoppingBagLine size={26} />
          </li>

          <span className="absolute right-0 top-[22px] ">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-300 "></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
          </span>
          <span className="absolute text-gray-100 font-bold top-[26px] left-[10px] text-[10px]">
            {quantitySum}
          </span>

          {option == "bag" && openCard && (
            <motion.span
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0, 0.21, 0.2, 1],
              }}
              className="absolute text-[2rem] mt-12 text-gray-100"
            >
              <AiFillCaretUp></AiFillCaretUp>
            </motion.span>
          )}
        </div>

        <Tooltip title="texting" arrow>
          <li>
            <AiOutlineMessage size={26} />
          </li>
        </Tooltip>
      </ul>

      <div className="overflow-hidden group h-full">
        <div
          className={`transition-all duration-500  hidden md:block h-[0px] 
          ${openCard && option == "account" && " h-[290px] "} 
          ${openCard && option == "bag" && " h-[340px] "} 
          xl:right-[9.3%] absolute md:right-0 z-40 top-[60px] w-[325px] overflow-hidden bg-gray-100`}
        >
          {option === "account" && (
            <ProfileCard setOpenCard={setOpenCard}></ProfileCard>
          )}

          {option === "bag" && <BagCard setOpenCard={setOpenCard}></BagCard>}
        </div>
      </div>
    </div>
  );
};
export default NavigationOptions;
