import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useAppSelector } from "../../../redux/hooks";
import { selectWishItems } from "../../../redux/features/wish/wish.slice";
import { useAuth } from "../../../context/authUserContext";
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

  if (rendering) return <Wish_Skeleton></Wish_Skeleton>;

  if (!authUser || wishItems.length == 0) {
    return <WishEmpty></WishEmpty>;
  }

  return <Wish wishItems={wishItems}></Wish>;
};

export default WishList_Page;
