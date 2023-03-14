import React from "react";

const CartCheckout_Skeleton = () => {
  return (
    <div className=" w-full sm:w-[40%] flex flex-col h-fit gap-2">
      {/* --------------------- Section 1 ------------------------  */}
      <div className="h-fit bg-gray-100 p-5">
        <div className="animate-pulse">
          <div className="h-7 w-[50%] bg-gray-200 rounded-md"></div>
          <div className="font-bold tracking-widest w-full text-lg py-3 border-b-2 border-gray-200"></div>
          <div className="flex flex-col gap-2 mt-3">
            <div className=" flex items-center justify-between tracking-widest">
              <div className="h-7 w-[50%] bg-gray-200 rounded-md"></div>
              <div className="h-6 w-24 bg-gray-200 rounded-md"></div>
            </div>
            <div className=" flex items-center justify-between tracking-widest">
              <div className="h-[27.5px] w-24 bg-gray-100 rounded-md"></div>
              <div className="h-4 w-4 bg-gray-100 rounded-md"></div>
            </div>
            <div className="h-8 w-full bg-gray-200 rounded-md"></div>
            <div className="h-11 w-full bg-gray-200 rounded-md"></div>
            <div className="flex flex-col gap-2 mt-[11px]">
              <div className="h-5 w-24 bg-gray-100 rounded-md"></div>
              <div className="h-7 w-[50%] bg-gray-200 rounded-md"></div>
              <div className="h-5 w-full bg-gray-200 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------- Section 2 ------------------------  */}
      <div className="h-fit bg-gray-100 p-5 ">
        <div className="animate-pulse flex flex-col gap-2">
          <div className="h-6 w-[50%] bg-gray-200 rounded-md"></div>

          <div className="h-5  w-full bg-gray-200 rounded-md"></div>
        </div>
      </div>
      {/* --------------------- Section 3 ------------------------  */}
      <div className="h-fit bg-gray-100 ">
        <div className="animate-pulse p-5 flex flex-col gap-2">
          <div className="h-7 w-[50%] bg-gray-200 rounded-md"></div>
          <div className="h-5 w-full bg-gray-200 rounded-md"></div>
          <div className="h-5 w-full  bg-gray-200 rounded-md"></div>
          <div className="h-5 w-full  bg-gray-200 rounded-md"></div>
          <div className="h-5 w-full  bg-gray-200 rounded-md"></div>
          <div className="h-5 w-full  bg-gray-200 rounded-md"></div>
          <div className="h-5 w-full  bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout_Skeleton;
