import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "../../pages/indentity/register";

const Display = ({ switchState }) => {
  return (
    <div
      className={`absolute w-[50%] mx-[5%] h-[90%] ${
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
        <img src="/images/register_1.jpg" layout="fill" loading="lazy" />
      </motion.div>
      <div className="flex justify-center ">
        <TypingText switchState={switchState} title="Shop till you drop" />
      </div>
    </div>
  );
};

export default Display;
