import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CgTrash } from "react-icons/cg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectWishItems,
  setWishItems,
} from "../../redux/features/wish/wish.slice";
import { useAuth } from "../../context/authUserContext";
import { useMutation } from "@apollo/client";
import { LIKE_PRODUCT, GET_LIKED_PRODUCTS } from "../../utils/graphQl.utils";
import router from "next/router";

const LikeButton = ({ product, isWishItem, isProductLiked }) => {
  const wishItems = useAppSelector(selectWishItems);
  const dispatch = useAppDispatch();
  const [isClicked, setIsClicked] = useState(false);

  const { categoryId, mainRouteId, categoryRouteId } = router.query;
  const { price, imageUrl, name, isSellingFast, id, colour } = product;

  const { authUser } = useAuth();

  useEffect(() => {
    setIsClicked(isProductLiked);
  }, [isProductLiked]);

  const handleRemoveItem = () => {
    const likedProductsByUser = wishItems.filter((product) =>
      product.likes.filter((like) => like.id != authUser.id)
    );
    console.log(likedProductsByUser);

    return dispatch(setWishItems(likedProductsByUser));
  };

  const [likeProduct] = useMutation(LIKE_PRODUCT, {
    refetchQueries: [{ query: GET_LIKED_PRODUCTS }],
  });

  const handleLike = async () => {
    if (!authUser) {
      try {
        return router.push("/identity/register");
      } catch (error) {
        alert("You have to sign in first to actually interact with website");
        return;
      }
    }

    setIsClicked(!isClicked);

    const url = `/${mainRouteId}/${categoryRouteId}/${categoryId}/Product/${id}`;

    const input = {
      value: {
        id: id.toString(),
        imageUrl: imageUrl,
        name: name,
        userID: authUser.id,
        userName: authUser.name,
        isSellingFast: isSellingFast,
        colour: colour,
        link: url,
        cur_price: parseFloat(price.current.value),
        pre_price: parseFloat(price.previous.value),
      },
    };

    await likeProduct({ variables: { input: input.value } });
  };

  return (
    <span
      onClick={handleLike}
      className={`absolute text-black flex opacity-80 text-[20px] sm:text-[24px] transition-all duration-500  bg-white rounded-full p-[6px] mb-[10px] mr-[10px]`}
    >
      <motion.button
        whileTap={{ scale: 0.4 }}
        transition={{ type: "spring", stiffness: 300, damping: 8 }}
      >
        {isWishItem ? (
          <CgTrash onClick={handleRemoveItem} />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isProductLiked || isClicked ? "true" : "none"}
            strokeWidth="1.7"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        )}
      </motion.button>
    </span>
  );
};

export default LikeButton;
