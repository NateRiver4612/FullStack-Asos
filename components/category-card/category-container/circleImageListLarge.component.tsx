import React from "react";
import Image from "next/image";
import Link from "next/link";

const CircleImageListLarge = ({ section, categoryTitle, categoryItems }) => {
  return (
    <ul
      className={`grid  ${
        categoryItems.length >= 10 ? "grid-cols-2" : "grid-cols-1"
      } pt-3`}
    >
      {categoryItems.map((item) => {
        return (
          <div
            key={item.id}
            className="text-[13x] w-[22vw] flex items-center gap-4 cursor-pointer hover:font-bold py-[6px] 
            capitalize w-full text-gray-500 hover:[&>*]:border-gray-500 group"
          >
            <Link
              href={`/${section}/${categoryTitle.replace(" ", "-")}/${
                item.link.categoryId
              }`}
            >
              <a className="rounded-full p-[2px] flex items-center justify-center border-2 box-content border-gray-300">
                <Image
                  src={item.content.webLargeImageUrl}
                  className="rounded-full"
                  alt="avatar"
                  width={32}
                  height={32}
                />
              </a>
            </Link>

            <Link
              href={`/${section}/${categoryTitle.replace(" ", "-")}/${
                item.link.categoryId
              }`}
              className="border-b-[1px] flex items-center h-full w-[40%] border-gray-200"
            >
              {item.content.title}
            </Link>
          </div>
        );
      })}
    </ul>
  );
};

export default CircleImageListLarge;
