import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CgTrash } from "react-icons/cg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  removeWishItem,
  selectWishItems,
  setWishItems,
} from "../../redux/features/wish/wish.slice";
import { useAuth } from "../../context/authUserContext";
import { useMutation, useQuery } from "@apollo/client";
import { LIKE_PRODUCT, GET_LIKED_PRODUCTS } from "../../utils/graphQl.utils";
import { useRouter } from "next/router";
import { selectCartItems } from "../../redux/features/cart/cart.slice";
import { Like } from "../../types";
import { RiShoppingBagLine } from "react-icons/ri";

const LikeButton = ({ product, isWishItem }) => {
  const router = useRouter();

  const wishItems = useAppSelector(selectWishItems);

  const dispatch = useAppDispatch();

  const [isProductLiked, setIsProductLiked] = useState(false);

  const { authUser } = useAuth();
  const cartItems = useAppSelector(selectCartItems);

  const [isClicked, setIsClicked] = useState(false);

  const { categoryId, mainRouteId, categoryRouteId } = router.query;
  const { price, imageUrl, name, isSellingFast, id, colour } = product;

  const isAddToCart = cartItems?.find((item) => item.productId == id);

  useEffect(() => {
    const isLiked =
      wishItems &&
      !!wishItems.find(
        (wish: { id: String; likes: Like[] }) =>
          wish.id == product.id &&
          wish.likes.find((like: { id: String }) => like.id == authUser?.id)
      );

    setIsProductLiked(isLiked);
  }, [wishItems, authUser]);

  useEffect(() => {
    setIsClicked(isProductLiked);
  }, [isProductLiked]);

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

    var likeButton = document.getElementById(`like_button_${id}`);

    likeButton.className += " pulse-animation ";

    setTimeout(() => {
      likeButton.className = likeButton.className.replace(
        " pulse-animation ",
        ""
      );
    }, 800);

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

  const handleGoToCart = async () => {
    router.push(`/${mainRouteId}/cart`);
  };

  return (
    <span
      id={`like_button_${id}`}
      onClick={isAddToCart ? handleGoToCart : handleLike}
      className={`absolute  flex opacity-80 text-[20px] sm:text-[24px] 
      transition-all duration-500  rounded-full p-[6px] mb-[10px] mr-[10px] ${
        isAddToCart ? "text-white bg-black" : "bg-white"
      }`}
    >
      <motion.button
        className="rounded-full"
        whileTap={{ scale: 0.5 }}
        transition={{ type: "spring", stiffness: 300, damping: 8 }}
      >
        {isAddToCart ? (
          <RiShoppingBagLine />
        ) : isWishItem ? (
          <CgTrash />
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
