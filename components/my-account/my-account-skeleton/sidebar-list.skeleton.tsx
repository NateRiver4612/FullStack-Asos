import React from "react";
import ListItem_Skeleton from "./list-item.skeleton";

const SidebarList_Skeleton = ({ section }) => {
  return (
    <ul className="flex flex-col bg-white text-gray-700  capitalize">
      {section.map((key, index) => {
        return <ListItem_Skeleton></ListItem_Skeleton>;
      })}
    </ul>
  );
};

export default SidebarList_Skeleton;
