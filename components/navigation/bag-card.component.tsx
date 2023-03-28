import React from "react";
import { BiUser } from "react-icons/bi";
import Link from "next/link";
import { HiLogout } from "react-icons/hi";
import { useAuth } from "../../context/authUserContext";
import { useAppSelector } from "../../redux/hooks";
import { selectCartItems } from "../../redux/features/cart/cart.slice";
import CartItem from "../cart/cart-item.component";

const BagCard = ({ setOpenCard }) => {
  const { authUser } = useAuth();

  const cartItems = useAppSelector(selectCartItems);

  return (
    <div
      onMouseEnter={() => {
        setOpenCard(true);
      }}
      onMouseLeave={() => {
        setOpenCard(false);
      }}
    >
      <div className="static">
        <div className="flex justify-between text-gray-600 bg-gray-300 items-center w-full ">
          <span className=" p-3 h-[50px] text-md font-semibold  text-start ml-3">
            My Bag
          </span>
          <span className=" p-3 h-[50px] text-sm flex justify-center items-center font-semibold w-[40%]">
            ({cartItems.length} items)
          </span>
        </div>
      </div>
      <div className="bg-white flex flex-col gap-3 h-[24vh] overflow-y-auto px-6 ">
        {cartItems.map((item, index) => (
          <CartItem key={index + item.productId} cartItem={item}></CartItem>
        ))}
      </div>
      <div className="flex py-4 items-center font-semibold px-6 flex  text-gray-600 border-t-2 border-gray-200 bg-white justify-between">
        <span className="text-sm">Sub-Total</span>
        <span className="text-md">$123.00</span>
      </div>
      <div className="w-full py-2 uppercase flex gap-2 justify-between px-6 font-semibold">
        <button className=" bg-white border-2 py-2 px-6 transition-all w-[50%] duration-300 bg-gray-400 hover:bg-gray-600 font-semibold tracking-widest text-gray-300 ">
          view bag
        </button>
        <div className="border-r-[1px] border-gray-200"></div>
        <button className="bg-green-600 text-gray-100 py-2 w-[50%]">
          checkout
        </button>
      </div>
    </div>
  );
};
export default BagCard;
