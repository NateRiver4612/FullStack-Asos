import React from "react";
import { selectCartItems } from "../../redux/features/cart/cart.slice";
import { useAppSelector } from "../../redux/hooks";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import CartItem from "./cart-item.component";

const CartList = ({ cartItems }) => {
  return (
    <div className="bg-gray-100 flex flex-col gap-3 h-[55vh] overflow-y-auto p-6 ">
      {cartItems.map((item, index) => (
        <CartItem key={index + item.id} cartItem={item}></CartItem>
      ))}
    </div>
  );
};

export default CartList;
