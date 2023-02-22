import React, { useState } from "react";
import { motion } from "framer-motion";
import { textContainer, textVariant2, staggerContainer } from "../../motion";
import Spinner from "../../components/spinner/spinner.component";
import dynamic from "next/dynamic";

const RegisterForm = dynamic(
  () => import("../../components/register/form.component"),
  {
    ssr: false,
  }
);

const Display = dynamic(
  () => import("../../components/register/display.component"),
  {
    ssr: false,
  }
);

export const TypingText = ({ title, switchState }) => (
  <motion.p
    variants={textContainer}
    className={`text-[25px] font-playfair text-gray-700 tracking-widest font-bold ${
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
  const [loading, setLoading] = useState(false);

  return (
    <div className="fixed flex justify-center items-center top-0 bottom-0 w-screen h-screen bg-white z-50 bg-gray-400">
      {loading && <Spinner></Spinner>}
      <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] relative h-fit rounded-xl bg-gray-100 ">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="p-[3%] block w-full h-[37rem] sm:h-[40rem] relative"
        >
          <RegisterForm
            setLoading={setLoading}
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
