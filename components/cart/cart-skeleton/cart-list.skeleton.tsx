import React from "react";
import CartItem_Skeleton from "./cart-item.skeleton";

const CartList_Skeleton = () => {
  return (
    <div className="bg-gray-100 flex flex-col gap-3 h-[55vh] overflow-y-auto p-6 ">
      <CartItem_Skeleton></CartItem_Skeleton>
      <CartItem_Skeleton></CartItem_Skeleton>
    </div>
  );
};

export default CartList_Skeleton;
