import React, { useEffect, useState, useRef, Fragment } from "react";
import {
  ProductOverview,
  ProductFace,
} from "../../../../components/product-overview";
import { BiChevronDown, BiCheck, BiX } from "react-icons/bi";
import FilterSidebar from "../../../../components/sidebar/filter-sidebar.component";
import { motion } from "framer-motion";

//Handle out side ProductFace click
const useOutsideAlerter = (ref, handleClick) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log("Clicked");
        handleClick(null);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

const ProductList = ({ data }) => {
  const { categoryName, products, itemCount, facets } = data;
  const [active, setActive] = useState("");
  const [openFilter, setOpenFilter] = useState(false);

  const componentRef = useRef(null);

  // useOutsideAlerter(componentRef, setActive);

  return (
    <Fragment>
      <div
        onClick={() => setOpenFilter(false)}
        className={` ${
          !openFilter
            ? "opacity-0 w-0 right-0 top-0 bottom-0 left-0"
            : "bg-black overflow-hidden opacity-50 transition-all duration-500 fixed top-0 bottom-0 flex z-30 w-screen"
        }  sm:hidden `}
      ></div>
      <FilterSidebar
        handleClick={setOpenFilter}
        active={active}
        isOpen={openFilter}
        facets={facets}
      />

      <div className=" w-full flex flex-col  items-center mt-10 border-b-[1px] pb-24 border-gray-200 ">
        <div className="font-bold text-center text-2xl pb-16 border-b-[1px] border-gray-200 w-full">
          {categoryName}
        </div>
        <div className="w-full bg-gray-100 flex justify-center">
          <div
            ref={componentRef}
            className="w-[85%]  hidden sm:grid grid-cols-2 md:grid-cols-4 pt-2  xl:grid-cols-5 2xl:grid-cols-6 gap-4 pb-4"
          >
            {facets.map((face, index) => (
              <ProductFace
                key={face.id}
                face={face}
                index={index}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
          <div className="flex cursor-pointer  border-b-[1px] border-gray-3  items-center sm:hidden w-full font-bold text-gray-600 tracking-widest">
            <div className=" w-[50%] py-3">
              <span className="flex items-center justify-center">
                SORT <BiChevronDown size={20} />
              </span>
            </div>
            <div className="h-[50%] border-r-[1px] border-gray-300"></div>
            <div
              className="text-center w-[50%] py-3"
              onClick={() => setOpenFilter(true)}
            >
              <span>FILTER</span>
            </div>
          </div>
        </div>

        <div className="w-[90%] text-center text-gray-500 pt-5 text-[13px]">
          {itemCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} styles
          found
        </div>
        <div className="grid w-[85%] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
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
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  var bodyObj = {};

  Object.entries(context.query).map((object, index) => {
    const key = object[0];
    const value = object[1];

    bodyObj[key] = value;
  });

  const response = await fetch("http://localhost:3000/api/listProductData", {
    body: JSON.stringify(bodyObj),
    method: "POST",
  });

  const data = await response.json();

  return { props: { data: data } };
}

export default ProductList;
