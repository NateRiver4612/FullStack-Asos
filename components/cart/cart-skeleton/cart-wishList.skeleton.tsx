import CartWishlistItem_Skeleton from "./cart-wishList-item.skeleton";

const CartWishList_Skeleton = () => {
  return (
    <div className="flex flex-col bg-gray-100 gap-3 items-center ">
      <div className="flex flex-col animate-pulse tracking-widest gap-1  items-center py-5 w-[80%] border-b-2 border-gray-200">
        <div className="w-[80%] rounded-md h-[30px] bg-gray-200"></div>
        <div className="w-full rounded-md h-[30px] bg-gray-200"></div>
      </div>
      <div className="flex flex-col gap-6 sm:gap-10 sm:flex-row mt-4 w-[80%]">
        <CartWishlistItem_Skeleton></CartWishlistItem_Skeleton>
        <CartWishlistItem_Skeleton></CartWishlistItem_Skeleton>
        <CartWishlistItem_Skeleton></CartWishlistItem_Skeleton>
      </div>
      <div className="w-[35%] rounded-md h-[35px] bg-gray-200 my-4"></div>
    </div>
  );
};

export default CartWishList_Skeleton;
