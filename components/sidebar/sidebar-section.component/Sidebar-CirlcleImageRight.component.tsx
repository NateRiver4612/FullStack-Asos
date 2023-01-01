import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Sidebar_CircleImageRight = ({
  gender,
  categoryTitle,
  categoryItems,
}) => {
  return (
    <ul className={`grid grid-cols-1 gap-3 mt-3 px-4`}>
      {categoryItems.map((item) => {
        return (
          <li
            className={`text-[15x] p-2 bg-gray-100 relative flex justity-between items-center cursor-pointer tracking-widest hover:font-bold capitalize w-full  text-gray-500`}
          >
            <div className="font-bold flex items-center uppercase h-full w-full text-[15px] pl-4 text-black">
              <p className={`w-full`}>{item.content.title}</p>
              <p className="font-light w-full">{item.content.subTitle}</p>
            </div>

            <a className="">
              <Image
                height={150}
                width={150}
                className="rounded-full"
                src={item.content.webLargeImageUrl}
                alt="picture"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
