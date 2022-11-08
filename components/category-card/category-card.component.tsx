import React from "react";

const CategoryCard = ({ category }) => {
  const showCategoryCard = true;
  return (
    <div
      className={`${
        showCategoryCard && "w-[95.43%] left-[2%] xl:w-[85%] xl:left-[7.2%]"
      } bg-black opacity-100 z-30 absolute h-[65%] `}
    ></div>
  );
};

export default CategoryCard;
