import React from "react";
import Image from "next/image";
import Link from "next/link";

const GridCircleImageLarge = ({ section, categoryTitle, categoryItems }) => {
  return (
    <ul className={`grid w-[20vw] grid-cols-2 gap-1 pt-4`}>
      {categoryItems.map((item) => {
        return (
          <div
            key={item.id}
            className="relative text-[13x] group justify-center flex flex-col cursor-pointer py-3 items-center gap-4 capitalize  text-gray-500 hover:font-bold 
            hover:[&>*]:border-gray-500"
          >
            <Link
              href={{
                pathname: `/${section}/${categoryTitle.replace(" ", "-")}/${
                  item.link.categoryId
                }`,
                query: { cid: item.link.categoryId, item: item.content.title },
              }}
            >
              <a className="border-[3px] border-gray-200 flex items-center rounded-full p-[3px] ">
                <Image
                  src={item.content.webLargeImageUrl}
                  width={80}
                  height={80}
                  alt="picture"
                  className="rounded-full"
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
              <span className="">{item.content.title}</span>
            </Link>
          </div>
        );
      })}
    </ul>
  );
};

export default GridCircleImageLarge;
