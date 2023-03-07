import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "../../context/authUserContext";
import { Cart, Like } from "../../types";
import LikeButton from "../styled-components/like-button.component";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addToCart,
  selectCartItems,
} from "../../redux/features/cart/cart.slice";
import { removeWishItem } from "../../redux/features/wish/wish.slice";

const ProductOverview = ({ product, isWishItem, wishItems }) => {
  const router = useRouter();
  const cartItems = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();

  const [isProductLiked, setIsProductLiked] = useState(false);

  const { price, imageUrl, name, isSellingFast, id, colour } = product;

  const { categoryId, mainRouteId, categoryRouteId } = router.query;

  const { authUser } = useAuth();

  const url = `/${mainRouteId}/${categoryRouteId}/${categoryId}/Product/${id}`;

  // check product is Liked before by the user base on Id
  useEffect(() => {
    const isLiked =
      wishItems &&
      wishItems.find(
        (product: { id: String; likes: Like[] }) =>
          product.id == id &&
          product.likes.find((like: { id: String }) => like.id == authUser?.id)
      );

    if (isLiked) {
      return setIsProductLiked(true);
    }

    return setIsProductLiked(false);
  }, [wishItems, authUser]);

  const handleSelect = () => {
    const query = {
      cid: router.query.cid,
      item: product.name,
      pid: product.id.toString(),
    };

    return router.push({
      pathname: isWishItem ? product.link : url,
      query: query,
    });
  };

  const handleAddToCart = () => {
    const cartItem: Cart = {
      ...product,
      quantity: 1,
      totalPrice: product.price.current.value,
    };

    if (cartItems.find((item) => item.id == id)) {
      alert("You have added this item before");
      return;
    } else {
      dispatch(addToCart(cartItem));
      dispatch(removeWishItem(id));
    }
  };

  return (
    <div key={id} className="flex relative flex-col cursor-pointer  mt-5">
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
          <span className="font-bold absolute mb-[45%] text-[8px] sm:text-[11px] bg-black/50 rounded-l-full px-3 text-gray-200 p-[5px] uppercase">
            selling fast
          </span>
        )}

        <LikeButton
          isWishItem={isWishItem}
          isProductLiked={isProductLiked}
          product={product}
        />
      </div>
      <div onClick={handleSelect} className="flex flex-col h-full">
        <span className="capitalize  mt-2 font-thin line-clamp-2 tracking-wider text-black text-[15px]">
          {name}
        </span>
        <div className="flex justify-between items-center mt-3">
          <span
            className={`${
              price.previous.value ? "text-red-700" : "text-gray-600"
            } items-center tracking-wider flex text-sm font-bold`}
          >
            {price.current.text}
          </span>

          {price.previous.value && (
            <span className="text-[10px] items-center tracking-wider flex line-through text-gray-500">
              {price.previous.text}
            </span>
          )}
        </div>
      </div>
      {isWishItem && colour && (
        <Fragment>
          <div className="py-2 mt-3 border-y-[1px] border-gray-200">
            <span className="text-gray-300 text-sm font-thin">{colour}</span>
          </div>
          <button
            onClick={handleAddToCart}
            className="rounded-[1px] uppercase transition-all duration-300 bg-gray-400 hover:bg-gray-600 font-semibold tracking-wide text-gray-300 py-2 my-2 "
          >
            move to bag
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default ProductOverview;
