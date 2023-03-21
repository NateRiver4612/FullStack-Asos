import React from "react";
import ProductFace_Skeleton from "./product-face.skeleton";
import ProductOverview_Container_Skeleton from "./product-overview-container.skeleton";

const Product_Overview_Skeleton = ({ facets, products }) => {
  return (
    <div className="w-full flex  flex-col  items-center mt-10 border-b-[1px] pb-24 border-gray-200">
      <div className="font-bold text-center text-2xl pb-16 border-b-[1px] border-gray-200 flex justify-center w-full">
        <div className="h-10 rounded-md w-[80%] sm:w-[20%] bg-gray-200"></div>
      </div>
      <div className="w-[85%]  hidden sm:grid grid-cols-2 md:grid-cols-4 pt-2  xl:grid-cols-5 2xl:grid-cols-6 gap-4 pb-4">
        {facets.map((face, index) => (
          <ProductFace_Skeleton key={face.id}></ProductFace_Skeleton>
        ))}
      </div>
      <div className="w-fit  hover:drop-shadow-lg pb-4 bottom-0 hidden  sm:flex justify-center ">
        <div className="font-bold tracking-widest px-4 uppercase bg-gray-200 px-20 rounded-md py-5 text-white text-sm w-full"></div>
      </div>
      <div className="flex cursor-pointer border-b-[1px] border-gray-3  items-center sm:hidden w-full font-bold text-gray-600 tracking-widest">
        <div className=" w-[50%] py-3">
          <span className="flex items-center ml-[20%] h-9 w-[70%] bg-gray-200 rounded-md justify-center"></span>
        </div>
        <div className="h-[50%] border-r-[2px] border-gray-400"></div>
        <div className=" w-[50%] py-3 ">
          <span className="flex items-center ml-[9%] h-9 w-[70%] bg-gray-200 rounded-md justify-center"></span>
        </div>
      </div>
      <ProductOverview_Container_Skeleton
        items={products}
        similarList={undefined}
      ></ProductOverview_Container_Skeleton>
    </div>
  );
};

export default Product_Overview_Skeleton;
