import React from "react";
import Image from "next/image";

const ThirdMarketingImage = ({ categoryItems }) => {
  return (
    <ul className={`flex flex-col  flex-start gap-2 pt-1`}>
      {categoryItems.map((item) => {
        return (
          <li className="text-[13x] border-gray-300 border-[1px] px-[2px] group flex flex-start items-center  cursor-pointer  hover:font-bold py-[2px] capitalize w-full  text-gray-500">
            <Image
              src={item.content.webLargeImageUrl}
              width={300}
              height={120}
              alt="picture"
            />

            <p className="absolute break-all font-bold uppercase text-[14px] pl-4 pr-[8.8%] text-gray-700">
              {item.content.title}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default ThirdMarketingImage;
