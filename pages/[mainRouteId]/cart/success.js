import React, { useEffect } from "react";
import { selectCartItems } from "../../../redux/features/cart/cart.slice";
import { useAppSelector } from "../../../redux/hooks";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetchGetJSON } from "../../../utils/api-helpers";
import { useMutation } from "@apollo/client";
import { BsCheck2Circle } from "react-icons/bs";
import {
  CHECKOUT_SUCCESS,
  GET_CART_ITEMS,
  GET_LIKED_PRODUCTS,
} from "../../../utils/graphQl.utils";
import { useAuth } from "../../../context/authUserContext";

const Payment_Success = () => {
  const router = useRouter();

  const cartItems = useAppSelector(selectCartItems);

  const { authUser } = useAuth();

  const { session_id, mainRouteId } = router.query;

  const url = session_id && `/api/stripe/${session_id}`;

  const { data, error } = useSWR(url, fetchGetJSON);

  const cartItems_id = cartItems?.map((item, index) => item.productId);

  const [checkoutSuccess] = useMutation(CHECKOUT_SUCCESS, {
    refetchQueries: [
      { query: GET_LIKED_PRODUCTS },
      { query: GET_CART_ITEMS, variables: { userId: authUser?.id } },
    ],
  });

  const handleCheckout = async () => {
    const input = {
      value: {
        userId: authUser.id,
        items_id: cartItems_id,
      },
    };

    await checkoutSuccess({ variables: { input: input.value } });
  };

  useEffect(() => {
    if (
      data?.payment_intent?.status == "succeeded" &&
      data?.status == "complete" &&
      cartItems_id.length > 0 &&
      authUser
    ) {
      handleCheckout();
    }
  }, [data, authUser]);

  //Reset customer cart and saved items after payment success

  return (
    <div className="h-screen sm:h-[80vh] w-screen flex justify-center">
      <div className="flex rounded-2xl mt-[30%] sm:mt-[10%] bg-gray-100 w-[90%] sm:w-[60%] h-[50%] justify-center flex-col items-center">
        <span className="text-[5rem] text-green-500">
          <BsCheck2Circle></BsCheck2Circle>
        </span>
        <span className="text-[2rem] text-gray-400">
          {data?.payment_intent?.status}
        </span>
        <div className="border-b-[1px] border-gray-200 py-2 h-2 w-[10%]"></div>
        <button
          onClick={() => router.push(`/${mainRouteId}`)}
          className="rounded-full py-[10px] px-[15px] mt-4 bg-black text-white"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Payment_Success;
