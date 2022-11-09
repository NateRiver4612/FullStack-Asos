import React from "react";

const CategoryCard = ({ category }) => {
  var categoryContainers = category?.children;

  categoryContainers = categoryContainers?.filter(
    (container) =>
      container.content.title.includes("App and Mobile") == false &&
      container.content.title.includes("CTA") == false &&
      container.content.title.includes("App & Mobile") == false
  );

  return (
    <div className="w-full h-full bg-gray-100 flex relative">
      {categoryContainers?.map((container) => {
        const categoryItems = container.children;

        if (categoryItems.length > 0) {
          return (
            <div className=" w-full p-5 pb-4">
              <h1 className="uppercase font-bold underline underline-offset-4 tracking-wider text-[14px]">
                {container.content.title}
              </h1>
              <ul
                className={`grid ${
                  categoryItems.length > 14 ? "grid-cols-2" : "grid-cols-1"
                } pt-2`}
              >
                {categoryItems.map((item) => {
                  return (
                    <li className="text-[13x] cursor-pointer hover:text-gray-600 hover:font-bold py-[6px] capitalize w-full  text-gray-500">
                      {item.content.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }
      })}
      {/* <div className=" w-full">
        <h1 className="uppercase font-bold underline underline-offset-4 tracking-wider text-[14px]">
          shop by product
        </h1>
        <ul className="flex flex-wrap py-3">
          <li className="text-[13x] py-[6px] capitalize w-[50%]  text-gray-500">
            SALE news
          </li>
          <li className="text-[13x] py-[6px] capitalize w-[50%] text-gray-500">
            SALE news
          </li>
          <li className="text-[13x] py-[6px] capitalize w-[50%] text-gray-500">
            SALE news
          </li>
          <li className="text-[13x] py-[6px] capitalize w-[50%] text-gray-500">
            SALE news
          </li>
          <li className="text-[13x] py-[6px] capitalize w-[50%] text-gray-500">
            SALE news
          </li>
          <li className="text-[13x] py-[6px] capitalize w-[50%] text-gray-500">
            SALE news
          </li>
          <li className="text-[13x] py-[6px] capitalize w-[50%] text-gray-500">
            SALE news
          </li>
          <li className="text-[13x] py-[6px] capitalize w-[50%]  text-gray-500">
            SALE news
          </li>
          <li className="text-[13x] py-[6px] capitalize w-[50%] text-gray-500">
            SALE news
          </li>
          <li className="text-[13x] py-[6px] capitalize w-[50%] text-gray-500">
            SALE news
          </li>
          <li className="text-[13x] py-[6px] capitalize w-[50%] text-gray-500">
            SALE news
          </li>
          <li className="text-[13x] py-[6px] capitalize w-[50%]  text-gray-500">
            SALE news
          </li>
          <li className="text-[13x] py-[6px] capitalize w-[50%] text-gray-500">
            SALE news
          </li>
          <li className="text-[13x] py-[6px] capitalize w-[50%] text-gray-500">
            SALE news
          </li>
        </ul>
      </div>
      <div className=" w-full">
        <h1 className="uppercase font-bold underline underline-offset-4 tracking-wider text-[14px]">
          shop by edit
        </h1>
      </div>
      <div className=" w-full">
        <h1 className="uppercase font-bold underline underline-offset-4 tracking-wider text-[14px]">
          shop sale by body fit
        </h1>
      </div> */}
    </div>
  );
};

export default CategoryCard;
