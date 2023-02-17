import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/router";
import { InMemoryCache, useMutation, useQuery } from "@apollo/client";
import { GET_LIKED_PRODUCTS, LIKE_PRODUCT } from "../../utils/graphQl.utils";
import { useAuth } from "../../context/authUserContext";
import { motion } from "framer-motion";

const ProductOverview = ({ product }) => {
  const router = useRouter();

  const [isProductLiked, setIsProductLiked] = useState(false);

  const { price, imageUrl, name, isSellingFast, id } = product;

  const { categoryId, mainRouteId, categoryRouteId } = router.query;

  const { authUser, SignInWithGooglePopup }: any = useAuth();

  const url = `/${mainRouteId}/${categoryRouteId}/${categoryId}/Product/${id}`;

  const { loading: Liked_Products_Loading, data: Liked_Products_Data } =
    useQuery(GET_LIKED_PRODUCTS);

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

  useEffect(() => {
    let likedProducts =
      !Liked_Products_Loading && Liked_Products_Data?.getLikedProducts;

    const isLiked =
      likedProducts &&
      likedProducts.find(
        (product) =>
          product.id == id &&
          product.likes.find((like) => like.id == authUser?.id)
      );

    if (isLiked) {
      return setIsProductLiked(true);
    }
    return setIsProductLiked(false);
  }, [Liked_Products_Data, authUser]);

  const handleSelect = () => {
    const query = {
      cid: router.query.cid,
      item: product.name,
      pid: product.id.toString(),
    };

    return router.push({
      pathname: url,
      query: query,
    });
  };

  const handleLike = async () => {
    if (!authUser) {
      await SignInWithGooglePopup();
      return;
    }

    const input = {
      value: {
        id: id.toString(),
        imageUrl: imageUrl,
        name: name,
        userID: authUser.id,
        userName: authUser.name,
        isSellingFast: isSellingFast,
        link: url,
        cur_price: parseFloat(price.current.value),
        pre_price: parseFloat(price.current.value),
      },
    };

    const result = await likeProduct({ variables: { input: input.value } });
  };

  const cache = new InMemoryCache({
    typePolicies: {
      Book: {
        fields: {
          author: {
            merge(existing, incoming, { mergeObjects }) {
              return mergeObjects(existing, incoming);
            },
          },
        },
      },
    },
  });

  return (
    <div
      key={product.id}
      className="flex relative flex-col cursor-pointer  mt-5 "
    >
      <div className="flex justify-end items-end ">
        <Image
          onClick={() => {
            handleSelect();
          }}
          height={380}
          width={300}
          src={`https://${imageUrl}`}
        />
        {isSellingFast && (
          <span className="font-bold text-[8px] absolute mb-[12%] sm:mb-[7%] md:mb-[6%] lg:mb-[5%] xl:mb-[3.8%] sm:text-[13px] bg-black/50 rounded-l-full px-3 text-gray-200 p-[5px] uppercase">
            selling fast
          </span>
        )}

        <span
          onClick={handleLike}
          className={`absolute text-gray-900 ease-out text-[20px] sm:text-[24px] transition-all duration-500 ${
            isProductLiked ? "opacity-100" : "opacity-50"
          } bg-black/5 rounded-full p-[6px] mb-[10px] mr-[10px]`}
        >
          <motion.div
            className="box "
            whileTap={{ scale: 0.4 }}
            transition={{ type: "spring", stiffness: 300, damping: 8 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isProductLiked ? "true" : "none"}
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </motion.div>
        </span>
      </div>
      <div onClick={handleSelect} className="flex flex-col h-full">
        <span className="capitalize  mt-2 font-thin line-clamp-2 tracking-wider text-black text-[15px]">
          {name}
        </span>
        <div className="flex items-center mt-3">
          {price.previous.value && (
            <span className="text-xs pr-5 items-center tracking-wider flex line-through text-gray-500">
              {price.previous.text}
            </span>
          )}

          <span
            className={`${
              price.previous.value ? "text-red-700" : "text-gray-600"
            } items-center tracking-wider flex text-sm font-bold`}
          >
            {price.current.text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
