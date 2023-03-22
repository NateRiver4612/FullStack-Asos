import React from "react";

const ProductDisplay_Skeleton = () => {
  return (
    <div className="flex justify-end w-full h-full  2xl:pr-[5%]">
      <div className="slider__col w-full h-full hidden sm:flex flex-col gap-3 w-fit mr-[20px] mt-6">
        <div className="w-12 h-16 bg-gray-200 rounded-sm"></div>
        <div className="w-12 h-16 bg-gray-200 rounded-sm"></div>
        <div className="w-12 h-16 bg-gray-200 rounded-sm"></div>
        <div className="w-12 h-16 bg-gray-200 rounded-sm"></div>
      </div>

      <div className="h-full w-[100vw] sm:w-[50vw] lg:w-[45vw] 2xl:w-[33vw] relative ">
        <div className="h-[80vh] rounded-lg w-full bg-gray-200"></div>
      </div>
    </div>
  );
};

export default ProductDisplay_Skeleton;
