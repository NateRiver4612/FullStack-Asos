import React from "react";

const HalfMarketingImage = ({ categoryItems }) => {
  return (
    <ul className={`flex flex-col pt-4`}>
      {categoryItems.map((item) => {
        return (
          <li className="text-[13x] group flex justify-center cursor-pointer  hover:font-bold py-[6px] capitalize w-full  text-gray-500">
            <img
              src={item.content.webLargeImageUrl}
              width={300}
              height={50}
              alt="picture"
              className="border-gray-300 border-[1px]"
            />

            <span className="absolute font-bold uppercase text-[14px] pt-[8%] text-gray-700">
              {item.content.title}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default HalfMarketingImage;
