import React from "react";

const CircleImageListLarge = ({ categoryItems }) => {
  return (
    <ul
      className={`grid  ${
        categoryItems.length >= 10 ? "grid-cols-2" : "grid-cols-1"
      } pt-3`}
    >
      {categoryItems.map((item) => {
        return (
          <li className="text-[13x] w-[22vw] flex items-center gap-4 cursor-pointer hover:text-gray-600 hover:font-bold py-[6px] capitalize w-full  text-gray-500">
            <img
              src={item.content.webLargeImageUrl}
              width={40}
              height={40}
              alt="avatar"
              className="rounded-full"
            />

            <span className="border-b-[1px] flex items-center h-full w-[40%] border-gray-200">
              {item.content.title}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default CircleImageListLarge;
