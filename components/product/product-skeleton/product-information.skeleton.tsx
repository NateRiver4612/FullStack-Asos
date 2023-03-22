const ProductInformation_Skeleton = () => {
  return (
    <div className=" w-[80%] sm:w-[50%] sm:flex ml-6 2xl:ml-0 ">
      <div className="flex flex-col pt-6 gap-2">
        <div className="bg-gray-200 rounded-lg w-full h-6"></div>
        <div className="bg-gray-200 rounded-lg w-[80%] h-6"></div>
        <div className="mt-2 flex flex-col gap-2">
          <div className="bg-gray-200 rounded-lg w-[30%] h-4"></div>
          <div className="bg-gray-200 rounded-lg w-[30%] h-4"></div>
        </div>
        <div className="mt-4 flex text-[15px] sm:text-[13px] justify-between items-center">
          <div className="bg-gray-200 rounded-lg w-[60%] h-4"></div>
          <div className="bg-gray-200 rounded-lg w-[20%] h-4"></div>
        </div>
        <div className="flex flex-col mt-4  ">
          <div className="rounded-lg w-[60%] h-6"></div>
          <div></div>
        </div>
        <div>
          <div className="bg-gray-200 rounded-lg w-full h-10"></div>
          <div className="flex flex-col p-4 border-[1px] border-gray-200 gap-4 mt-5 ">
            <div className="flex gap-3 tracking-wide text-gray-600">
              <div className="bg-gray-200 rounded-lg w-[20%] h-3"></div>
              <div className="bg-gray-200 rounded-lg w-full h-3"></div>
            </div>
            <div className="flex gap-3 tracking-wide text-gray-600">
              <div className="bg-gray-200 rounded-lg w-[20%] h-3"></div>
              <div className="bg-gray-200 rounded-lg w-full h-3"></div>
            </div>
          </div>
          <div className="p-4 border-gray-200 border-x-[1px] border-b-[1px]">
            <div className="bg-gray-200 rounded-lg w-[17vw] h-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation_Skeleton;
