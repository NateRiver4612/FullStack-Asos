import React from "react";

const TextList = ({ categoryItems }) => {
  return (
    <ul
      className={`grid ${
        categoryItems.length > 16 ? "grid-cols-2" : "grid-cols-1"
      } pt-3`}
    >
      {categoryItems.map((item) => {
        return (
          <li className="text-[13x] w-[20vw]   flex items-center gap-4 cursor-pointer hover:text-gray-600 hover:font-bold py-[6px] capitalize w-full  text-gray-500">
            <span
              className={`${
                item.style.webLargeStyleType == "premium" ? "font-bold" : ""
              } `}
            >
              {item.content.title}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default TextList;
