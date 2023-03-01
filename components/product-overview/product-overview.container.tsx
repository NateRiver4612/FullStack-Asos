import React from "react";
import ProductOverview from "./product-overview.component";
import { useMutation, useQuery } from "@apollo/client";
import { GET_LIKED_PRODUCTS, LIKE_PRODUCT } from "../../utils/graphQl.utils";
import Spinner from "../spinner/spinner.component";

const ProductOverview_Container = ({ products, wish, similarList }) => {
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

  const {
    loading: Liked_Products_Loading,
    data: Liked_Products_Data,
    error: Liked_Products_Error,
  } = useQuery(GET_LIKED_PRODUCTS);

  if (Liked_Products_Loading) {
    return <Spinner></Spinner>;
  }

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
            getLikedProducts={Liked_Products_Data.getLikedProducts}
            handleLikeProduct={likeProduct}
            isWishItem={wish}
            key={product.id}
            product={product}
          ></ProductOverview>
        );
      })}
    </div>
  );
};

export default ProductOverview_Container;
