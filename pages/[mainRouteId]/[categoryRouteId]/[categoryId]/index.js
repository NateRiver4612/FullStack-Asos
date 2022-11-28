import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineUp,
  AiOutlineDown,
} from "react-icons/ai";

import { BiChevronDown } from "react-icons/bi";

const ProductList = ({ data }) => {
  const { categoryName, products, itemCount, facets } = data;
  console.log(data);
  return (
    <div className=" w-full flex flex-col items-center mt-10 border-b-[1px] pb-24 border-gray-200 ">
      <div className="w-[90%] flex flex-wrap gap-4 pb-4">
        {facets.map((face) => (
          <div className="border-t-[2px] w-[13.29%] flex items-center justify-between border-b-[2px]  py-[6px] px-[4px] text-sm text-gray-500 border-gray-200">
            {face.name}
            <span>
              <BiChevronDown size={15} />
            </span>
          </div>
        ))}
      </div>
      <div className="w-[90%] text-center text-gray-500 text-[13px]">
        {itemCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} styles
        found
      </div>
      <div className="grid w-[90%] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {products.map((product) => {
          const { price, imageUrl, name, isSellingFast } = product;
          return (
            <div key={product.id} className="flex flex-col mt-5 -z-10">
              <div className="flex justify-end items-end">
                <img src={`https://${imageUrl}`} />
                {isSellingFast && (
                  <span className="font-bold text-[12px] absolute mb-[12%] sm:mb-[7%] md:mb-[6%] lg:mb-[5%] xl:mb-[3.8%] sm:text-[13px] bg-black/60 rounded-l-full px-3 text-gray-200 p-[5px] uppercase">
                    selling fast
                  </span>
                )}

                <span className="absolute text-[20px] sm:text-[24px] bg-white/50 rounded-full p-[5px] mb-[10px] mr-[10px]">
                  {/* <AiOutlineHeart size={26}></AiOutlineHeart> */}
                  <AiFillHeart></AiFillHeart>
                </span>
              </div>
              <div className="flex flex-col h-full">
                <span className="capitalize  mt-2 font-thin line-clamp-2 tracking-wider text-black text-[15px]">
                  {name}
                </span>
                <div className="flex items-center mt-3">
                  {price.previous.value && (
                    <span className="text-xs pr-5 items-center tracking-wider flex line-through text-gray-500">
                      {price.previous.text}
                    </span>
                  )}

                  <span
                    className={`${
                      price.previous.value ? "text-red-700" : "text-gray-600"
                    } items-center tracking-wider flex text-sm font-bold`}
                  >
                    {price.current.text}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { categoryId } }) {
  const response = await fetch("http://localhost:3000/api/listProductData", {
    body: JSON.stringify({ categoryId: categoryId }),
    method: "POST",
  });

  const data = await response.json();

  return { props: { data: data } };
}

export default ProductList;
