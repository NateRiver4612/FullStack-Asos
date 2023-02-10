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
      {categoryItems.map((item, index) => {
        console.log(item);
        return (
          <li
            key={item.id + index}
            className={`text-[15x] p-2 bg-[#efefef] relative flex justity-between items-center cursor-pointer tracking-widest hover:font-bold capitalize w-full  text-gray-500`}
          >
            <div className="font-bold flex items-center uppercase h-full w-full text-[13px] leading-5 pl-4 text-black">
              <Link
                href={{
                  pathname: `/${gender}/${categoryTitle.replace(" ", "-")}/${
                    item.link.categoryId
                  }`.replace("//", "/"),
                  query: {
                    cid: item.link.categoryId,
                    item: item.content.title,
                  },
                }}
              >
                <a className={`w-full text-[15px] text-gray-700`}>
                  {item.content.title}
                </a>
              </Link>

              <p className="font-light w-full">{item.content.subTitle}</p>
            </div>

            <Link
              href={{
                pathname: `/${gender}/${categoryTitle.replace(" ", "-")}/${
                  item.link.categoryId
                }`.replace("//", "/"),
                query: {
                  cid: item.link.categoryId,
                  item: item.content.title,
                },
              }}
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
