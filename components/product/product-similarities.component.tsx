import React from "react";
import { ProductOverview } from "../product-overview";

const ProductSimilarities = ({ similaritems }) => {
  return (
    <div className="grid w-full grid-cols-3 sm:grid-cols-5 gap-3">
      {similaritems.map((product) => {
        return (
          <ProductOverview key={product.id} product={product}></ProductOverview>
        );
      })}
    </div>
  );
};

export default ProductSimilarities;
