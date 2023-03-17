import React, { useEffect } from "react";
import ProductOverview from "./product-overview.component";
import { useAppSelector } from "../../redux/hooks";
import { selectWishItems } from "../../redux/features/wish/wish.slice";

const ProductOverview_Container = ({ products, wish, similarList }) => {
  const wishItems = useAppSelector(selectWishItems);

  return (
    <div
      className={`grid transition-all ${
        similarList
          ? "w-full grid-cols-3 sm:grid-cols-5"
          : "grid-cols-2 w-[85%] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      } duration-1000  gap-3`}
    >
      {products?.map((product) => {
        return (
          <ProductOverview
            isWishItem={wish}
            wishItems={wishItems}
            key={product.id}
            product={product}
          ></ProductOverview>
        );
      })}
    </div>
  );
};

export default ProductOverview_Container;
