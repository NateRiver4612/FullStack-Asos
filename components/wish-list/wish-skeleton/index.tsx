import dynamic from "next/dynamic";
import React from "react";
import ProductOverview_Container_Skeleton from "../../product-overview/product-overview-skeleton/product-overview-container.skeleton";

// const ProductOverview_Container = dynamic(
//   () => import("../product-overview/product-overview.container"),
//   { ssr: false }
// );

const Wish_Skeleton = ({ wishItems }) => {
  return (
    <div className="h-fit animate-pulse  pb-24 flex flex-col items-center">
      <div className="w-full flex items-center justify-center bg-gray-100">
        <span className="py-6 text-2xl font-extrabold text-gray-800 tracking-wider">
          Saved Items
        </span>
      </div>

      <ProductOverview_Container_Skeleton
        similarList={undefined}
        items={wishItems}
      />
    </div>
  );
};

export default Wish_Skeleton;
