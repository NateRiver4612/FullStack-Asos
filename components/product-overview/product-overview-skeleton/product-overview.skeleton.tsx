const ProductOverview_Skeleton = () => {
  return (
    <div className="flex relative animate-pulse flex-col cursor-pointer  mt-5">
      <div className="flex justify-end items-end ">
        <div className="w-[300px] h-[200px] sm:h-[320px] rounded-md bg-gray-200"></div>

        <div className="absolute rounded-full w-[40px] h-[40px] mb-[15px] mr-[15px] bg-gray-100"></div>
      </div>
      <div className="flex flex-col gap-2 mt-2 h-full">
        <div className="w-full h-6 bg-gray-200 rounded-md"></div>
        <div className="flex justify-between">
          <div className="w-[40%] h-6 bg-gray-200 rounded-md"></div>
          <div className="w-[30%] h-6 bg-gray-200 rounded-md"></div>
        </div>

        <div className="w-full h-10 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};

export default ProductOverview_Skeleton;
