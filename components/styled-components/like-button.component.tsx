import React from "react";
import { motion } from "framer-motion";
import { CgTrash } from "react-icons/cg";

const LikeButton = ({ handleLike, isWish, isProductLiked }) => {
  return (
    <span
      onClick={handleLike}
      className={`absolute text-black flex opacity-80 text-[20px] sm:text-[24px] transition-all duration-500  bg-white rounded-full p-[6px] mb-[10px] mr-[10px]`}
    >
      <motion.button
        whileTap={{ scale: 0.4 }}
        transition={{ type: "spring", stiffness: 300, damping: 8 }}
      >
        {isWish ? (
          <CgTrash />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isProductLiked ? "true" : "none"}
            stroke-width="1.7"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        )}
      </motion.button>
    </span>
  );
};

export default LikeButton;