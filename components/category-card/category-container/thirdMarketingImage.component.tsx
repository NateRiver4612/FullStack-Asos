import React from "react";
import Image from "next/image";
import Link from "next/link";

const ThirdMarketingImage = ({ section, categoryTitle, categoryItems }) => {
  return (
    <ul className={`flex flex-col flex-start gap-2 pt-2`}>
      {categoryItems.map((item) => {
        return (
          <div
            key={item.id}
            className="text-[13x] relative border-gray-200 border-[2px] hover:border-gray-400 p-[2px] group flex flex-start items-center  cursor-pointer  hover:font-bold  capitalize w-full  text-gray-500"
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
                  height={120}
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
              <p className="absolute break-normal font-bold uppercase text-[14px] pl-4 w-[70%] text-gray-700">
                {item.content.title}
              </p>
            </Link>
          </div>
        );
      })}
    </ul>
  );
};

export default ThirdMarketingImage;
