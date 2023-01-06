import React from "react";

const NavigationAdd = ({ section }) => {
  return (
    <div className="hidden bg-black h-[49px] w-full top-[50%] md:flex">
      <div
        className={`w-full h-full ${
          section == "men" ? "bg-[#9cf0e0]" : "bg-[#9d68fe]"
        } transition-all duration-500 font-bold flex flex-col items-center justify-center tracking-widest `}
      >
        <p className="uppercase text-[13px]">25% off all topman</p>
        <p className="capitalize text-[12px]">with code: TOP25</p>
      </div>
      <div
        className={`w-full h-full bg-black ${
          section == "men" ? "text-[#9cf0e0]" : "text-[#9d68fe]"
        } font-bold transition-all duration-700 flex flex-col items-center justify-center tracking-widest `}
      >
        <p className="uppercase text-[13px]">black friday warn-up</p>
        <p className="capitalize text-[12px]">with code: TOP25</p>
      </div>
    </div>
  );
};

export default NavigationAdd;
