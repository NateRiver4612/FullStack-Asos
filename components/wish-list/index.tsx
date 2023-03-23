import dynamic from "next/dynamic";
import React from "react";
import ProductOverview_Container from "../product-overview/product-overview.container";

const Wish = ({ wishItems }) => {
  return (
    <div className="h-fit pb-24 flex flex-col items-center">
      <div className="w-full flex items-center justify-center bg-gray-100">
        <span className="py-6 text-2xl font-extrabold text-gray-800 tracking-wider">
          Saved Items
        </span>
      </div>

      <ProductOverview_Container
        wish={true}
        products={wishItems}
        similarList={undefined}
      />
    </div>
  );
};

export default Wish;
