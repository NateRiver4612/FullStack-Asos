import React from "react";

const ListItem = ({ handleSelect, selectedItem, icon }) => {
  return (
    <li
      onClick={() => {
        handleSelect("Account overview");
      }}
      className={`flex cursor-pointer items-center ${
        selectedItem == "Account overview"
          ? "text-white bg-[#2d2d2d] font-bold"
          : "text-gray-700 bg-white"
      } px-6 py-[12px] `}
    >
      {icon({ size: 30 })}
      <div className="px-3"></div>
      <span className="text-sm flex items-center w-full border-gray-200">
        Account overview
      </span>
      <span className="h-full bg-white w-[2px]"></span>
    </li>
  );
};

export default ListItem;
