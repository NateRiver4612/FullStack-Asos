import React from "react";
import Image from "next/image";

const FullMarketingImage = ({ categoryItems }) => {
  return (
    <ul className={`grid grid-cols-3 gap-3 pt-4`}>
      {categoryItems.map((item) => {
        return (
          <li className="text-[13x] group flex flex-col items-center gap-4  cursor-pointer hover:font-bold py-[6px] capitalize w-full ">
            {item.content.webLargeImageUrl && (
              <Image
                src={item.content.webLargeImageUrl}
                alt="picture"
                height={350}
                width={300}
                className="group-hover:border-gray-600 group-hover:border-2"
              />
            )}

            <span className="absolute text-back uppercase pt-[23%] font-bold text-[18px]">
              {item.content.title}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default FullMarketingImage;
