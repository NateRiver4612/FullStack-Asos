import React from "react";

const GridCircleImageLarge = ({ categoryItems }) => {
  return (
    <ul className={`grid w-[20vw] grid-cols-2 gap-2 pt-4`}>
      {categoryItems.map((item) => {
        return (
          <li className="text-[13x] group flex flex-col items-center gap-4  cursor-pointer hover:text-gray-600 hover:font-bold py-[6px] capitalize w-full  text-gray-500">
            <img
              src={item.content.webLargeImageUrl}
              width={100}
              height={100}
              alt="picture"
              className="rounded-full group-hover:border-gray-600 group-hover:border-2"
            />

            <span>{item.content.title}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default GridCircleImageLarge;
