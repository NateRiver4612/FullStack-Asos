import React from "react";

const CartItem_Skeleton = () => {
  return (
    <div className="flex animate-pulse border-b-[1px] gap-5 pb-5 border-gray-200">
      <div className="w-[110px] rounded-md h-[140px] bg-gray-200"></div>
      <div className=" w-[75%] flex flex-col gap-2">
        <div className="w-full rounded-md h-[20px] bg-gray-200"></div>
        <div className="w-[40%] rounded-md h-[20px] bg-gray-200"></div>
        <div className="w-[0%] rounded-md h-[20px] bg-gray-200"></div>
        <div className="w-[60%] sm:w-[40%] rounded-md h-[20px] bg-gray-200"></div>
        <div className="w-[80%] sm:w-[50%] rounded-md mt-4 h-[35px] bg-gray-200"></div>
      </div>
    </div>
  );
};

export default CartItem_Skeleton;
