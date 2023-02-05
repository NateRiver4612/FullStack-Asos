import React, { useState } from "react";
import Image from "next/image";
import RegisterForm from "../../components/register/form.component";

const Register = () => {
  const [switchState, setSwitchState] = useState(true);

  return (
    <div className="fixed flex justify-center items-center top-0 bottom-0 w-screen h-screen bg-white z-50 bg-gray-400">
      <div className="w-[70%] h-[90%] rounded-xl bg-gray-100">
        <div className="p-[3%] flex w-full h-full relative">
          <RegisterForm
            switchState={switchState}
            setSwitchState={setSwitchState}
          />
          <div
            className={`absolute w-[50%] mx-[5%] h-[90%] ${
              switchState ? "-right-0" : "right-[40%]"
            } bg-gray-300 z-20 rounded-[30px] transition-all duration-1000 `}
          >
            <div>
              <img src="/images/register_1.jpg" layout="fill" loading="lazy" />
            </div>
            <div className="flex justify-center">
              <span className="text-[30px] font-playfair text-gray-700 tracking-wider font-bold">
                Shop till you drop
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
