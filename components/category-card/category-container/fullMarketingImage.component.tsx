import React from "react";
import Image from "next/image";
import { Fragment } from "react";

const FullMarketingImage = ({ categoryItems }) => {
  return (
    <ul className={`grid grid-cols-${categoryItems.length} w-full mt-4 gap-3`}>
      {categoryItems.map((item) => {
        return (
          <li className="text-[13x] border-[2px] border-gray-300 hover:border-gray-500 px-[3px] group flex flex-col items-center  cursor-pointer hover:font-bold py-[3px] capitalize ">
            {item.content.webLargeImageUrl && (
              <Image
                src={item.content.webLargeImageUrl}
                alt="picture"
                height={520}
                width={420}
              />
            )}

            <span className="absolute text-back uppercase mt-[23%] font-bold text-[18px]">
              {item.content.title}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default FullMarketingImage;
