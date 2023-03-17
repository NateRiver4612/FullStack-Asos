import { motion } from "framer-motion";
import React, { Fragment } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { useAuth } from "../../context/authUserContext";
import { useRouter } from "next/router";

const CartEmpty = () => {
  const { authUser } = useAuth();

  const router = useRouter();

  const { mainRouteId } = router.query;

  return (
    <div className="h-screen sm:h-[67vh] flex pt-20 justify-center w-screen">
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex w-full sm:w-[30vw] tracking-widest items-center flex-col gap-4">
          <span className="text-[30px]">
            <RiShoppingBagLine></RiShoppingBagLine>
          </span>
          <span className="font-bold text-xl">Your bag is empty</span>
          <span className="text-center text-[13px]  ">
            Items remain in your bag for 60 minutes, and then they’re moved to
            your Saved Items.
          </span>
          {authUser ? (
            <Fragment>
              <button
                onClick={() => router.push(`/${mainRouteId}/wish-list`)}
                className="bg-gray-500 uppercase px-[10%] text-gray-200 transition-all duration-300 hover:bg-gray-400 py-3 text-sm font-bold tracking-widest"
              >
                View saved items
              </button>
              <span className="underline text-xs">Continue Shopping</span>
            </Fragment>
          ) : (
            <Fragment>
              <span className="text-[13px] font-bold">
                Sign in to see your bag
              </span>
              <button
                onClick={() => router.push("/identity/register")}
                className="bg-gray-500 w-[50%] text-gray-200 transition-all duration-300 hover:bg-gray-400 py-3 text-sm font-bold tracking-widest"
              >
                SIGN IN
              </button>
            </Fragment>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CartEmpty;
