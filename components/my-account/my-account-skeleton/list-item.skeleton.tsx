import React from "react";

const ListItem_Skeleton = () => {
  return (
    <li className={`flex cursor-pointer items-center  px-6 gap-5 py-[16px] `}>
      <div className="w-[10%] h-5 bg-gray-200"></div>
      <div className="w-full bg-gray-200 h-5 w-full"></div>
    </li>
  );
};

export default ListItem_Skeleton;
