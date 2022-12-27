import React, { useEffect, useState, Fragment } from "react";
import {
  ProductOverview,
  ProductFace,
} from "../../../../components/product-overview";
import { BiChevronDown, BiCheck, BiX } from "react-icons/bi";
import FilterSidebar from "../../../../components/sidebar/filter-sidebar.component";
import { useRouter } from "next/router";

const ProductList = ({ data }) => {
  const { categoryName, products, itemCount, facets } = data;
  const [active, setActive] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [filters, setFilters] = useState({});

  const router = useRouter();

  useEffect(() => {
    const filterObj = router.query;
    delete filterObj["categoryId"];
    delete filterObj["categoryRouteId"];
    delete filterObj["item"];
    delete filterObj["cid"];
    delete filterObj["mainRouteId"];

    console.log(filterObj);

    setFilters(filterObj);
  }, [router.query]);

  //This function will update filter object by add a object
  //New Object: contain an ID as the key the array of filter Id as value
  const addFilters = (title, filter) => {
    var finalObj = { ...filters };
    // check if final object has the relevent key
    if (finalObj.hasOwnProperty(title)) {
      // if it has that key then push the value according to the key

      const filterAdded = finalObj[title].find((item) => item.id === filter.id);

      if (filterAdded) {
        finalObj[title] = finalObj[title].filter(
          (item) => item.id != filter.id
        );
      } else {
        finalObj[title].push(filter);
      }
    } else {
      finalObj[title] = [filter];
    }

    return setFilters(finalObj);
  };

  const handleSubmit = () => {
    Object.keys(filters).map((key) => {
      router.query[key] = filters[key].map((filter) => filter.id).join(",");
    });

    router.push(router);
  };

  console.log(filters);

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
        handleSubmit={handleSubmit}
        isOpen={openFilter}
        filters={filters}
        addFilters={addFilters}
        facets={facets}
      />

      <div className=" w-full flex flex-col  items-center mt-10 border-b-[1px] pb-24 border-gray-200 ">
        <div className="font-bold text-center text-2xl pb-16 border-b-[1px] border-gray-200 w-full">
          {categoryName}
        </div>
        <div className="w-full bg-gray-100 flex flex-col items-center justify-center">
          <div className="w-[85%]  hidden sm:grid grid-cols-2 md:grid-cols-4 pt-2  xl:grid-cols-5 2xl:grid-cols-6 gap-4 pb-4">
            {facets.map((face, index) => (
              <ProductFace
                key={face.id}
                face={face}
                filters={filters}
                addFilters={addFilters}
                index={index}
                active={active}
                handleClick={setActive}
                handleSubmit={handleSubmit}
              />
            ))}
          </div>
          <div className="w-[10%] hover:drop-shadow-lg  bottom-0 hidden  sm:flex justify-center ">
            <button
              onClick={handleSubmit}
              className="font-bold tracking-widest uppercase bg-black py-3 text-white text-sm w-full"
            >
              view items
            </button>
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

  console.log(bodyObj);

  // const response = await fetch("http://localhost:3000/api/listProductData", {
  //   body: JSON.stringify(bodyObj),
  //   method: "POST",
  // });
  // console.log(response);

  // const data = await response.json();

  const data = {
    categoryName: "Blabla",
    products: [],
    itemCount: 200,
    facets: [],
  };

  return { props: { data: data } };
}

export default ProductList;
