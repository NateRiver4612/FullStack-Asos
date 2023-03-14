const CartWishlistItem_Skeleton = () => {
  return (
    <div className="flex sm:flex-col pb-6 w-full sm:w-[28%] gap-2 border-b-[1px] border-gray-200">
      <div className="w-[120px] h-[160px] bg-gray-200 rounded-md"></div>

      <div className="w-full">
        <div className="w-full rounded-md h-[15px] bg-gray-200"></div>
        <div className="flex items-center justify-between gap-3 mt-2">
          <div className="w-[60px] rounded-md h-[10px] bg-gray-200"></div>

          <div className="w-[40px] rounded-md h-[10px] bg-gray-200"></div>
        </div>
        <div className="w-full mt-2 rounded-md h-[30px] bg-gray-200"></div>
      </div>
    </div>
  );
};

export default CartWishlistItem_Skeleton;
