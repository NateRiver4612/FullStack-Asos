import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Sidebar_CircleImageList = ({
  gender,
  categoryTitle,
  categoryItems,
}) => {
  return (
    <ul className={`grid grid-cols-1 px-4 `}>
      {categoryItems.map((item) => {
        return (
          item.content.mobileImageUrl &&
          item.content.webLargeImageUrl && (
            <div
              key={item.id}
              className=" py-[10px] flex items-center gap-4 cursor-pointer hover:font-bold py-[6px] 
            capitalize  text-gray-600  border-t-[0.2px] boder-gray-300"
            >
              <Link
                href={{
                  pathname: `/${gender}/${categoryTitle.replace(" ", "-")}/${
                    item.link.categoryId
                  }`,
                  query: {
                    cid: item.link.categoryId,
                    item: item.content.title,
                  },
                }}
              >
                <a className="rounded-full  flex items-center justify-center ">
                  <Image
                    src={
                      item.content.mobileImageUrl
                        ? item.content.mobileImageUrl
                        : item.content.webLargeImageUrl
                    }
                    className="rounded-full"
                    alt="avatar"
                    width={40}
                    height={40}
                  />
                </a>
              </Link>

              <Link
                href={`/${gender}/${categoryTitle.replace(" ", "-")}/${
                  item.link.categoryId
                }`}
              >
                <a
                  href={`/${gender}/${categoryTitle.replace(" ", "-")}/${
                    item.link.categoryId
                  }`}
                  className=" text-[14px] flex items-center text-gray-500 h-full w-[70%] border-gray-200"
                >
                  {item.content.title}
                </a>
              </Link>
            </div>
          )
        );
      })}
    </ul>
  );
};
