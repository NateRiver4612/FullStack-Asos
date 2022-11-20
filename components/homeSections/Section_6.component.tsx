import React from "react";

const Section_6 = ({ data }) => {
  const listItem = data.children;
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl font-bold">TOP MEN'S CATEGORIES</h1>
      <div className="grid grid-cols-4 gap-4 mt-[4%]">
        {listItem.map((item) => {
          const { title } = item.content;
          return <span className="text-gray-500 pr-20">{title}</span>;
        })}
      </div>
    </div>
  );
};

export default Section_6;
