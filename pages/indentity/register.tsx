import React, { useState } from "react";

const register = () => {
  const [switchState, setSwitchState] = useState(false);

  return (
    <div className="fixed flex justify-center items-center top-0 bottom-0 w-screen h-screen bg-white z-50 bg-gray-300">
      <div className="w-[70%] h-[80%] rounded-2xl bg-blue-500">
        <div className="p-[3%] flex w-full h-full relative">
          <div
            className={`w-[40%] ${
              switchState ? "bg-black -left-0" : "left-[50%] bg-gray-200"
            } transition-all duration-1000 mx-[5%] absolute h-[90%]  flex justify-center items-center `}
          >
            <button
              onClick={() => setSwitchState(!switchState)}
              className="p-4 bg-gray-400 rounded-lg h-fit"
            >
              Set
            </button>
          </div>
          <div
            className={`absolute w-[50%] mx-[5%] h-[90%] ${
              switchState ? "-right-0" : "right-[40%]"
            } bg-red-500 transition-all duration-1000 `}
          >
            <button
              onClick={() => setSwitchState(!switchState)}
              className="p-4 bg-gray-400 rounded-lg h-fit"
            >
              Set
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
