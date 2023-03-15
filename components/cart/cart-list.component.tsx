import React from "react";
import CartItem from "./cart-item.component";

const CartList = ({ cartItems }) => {
  return (
    <div className="bg-gray-100 flex flex-col gap-3 h-[55vh] overflow-y-auto p-6 ">
      {cartItems.map((item, index) => (
        <CartItem key={index + item.productId} cartItem={item}></CartItem>
      ))}
    </div>
  );
};

export default CartList;
