import dynamic from "next/dynamic";
import React from "react";
import Cart from "../../../components/cart";
import { useAuth } from "../../../context/authUserContext";

// const Cart = dynamic(() => import("../../../components/cart"), { ssr: false });

const index = () => {
  const { authUser } = useAuth();

  return (
    <div className="w-screen bg-gray-200 flex justify-center ">
      <Cart></Cart>
    </div>
  );
};

export default index;
