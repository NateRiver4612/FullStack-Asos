import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const TypingText = dynamic(() => import("./typingText.component"), {
  ssr: true,
});

const Display = ({ switchState }) => {
  return (
    <div
      className={`absolute hidden sm:flex flex-col items-center sm:w-[50%] mx-[5%] h-[90%] ${
        switchState ? "-right-0 bg-[#ababab]" : "right-[40%]  bg-[#121212]"
      } z-20 rounded-[30px] transition-all duration-1000 `}
    >
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.21, 1.01],
        }}
      >
        <img src="/images/register_1.jpg" loading="lazy" />
      </motion.div>
      <div className="flex justify-center ">
        <TypingText title="Shop till you drop" switchState={switchState} />
      </div>
      <motion.div
        className="flex md:w-[70%] lg:w-[55%] xl:w-[50%] 2xl:w-[45%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.21, 1.01],
        }}
      >
        <img
          src="/images/register_2.jpg"
          className="object-contain"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default Display;
