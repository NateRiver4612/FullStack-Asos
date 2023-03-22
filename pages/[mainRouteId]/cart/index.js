import Cart from "../../../components/cart";
import React, { useState, useEffect } from "react";
import { selectCartItems } from "../../../redux/features/cart/cart.slice";
import { useAuth } from "../../../context/authUserContext";
// import Cart_Skeleton from "../../../components/cart/cart-skeleton";
import { useAppSelector } from "../../../redux/hooks";
// import CartEmpty from "../../../components/cart/cart-empty.component";
import dynamic from "next/dynamic";
import Cart_Provider from "../../../provider/shoppingCart_provider";

const CartEmpty = dynamic(() =>
  import("../../../components/cart/cart-empty.component")
);

const Cart_Skeleton = dynamic(
  () => import("../../../components/cart/cart-skeleton"),
  { ssr: false }
);

const Cart_Page = () => {
  const [rendering, setRendering] = useState(true);

  const { authUser } = useAuth();

  const cartItems = useAppSelector(selectCartItems);

  useEffect(() => {
    setTimeout(() => {
      setRendering(false);
    }, 3000);
  }, []);

  if (!authUser || cartItems.length == 0) {
    return <CartEmpty></CartEmpty>;
  }

  if (rendering)
    return (
      <div className="w-full flex justify-center">
        <Cart_Skeleton></Cart_Skeleton>
      </div>
    );

  return (
    <div className="w-screen bg-gray-200 flex justify-center ">
      <Cart_Provider>
        <Cart></Cart>
      </Cart_Provider>
    </div>
  );
};

export default Cart_Page;
