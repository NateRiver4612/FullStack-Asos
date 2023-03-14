import React from "react";

const CartSubTotal = ({ priceSum, quantitySum }) => {
  return (
    <div className="bg-gray-100 h-[4rem] flex items-center">
      <div className="flex justify-between  w-full tracking-wider items-center px-6">
        <span className="uppercase font-bold text-md text-gray-600">
          Sub-total
        </span>
        <span className="uppercase font-bold text-md text-gray-800 flex items-center gap-1">
          ${priceSum.toFixed(2)}{" "}
          <span className="text-xs font-light text-gray-400">
            ({quantitySum} items)
          </span>
        </span>
      </div>
    </div>
  );
};

export default CartSubTotal;
