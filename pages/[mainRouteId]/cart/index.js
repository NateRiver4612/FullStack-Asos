import React from "react";
import Cart from "../../../components/cart";
import CartCheckout from "../../../components/cart/cart-checkout.component";

const index = () => {
  return (
    <div className="w-screen bg-gray-200 flex justify-center ">
      <div className="flex pb-12 px-2 w-full lg:w-[90%] xl:w-[75%] 2xl:w-[65%] mt-2 gap-2 ">
        <Cart></Cart>
        <CartCheckout></CartCheckout>
      </div>
    </div>
  );
};

export default index;
