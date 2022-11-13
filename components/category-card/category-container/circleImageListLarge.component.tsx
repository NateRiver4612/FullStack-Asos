import React from "react";
import Image from "next/image";

const CircleImageListLarge = ({ categoryItems }) => {
  return (
    <ul
      className={`grid  ${
        categoryItems.length >= 10 ? "grid-cols-2" : "grid-cols-1"
      } pt-3`}
    >
      {categoryItems.map((item) => {
        return (
          <div
            key={item.id}
            className="text-[13x] w-[22vw] flex items-center gap-4 cursor-pointer hover:font-bold py-[6px] 
            capitalize w-full text-gray-500 hover:[&>div]:border-gray-500 group"
          >
            <div className="rounded-full p-[2px] border-2 box-content border-gray-300">
              <img
                src={item.content.webLargeImageUrl}
                className="rounded-full"
                alt="avatar"
                width={40}
                height={40}
              />
            </div>

            <span className="border-b-[1px] flex items-center h-full w-[40%] border-gray-200">
              {item.content.title}
            </span>
          </div>
        );
      })}
    </ul>
  );
};

export default CircleImageListLarge;
