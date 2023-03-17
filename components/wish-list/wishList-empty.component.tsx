import { motion } from "framer-motion";
import React, { Fragment } from "react";
import { useAuth } from "../../context/authUserContext";
import { AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/router";

const WishEmpty = () => {
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
            <AiOutlineHeart></AiOutlineHeart>
          </span>
          <span className="font-bold text-xl">Your have no saved items</span>
          <span className="text-center text-[13px]  ">
            Start saving as you shop by selecting the little heart. We'll sync
            your items across all your devices. Easy.
          </span>
          {authUser ? (
            <Fragment>
              <button
                onClick={() => router.push(`/${mainRouteId}`)}
                className="bg-gray-500 uppercase px-[10%] text-gray-200 transition-all duration-300 hover:bg-gray-400 py-3 text-sm font-bold tracking-widest"
              >
                start shopping
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <span className="text-[13px] font-bold">
                Sign in to sync your Saved Items.
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

export default WishEmpty;
