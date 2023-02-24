import React from "react";

const Bottom_Section = () => {
  return (
    <div className="bg-gray-300 bottom-0  w-full flex justify-center">
      <div className="text-gray-500 text-[11px] w-full lg:w-[88.5%] flex p-4 justify-between">
        <span>@ 2022 ASOS</span>
        <div className="flex gap-3">
          <span className="border-r-[1px] border-gray-400 pr-3">
            Privacy & Cookies
          </span>
          <span className="border-r-[1px] border-gray-400 pr-3">Ts&Cs</span>
          <span>Accessibility</span>
        </div>
      </div>
    </div>
  );
};

export default Bottom_Section;
