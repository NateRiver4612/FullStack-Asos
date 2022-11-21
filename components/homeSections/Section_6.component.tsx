import React from "react";

const Section_6 = ({ data }) => {
  const listItem = data.children;
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="lg:text-xl xl:text-2xl text-md tracking-widest font-bold">
        TOP MEN'S CATEGORIES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 w-full md:w-[80%] lg:w-[85%] mt-[7%] xl:mt-[2%]">
        {listItem.map((item, index) => {
          const { title } = item.content;
          return (
            <span
              key={item.id + index}
              className="text-gray-500 w-[90%] cursor-pointer text-[15px] border-b-[1px] md:border-none py-3 ml-5 border-gray-200"
            >
              {title}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Section_6;
