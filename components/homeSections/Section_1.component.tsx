import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Section_1 = ({ data }) => {
  const item = data.children[0];

  return (
    <div className="w-full  h-full flex justify-center pt-[1px] cursor-pointer">
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="-z-10"
      >
        <Image height={595} width={1250} src={item.content.webLargeImageUrl} />
      </motion.div>
    </div>
  );
};

export default Section_1;
