import React from "react";
import Image from "next/image";

const ThirdMarketingImage = ({ categoryItems }) => {
  return (
    <ul className={`flex flex-col  flex-start gap-2 pt-1`}>
      {categoryItems.map((item) => {
        return (
          <li
            key={item.id}
            className="text-[13x] relative border-gray-200 border-[2px] hover:border-gray-400 p-[2px] group flex flex-start items-center  cursor-pointer  hover:font-bold  capitalize w-full  text-gray-500"
          >
            <Image
              src={item.content.webLargeImageUrl}
              width={300}
              height={120}
              alt="picture"
            />

            <p className="absolute break-normal font-bold uppercase text-[14px] pl-4 w-[70%] text-gray-700">
              {item.content.title}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default ThirdMarketingImage;
