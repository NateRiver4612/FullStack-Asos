import React from "react";
import ProductOverview from "../product-overview/product-overview.component";

const ProductOverview_Container = ({ products }) => {
  return (
    <div className="grid w-[85%] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {products.map((product) => {
        return (
          <ProductOverview key={product.id} product={product}></ProductOverview>
        );
      })}
    </div>
  );
};

export default ProductOverview_Container;
