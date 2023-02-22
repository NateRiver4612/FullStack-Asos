import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../../motion";

const TypingText = ({ title, switchState }) => (
  <motion.p
    variants={textContainer}
    className={`text-[25px] font-playfair text-gray-700 tracking-widest font-bold ${
      switchState ? "text-[#121212]" : "text-[#ababab]"
    }`}
  >
    {Array.from(title).map((letter: any, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export default TypingText;
