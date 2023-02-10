import React, { SetStateAction, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../../context/authUserContext";
import { StyledTextField } from "./input.componet";
import { useRouter } from "next/router";

const RegisterForm = ({ switchState, setSwitchState, setLoading }) => {
  const router = useRouter();

  const {
    SignInWithGooglePopup,
    SignInWithEmailAndPassword,
    SignUpWithEmailAndPassword,
    authUser,
  } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef(null);

  const clearState = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const { user } = await SignInWithGooglePopup();
      if (user) {
        console.log(user);
      }
      clearState();
      setLoading(false);
      router.back();
    } catch (error) {
      alert(error);
    }
  };

  const handleEmailPasswordSignIn = async () => {
    setLoading(true);
    try {
      const { user } = await SignInWithEmailAndPassword(email, password);
      if (user) {
        console.log(user);
      }
      clearState();
      setLoading(false);
      router.back();
    } catch (error) {
      alert(error);
    }
  };

  const handleSignUpWithEmailAndPassword = async () => {
    setLoading(true);
    try {
      await SignUpWithEmailAndPassword(name, email, password);
      console.log(authUser);
      clearState();
      setLoading(false);
      router.back();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div
      className={`w-[40%] ${
        switchState ? " -left-0" : "left-[50%] "
      }  transition-all duration-1000 mx-[10%] pt-10 absolute h-[90%] flex flex-col `}
    >
      <Link href="/men">
        <div className="cursor-pointer w-fit flex h-fit items-center gap-2">
          <Image src="/dynamic_icon.png" height={22} width={25} />
          <span className="font-extrabold text-[15px] tracking-wide">Asos</span>
        </div>
      </Link>

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
          <StyledTextField
            id="standard-basic"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
          />
        </div>
        <div className="flex flex-col w-[60%] mt-4 gap-4">
          <StyledTextField
            id="standard-basic"
            variant="standard"
            value={email}
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
          />
          <StyledTextField
            value={password}
            id="standard-basic"
            variant="standard"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
          />
          <button
            onClick={() =>
              switchState
                ? handleSignUpWithEmailAndPassword()
                : handleEmailPasswordSignIn()
            }
            className={`bg-black mt-4 hover:bg-gray-500 text-sm px-4 py-3 text-white font-bold rounded-lg`}
          >
            {switchState ? "Sign Up" : "Sign In"}
          </button>

          <div className="flex self-center w-[80%] gap-2 items-center">
            <span className="h-[1x] w-full border-b-[1px] border-gray-400 "></span>
            <span className="text-gray-400  flex w-fit text-xs">or</span>
            <span className="h-[1x] w-full border-b-[1px] border-gray-400"></span>
          </div>
          <div className="w-full flex gap-3 cursor-pointer justify-center">
            <Image
              onClick={handleGoogleSignIn}
              src="/images/google_icon.png"
              height={25}
              width={25}
            ></Image>
            <Image
              src="/images/facebook_icon.jpg"
              height={25}
              width={45}
            ></Image>
          </div>
        </div>
        <span className="text-[10px] mt-2 text-gray-400 tracking-wide w-[60%] ">
          By signing up, i agree to the{" "}
          <span className="underline cursor-pointer">Terms of Service</span> and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;
