import React, { useState } from "react";
import { StyledInput } from "./input.componet";
import Image from "next/image";

const RegisterForm = ({ switchState, setSwitchState }) => {
  return (
    <div
      className={`w-[40%] ${
        switchState ? " -left-0" : "left-[50%] "
      }  transition-all duration-1000 mx-[10%] pt-10 absolute h-[90%] flex flex-col `}
    >
      <div className="flex h-fit items-center gap-2">
        <img src="/dynamic_icon.png" height={25} width={25} />
        <span className="font-extrabold text-[15px] tracking-wide">Asos</span>
      </div>
      <div className="flex flex-col pt-8">
        <div className="flex flex-col">
          <span
            className={`text-[28px] ${
              switchState ? "opacity-100" : "opacity-0"
            } h-0 transition-all duration-700 font-bold tracking-wide`}
          >
            Get started
          </span>
          <span
            className={`text-[28px] ${
              switchState ? "opacity-0" : "opacity-100"
            } transition-all duration-1000 font-bold tracking-wide`}
          >
            Welcome back
          </span>

          <span
            className={`cursor-pointer text-gray-400 transition-all duration-1000 ${
              switchState ? "opacity-100 z-10" : "opacity-0 z-0"
            } text-[12px] tracking-wide h-0`}
          >
            Already have an account?{" "}
            <span
              onClick={() => {
                setSwitchState(!switchState);
              }}
              className=" text-gray-700 font-bold underline"
            >
              Sign In
            </span>
          </span>

          <span
            className={`cursor-pointer text-gray-400 transition-all duration-1000 ${
              switchState ? "opacity-0 z-0" : "opacity-100 z-10"
            } text-[12px] tracking-wide`}
          >
            First time being here?{" "}
            <span
              onClick={() => {
                setSwitchState(!switchState);
              }}
              className=" text-gray-700 font-bold underline"
            >
              Sign Up
            </span>
          </span>
        </div>
        <div
          className={`flex transition-all duration-500 ${
            switchState ? "h-full" : "h-0 opacity-0"
          } flex-col w-[60%] mt-4`}
        >
          <StyledInput label="Name" />
        </div>
        <div className="flex flex-col w-[60%] mt-4 gap-4">
          <StyledInput label="Email" />
          <StyledInput label="Password" />
          <button className="bg-black mt-4 hover:bg-gray-500 text-sm px-4 py-3 text-white font-bold rounded-lg">
            Sign up
          </button>
          <div className="flex self-center w-[80%] gap-2 items-center">
            <span className="h-[1x] w-full border-b-[1px] border-gray-400 "></span>
            <span className="text-gray-400  flex w-fit text-xs">or</span>
            <span className="h-[1x] w-full border-b-[1px] border-gray-400"></span>
          </div>
          <div className="w-full flex gap-3 justify-center">
            <Image src="/images/google_icon.png" height={25} width={25}></Image>
            <Image
              src="/images/facebook_icon.jpg"
              height={25}
              width={45}
            ></Image>
          </div>
        </div>
        <span className="text-[10px] mt-2 text-gray-400 tracking-wide w-[60%] ">
          By signing up, i agree to the{" "}
          <span className="underline">Terms of Service</span> and{" "}
          <span className="underline">Privacy Policy</span>
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;
