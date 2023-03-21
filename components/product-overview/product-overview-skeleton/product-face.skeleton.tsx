import React from "react";

const ProductFace_Skeleton = () => {
  return (
    <div id="face" className="relative ">
      <div
        className={`border-y-[2px] rounded-md cursor-pointer hover:font-semibold static
        w-full flex items-center bg-gray-200 justify-between py-[12px] px-[4px] text-sm text-gray-500 border-gray-200`}
      ></div>
    </div>
  );
};

export default ProductFace_Skeleton;
