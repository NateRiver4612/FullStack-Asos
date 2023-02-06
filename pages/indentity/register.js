import React, { useState } from "react";
import Image from "next/image";
import RegisterForm from "../../components/register/form.component";
import { motion } from "framer-motion";
import { textContainer, textVariant2, staggerContainer } from "../../motion";
import Display from "../../components/register/display.component";

export const TypingText = ({ title, switchState }) => (
  <motion.p
    variants={textContainer}
    className={`text-[30px] font-playfair text-gray-700 tracking-wider font-bold ${
      switchState ? "text-[#121212]" : "text-[#ababab]"
    }`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

const Register = () => {
  const [switchState, setSwitchState] = useState(true);

  return (
    <div className="fixed flex justify-center items-center top-0 bottom-0 w-screen h-screen bg-white z-50 bg-gray-400">
      <div className="w-[70%] h-[90%] rounded-xl bg-gray-100">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="p-[3%] flex w-full h-full relative"
        >
          <RegisterForm
            switchState={switchState}
            setSwitchState={setSwitchState}
          />

          <Display switchState={switchState} setSwitchState={setSwitchState} />
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
