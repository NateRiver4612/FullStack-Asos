import React, { useState } from "react";
import { motion } from "framer-motion";
import Spinner from "../../components/spinner/spinner.component";
import dynamic from "next/dynamic";
import { staggerContainer } from "../../motion";

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

const Register = () => {
  const [switchState, setSwitchState] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <div className="fixed flex justify-center items-center top-0 bottom-0 right-0 left-0 w-screen h-screen z-50 bg-gray-400">
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
