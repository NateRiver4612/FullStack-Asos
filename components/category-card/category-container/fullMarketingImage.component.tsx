import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const FullMarketingImage = ({ section, categoryTitle, categoryItems }) => {
  const [cols, setCols] = useState(categoryItems.length);

  useEffect(() => {
    setCols(categoryItems.length);
  }, [categoryItems]);

  return (
    <ul
      className={`grid ${
        cols == 3
          ? "grid-cols-3"
          : cols == 2
          ? "grid-cols-2"
          : `grid-cols-${cols}`
      } w-full mt-4 gap-3`}
    >
      {categoryItems.map((item) => {
        return (
          <li
            key={item.id}
            className="text-[13x] relative border-[2px] border-gray-300 hover:border-gray-500 px-[3px] group flex flex-col items-center  cursor-pointer hover:font-bold py-[3px] capitalize "
          >
            {item.content.webLargeImageUrl && (
              <Link
                href={{
                  pathname: `/${section}/${categoryTitle.replace(" ", "-")}/${
                    item.link.categoryId
                  }`,
                  query: {
                    cid: item.link.categoryId,
                    item: item.content.title,
                  },
                }}
              >
                <a className="flex items-center">
                  <Image
                    src={item.content.webLargeImageUrl}
                    alt="picture"
                    height={500}
                    width={420}
                  />
                </a>
              </Link>
            )}

            <Link
              href={`/${section}/${categoryTitle.replace(" ", "-")}/${
                item.link.categoryId
              }`}
            >
              <span className="absolute text-back uppercase bottom-[7%] font-bold text-[18px]">
                {item.content.title}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default FullMarketingImage;
