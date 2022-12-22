import React, { useEffect, useState } from "react";
import {
  ProductOverview,
  ProductFace,
} from "../../../../components/product-overview";

const ProductList = ({ data }) => {
  const { categoryName, products, itemCount, facets } = data;
  const [active, setActive] = useState("");

  return (
    <div className=" w-full flex flex-col  items-center mt-10 border-b-[1px] pb-24 border-gray-200 ">
      <div className="font-bold text-center text-2xl pb-20 border-b-[1px] border-gray-200 w-full">
        {categoryName}
      </div>
      <div className="w-full bg-gray-100 flex justify-center">
        <div className="w-[90%]  grid-cols-2 md:grid-cols-4 pt-2 grid xl:grid-cols-5 2xl:grid-cols-6 gap-4 pb-4">
          {facets.map((face) => (
            <ProductFace
              key={face.id}
              face={face}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </div>

      <div className="w-[90%] text-center text-gray-500 text-[13px]">
        {itemCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} styles
        found
      </div>
      <div className="grid w-[90%] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {products.map((product) => {
          return (
            <ProductOverview
              key={product.id}
              product={product}
            ></ProductOverview>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { categoryId } = context.params;

  const response = await fetch("http://localhost:3000/api/listProductData", {
    body: JSON.stringify({ categoryId: categoryId }),
    method: "POST",
  });

  const data = await response.json();

  return { props: { data: data } };
}

export default ProductList;
