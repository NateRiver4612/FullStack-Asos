import { useAppDispatch } from "../../../redux/hooks";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useAppSelector } from "../../../redux/hooks";
import {
  selectWishItems,
  setWishItems,
} from "../../../redux/features/wish/wish.slice";
import { useAuth } from "../../../context/authUserContext";
import {
  GET_LIKED_PRODUCTS,
  GET_CART_ITEMS,
} from "../../../utils/graphQl.utils";
import { useQuery } from "@apollo/client";
import { setCartItems } from "../../../redux/features/cart/cart.slice";
import WishEmpty from "../../../components/wish-list/wishList-empty.component";
import Wish from "../../../components/wish-list";
import Wish_Skeleton from "../../../components/wish-list/wish-skeleton";

const WishList_Page = () => {
  const wishItems = useAppSelector(selectWishItems);
  const [rendering, setRendering] = useState(true);

  const { authUser } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      setRendering(false);
    }, 3000);
  }, []);

  if (!authUser || wishItems.length == 0) {
    return <WishEmpty></WishEmpty>;
  }

  if (rendering) return <Wish_Skeleton></Wish_Skeleton>;

  return <Wish wishItems={wishItems}></Wish>;
};

export default WishList_Page;
