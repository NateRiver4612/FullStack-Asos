import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "../../context/authUserContext";
import { Like } from "../../types";
import LikeButton from "../styled-components/like-button.component";

const ProductOverview = ({
  product,
  isWish,
  handleLikeProduct,
  getLikedProducts,
}) => {
  const router = useRouter();

  const [isProductLiked, setIsProductLiked] = useState(false);

  const { price, imageUrl, name, isSellingFast, id, colour } = product;

  const { categoryId, mainRouteId, categoryRouteId } = router.query;

  const { authUser, SignInWithGooglePopup } = useAuth();

  const url = `/${mainRouteId}/${categoryRouteId}/${categoryId}/Product/${id}`;

  useEffect(() => {
    const isLiked =
      getLikedProducts &&
      getLikedProducts.find(
        (product: { id: String; likes: Like[] }) =>
          product.id == id &&
          product.likes.find((like: { id: String }) => like.id == authUser?.id)
      );

    if (isLiked) {
      return setIsProductLiked(true);
    }

    return setIsProductLiked(false);
  }, [getLikedProducts, authUser]);

  const handleSelect = () => {
    const query = {
      cid: router.query.cid,
      item: product.name,
      pid: product.id.toString(),
    };

    return router.push({
      pathname: isWish ? product.link : url,
      query: query,
    });
  };

  const handleLike = async () => {
    if (!authUser) {
      try {
        await SignInWithGooglePopup();
      } catch (error) {
        alert("You have to sign in first to actually interact with website");
        return;
      }
    }

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

    await handleLikeProduct({ variables: { input: input.value } });
  };

  return (
    <div
      key={product.id}
      className="flex relative flex-col cursor-pointer  mt-5"
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
          <span className="font-bold absolute mb-[45%] text-[8px] sm:text-[11px] bg-black/50 rounded-l-full px-3 text-gray-200 p-[5px] uppercase">
            selling fast
          </span>
        )}

        <LikeButton
          handleLike={handleLike}
          isWish={isWish}
          isProductLiked={isProductLiked}
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
      {isWish && colour && (
        <div className="py-2 mt-3 border-y-[1px] border-gray-200">
          <span className="text-gray-300 text-sm font-thin">{colour}</span>
        </div>
      )}
    </div>
  );
};

export default ProductOverview;
