import React, { useRef, useState } from "react";
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
      setLoading(false);
      clearState();
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
      className={` w-[80%] sm:w-[50%] ${
        switchState ? " -left-0" : "left-[50%] "
      }  transition-all duration-1000 mx-[10%] pt-10 absolute h-[90%] flex flex-col`}
    >
      <Link href="/men">
        <div className="cursor-pointer w-fit flex h-fit items-center gap-2">
          <Image src="/dynamic_icon.png" height={22} width={25} />
          <span className="font-extrabold text-[15px] tracking-wide">Asos</span>
        </div>
      </Link>

      <div className="flex flex-col pt-8 ">
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
          } flex-col w-[95%] sm:w-[60%] mt-4`}
        >
          <StyledTextField
            id="standard-basic"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
          />
        </div>
        <div className="flex flex-col w-[95%] sm:w-[60%] mt-4 gap-4">
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
            <button
              onClick={handleGoogleSignIn}
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block bg-red-600 rounded-full p-2 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
                className="w-4 h-4 text-white "
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                />
              </svg>
            </button>
            <button
              onClick={handleGoogleSignIn}
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block bg-blue-600 rounded-full p-2 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
            </button>
          </div>
        </div>
        <span className="text-[10px] mt-2 text-gray-400 tracking-wide w-[90%] sm:w-[60%] ">
          By signing up, i agree to the{" "}
          <span className="underline cursor-pointer">Terms of Service</span> and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;
