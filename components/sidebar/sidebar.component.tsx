import React, { Fragment, useState } from "react";
import Image from "next/image";
import { MdClear } from "react-icons/md";

const Sidebar = ({ openSidebar }) => {
  const [section, setSection] = useState("women");

  const onSetSectionHandle = (sec: string) => {
    setSection(sec);
  };

  return (
    <div
      className={`lg:hidden z-40 absolute ${
        openSidebar ? "w-[320px]" : "w-0"
      } transition-all overflow-hidden duration-500 h-full bg-gray-100`}
    >
      <ul className="h-[60px] cursor-pointer flex items-center uppercase text-sm text-gray-500 border-b-2 font-bold">
        <li
          value="women"
          onClick={() => onSetSectionHandle("women")}
          className={`px-4 ${
            section == "women" && "text-gray-800 border-gray-800 border-b-2"
          } w-[50%] justify-center flex items-center h-full`}
        >
          women
        </li>
        <div className="w-[1px] h-[50%] border-r-2"></div>
        <li
          value="men"
          onClick={() => onSetSectionHandle("men")}
          className={`px-4 ${
            section == "men" && "text-gray-800 border-gray-800 border-b-2"
          } w-[50%] justify-center flex items-center h-full`}
        >
          men
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
