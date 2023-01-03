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
        console.log(categoryTitle);
        return (
          <li
            className={`text-[15x] p-2 bg-[#efefef] relative flex justity-between items-center cursor-pointer tracking-widest hover:font-bold capitalize w-full  text-gray-500`}
          >
            <div className="font-bold flex items-center uppercase h-full w-full text-[13px] leading-5 pl-4 text-black">
              <a
                href={`/${gender}/${categoryTitle.replace(" ", "-")}/${
                  item.link.categoryId
                }`}
                className={`w-full`}
              >
                {item.content.title}
              </a>
              <p className="font-light w-full">{item.content.subTitle}</p>
            </div>

            <Link
              href={`/${gender}/${categoryTitle.replace(" ", "-")}/${
                item.link.categoryId
              }`}
            >
              <Image
                height={100}
                width={100}
                objectFit="cover"
                className="rounded-full"
                src={item.content.webLargeImageUrl}
                alt="picture"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
