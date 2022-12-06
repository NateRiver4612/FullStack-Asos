import React from "react";
import Image from "next/image";
import Link from "next/link";

const HalfMarketingImage = ({ section, categoryTitle, categoryItems }) => {
  return (
    <ul className={`flex flex-col gap-2 pt-4`}>
      {categoryItems.map((item) => {
        return (
          <li
            key={item.id}
            className="text-[13x] relative hover:border-gray-500 border-gray-200 border-[2px] group flex justify-center cursor-pointer  hover:font-bold p-[2px] capitalize w-full  text-gray-500"
          >
            <Link
              href={{
                pathname: `/${section}/${categoryTitle.replace(" ", "-")}/${
                  item.link.categoryId
                }`,
                query: { cid: item.link.categoryId, item: item.content.title },
              }}
            >
              <a className="flex items-center">
                <Image
                  src={item.content.webLargeImageUrl}
                  width={300}
                  height={150}
                  alt="picture"
                />
              </a>
            </Link>

            <Link
              href={{
                pathname: `/${section}/${categoryTitle.replace(" ", "-")}/${
                  item.link.categoryId
                }`,
                query: { cid: item.link.categoryId, item: item.content.title },
              }}
            >
              <span className="absolute font-bold uppercase text-[14px] bottom-[15%] text-gray-700">
                {item.content.title}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HalfMarketingImage;
