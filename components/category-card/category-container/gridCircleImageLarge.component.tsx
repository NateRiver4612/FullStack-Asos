import React from "react";
import Image from "next/image";

const GridCircleImageLarge = ({ categoryItems }) => {
  return (
    <ul className={`grid w-[20vw] grid-cols-2 gap-1 pt-4`}>
      {categoryItems.map((item) => {
        return (
          <li className="text-[13x] rounded-full overflow-hidden group flex flex-col items-center gap-4  cursor-pointer hover:text-gray-600 hover:font-bold py-[6px] capitalize w-full  text-gray-500">
            <Image
              src={item.content.webLargeImageUrl}
              width={80}
              height={80}
              alt="picture"
            />

            <span>{item.content.title}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default GridCircleImageLarge;
