import React from "react";

const CartSubTotal_Skeleton = () => {
  return (
    <div className="bg-gray-100 h-[4rem] flex items-center">
      <div className="flex justify-between animate-pulse w-full tracking-wider items-center px-6">
        <div className="h-8 rounded-md bg-gray-200 w-[21%]"></div>
        <div className="h-8 rounded-md bg-gray-200 w-[40%]"></div>
      </div>
    </div>
  );
};

export default CartSubTotal_Skeleton;
