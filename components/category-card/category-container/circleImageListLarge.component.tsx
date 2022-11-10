import React from "react";

const CircleImageListLarge = ({ categoryItems }) => {
  return (
    <ul
      className={`grid w-[10vw] ${
        categoryItems.length >= 10 ? "grid-cols-2" : "grid-cols-1"
      } pt-3`}
    >
      {categoryItems.map((item) => {
        return (
          <li className="text-[13x] flex items-center gap-4 cursor-pointer hover:text-gray-600 hover:font-bold py-[6px] capitalize w-full  text-gray-500">
            <img
              src={item.content.webLargeImageUrl}
              width={40}
              height={40}
              alt="avatar"
              className="rounded-full"
            />

            {item.content.title}
          </li>
        );
      })}
    </ul>
  );
};

export default CircleImageListLarge;
