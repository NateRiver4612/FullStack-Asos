import React from "react";
import ProductOverview from "./product-overview.component";
import { useMutation, useQuery } from "@apollo/client";
import { GET_LIKED_PRODUCTS, LIKE_PRODUCT } from "../../utils/graphQl.utils";

const ProductOverview_Container = ({ products, wish }: any | null) => {
  const [likeProduct] = useMutation(LIKE_PRODUCT, {
    refetchQueries: [{ query: GET_LIKED_PRODUCTS }],
    update(cache, result) {
      const data: any = cache.readQuery({ query: GET_LIKED_PRODUCTS });

      cache.writeQuery({
        query: GET_LIKED_PRODUCTS,
        data: { getLikedProducts: [...data.getLikedProducts] },
      });
    },
  });

  const { loading: Liked_Products_Loading, data: Liked_Products_Data } =
    useQuery(GET_LIKED_PRODUCTS);

  const likedProducts =
    !Liked_Products_Loading &&
    Liked_Products_Data &&
    Liked_Products_Data.getLikedProducts;

  return (
    <div className="grid w-[85%] transition-all duration-1000 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {products?.map((product) => {
        return (
          <ProductOverview
            getLikedProducts={likedProducts}
            handleLikeProduct={likeProduct}
            isWish={wish}
            key={product.id}
            product={product}
          ></ProductOverview>
        );
      })}
    </div>
  );
};

export default ProductOverview_Container;
