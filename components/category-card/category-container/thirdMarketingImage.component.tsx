import React from "react";

const ThirdMarketingImage = ({ categoryItems }) => {
  return (
    <ul className={`flex flex-col  flex-start pt-4`}>
      {categoryItems.map((item) => {
        return (
          <li className="text-[13x] group flex flex-start items-center  cursor-pointer  hover:font-bold py-[6px] capitalize w-full  text-gray-500">
            <img
              src={item.content.webLargeImageUrl}
              width={300}
              height={120}
              alt="picture"
              className="border-gray-400 border-[1px]"
            />

            <span className="absolute font-bold uppercase text-[14px] pl-4 text-gray-700">
              {item.content.title}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default ThirdMarketingImage;
