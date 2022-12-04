import React from "react";
import Link from "next/link";

const TextList = ({ categoryTitle, categoryItems, section }) => {
  return (
    <ul
      className={`grid ${
        categoryItems.length > 16 ? "grid-cols-2" : "grid-cols-1"
      } pt-3`}
    >
      {categoryItems.map((item) => {
        return (
          <li
            key={item.id}
            className="text-[13x] w-[20vw]   flex items-center gap-4 cursor-pointer hover:text-gray-600 hover:font-bold py-[6px] capitalize w-full  text-gray-500"
          >
            <Link
              href={`/${section}/${categoryTitle.replace(" ", "-")}/${
                item.link.categoryId
              }`}
            >
              <span
                className={`${
                  item.style.webLargeStyleType == "premium" ? "font-bold" : ""
                } `}
              >
                {item.content.title}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TextList;
