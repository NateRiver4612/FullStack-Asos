import React, { useState } from "react";
import ListItem_Skeleton from "./list-item.skeleton";
import SidebarList_Skeleton from "./sidebar-list.skeleton";

const section_0 = [""];

const section_1 = ["", "", ""];

const section_2 = ["", "", "", "", ""];

const section_3 = ["", "", "", ""];

const AccountSidebar_Skeleton = ({}) => {
  return (
    <div className="w-screen relative sm:w-[35%] flex flex-col gap-2">
      <div className="sm:hidden absolute bg-white w-full h-32"></div>
      <div className="h-[15%] mt-20 sm:mt-0 bg-white flex gap-2 pb-4 flex-col justify-center">
        <div className="flex z-10 mt-4 justify-center ">
          <div className="w-[80px] h-[80px] lg:w-[90px] lg:h-[90px] rounded-full bg-gray-200"></div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-[85%] h-4 bg-gray-200"></div>
        </div>
      </div>

      <SidebarList_Skeleton section={section_0}></SidebarList_Skeleton>

      <SidebarList_Skeleton section={section_1}></SidebarList_Skeleton>

      <SidebarList_Skeleton section={section_2}></SidebarList_Skeleton>

      <SidebarList_Skeleton section={section_0}></SidebarList_Skeleton>

      <SidebarList_Skeleton section={section_3}></SidebarList_Skeleton>

      <ListItem_Skeleton></ListItem_Skeleton>
    </div>
  );
};

export default AccountSidebar_Skeleton;
