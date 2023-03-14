import CartCheckout_Skeleton from "./cart-checkout.skeleton";
import CartItem_Skeleton from "./cart-item.skeleton";
import CartSubTotal_Skeleton from "./cart-subTotal.skeleton";
import CartWishList_Skeleton from "./cart-wishList.skeleton";
import CartWishlistItem_Skeleton from "./cart-wishList-item.skeleton";
import CartList_Skeleton from "./cart-list.skeleton";

export {
  CartCheckout_Skeleton,
  CartItem_Skeleton,
  CartSubTotal_Skeleton,
  CartWishList_Skeleton,
  CartWishlistItem_Skeleton,
  CartList_Skeleton,
};

const Cart_Skeleton = () => {
  return (
    <div className="flex flex-col sm:flex-row pb-12 px-2 w-full lg:w-[85%] xl:w-[75%] 2xl:w-[65%] mt-2 gap-2 ">
      <div className="w-full sm:w-[60%] h-fit flex flex-col gap-2 ">
        <div className="bg-gray-100 h-[4rem] flex items-center">
          <div className="flex justify-between  w-full tracking-wider items-center px-6">
            <div className="bg-gray-200 h-8 rounded-md w-[22%]"></div>
            <div className="bg-gray-200 h-8 rounded-md w-[40%]"></div>
          </div>
        </div>
        <CartList_Skeleton></CartList_Skeleton>

        <CartSubTotal_Skeleton></CartSubTotal_Skeleton>

        <CartWishList_Skeleton></CartWishList_Skeleton>

        <div className="flex bg-gray-100 p-5 gap-2">
          <div className="w-[60px] h-[60px] rounded-md bg-gray-200"></div>
          <div className=" w-full flex flex-col gap-1">
            <div className="w-[60%] h-7 rounded-md bg-gray-200"></div>
            <div className="w-[90%] h-6 rounded-md bg-gray-200"></div>
          </div>
        </div>
      </div>
      <CartCheckout_Skeleton></CartCheckout_Skeleton>
    </div>
  );
};
export default Cart_Skeleton;
