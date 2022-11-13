import React from "react";
import Image from "next/image";

const GridCircleImageLarge = ({ categoryItems }) => {
  return (
    <ul className={`grid w-[20vw] grid-cols-2 gap-1 pt-4`}>
      {categoryItems.map((item) => {
        return (
          <div
            key={item.id}
            className="relative text-[13x] group justify-center flex flex-col cursor-pointer py-3 items-center gap-4 capitalize  text-gray-500 hover:font-bold 
            hover:[&>div]:border-gray-500"
          >
            <div className="border-[3px] border-gray-200 rounded-full p-[3px] ">
              <img
                src={item.content.webLargeImageUrl}
                width={80}
                height={80}
                alt="picture"
                className="rounded-full"
              />
            </div>

            <span className="">{item.content.title}</span>
          </div>
        );
      })}
    </ul>
  );
};

export default GridCircleImageLarge;
