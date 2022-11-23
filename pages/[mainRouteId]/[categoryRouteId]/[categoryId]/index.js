import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";

const ProductList = ({ data }) => {
  const listProduct = data.products;

  return (
    <div className=" w-full flex justify-center mt-10">
      <div className="grid w-[90%] grid-cols-4 xl:grid-cols-5 gap-3">
        {listProduct.map((product) => {
          console.log(product);
          const { price, imageUrl, name } = product;
          return (
            <div key={product.id} className="flex flex-col mt-5 -z-10">
              <div className="flex justify-end items-end">
                <img src={`https://${imageUrl}`} />
                <span className="font-bold absolute mb-[3.5%] text-[13px] bg-black/60 rounded-l-full px-3 text-gray-200 p-[5px] uppercase">
                  selling fast
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
                      price.previous.value ? "text-red-600" : "text-gray-600"
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
