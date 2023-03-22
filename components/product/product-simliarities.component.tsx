import React from "react";
import ProductOverview_Container from "../product-overview/product-overview.container";

const ProductSimliarities = ({ similarItems }) => {
  return (
    <div className="flex w-full flex-col mt-[5%] px-4 md:px-0">
      <div>
        <span className="uppercase text-[17px] tracking-wider text-gray-800 font-bold">
          you might also like
        </span>
      </div>
      <ProductOverview_Container
        similarList={true}
        products={similarItems}
        wish={undefined}
      />
    </div>
  );
};

export default ProductSimliarities;
