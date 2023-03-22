import React from "react";
import ProductOverview_Container_Skeleton from "../../product-overview/product-overview-skeleton/product-overview-container.skeleton";

const ProductSimliarities_Skeleton = ({ similarItems }) => {
  return (
    <div className="flex w-full flex-col mt-[5%] px-4 md:px-0">
      <div>
        <div className="w-[30%] h-4 rounded-full bg-gray-200"></div>
      </div>
      <ProductOverview_Container_Skeleton
        similarList={true}
        items={similarItems}
      />
    </div>
  );
};

export default ProductSimliarities_Skeleton;
