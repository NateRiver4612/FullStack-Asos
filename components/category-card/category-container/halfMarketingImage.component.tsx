import React from "react";
import Image from "next/image";

const HalfMarketingImage = ({ categoryItems }) => {
  return (
    <ul className={`flex flex-col gap-2 pt-4`}>
      {categoryItems.map((item) => {
        return (
          <li
            key={item.id}
            className="text-[13x] relative hover:border-gray-500 border-gray-300 border-[1px] group flex justify-center cursor-pointer  hover:font-bold py-[2px] px-[2px] capitalize w-full  text-gray-500"
          >
            <Image
              src={item.content.webLargeImageUrl}
              width={300}
              height={150}
              alt="picture"
            />

            <span className="absolute font-bold uppercase text-[14px] bottom-[15%] text-gray-700">
              {item.content.title}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default HalfMarketingImage;
