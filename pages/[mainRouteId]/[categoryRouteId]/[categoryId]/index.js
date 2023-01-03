import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
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
    const filterObj = { ...router.query };
    delete filterObj["categoryId"];
    delete filterObj["categoryRouteId"];
    delete filterObj["item"];
    delete filterObj["cid"];
    delete filterObj["mainRouteId"];

    //Convert query obj into filters object format
    Object.keys(filterObj).map((key) => {
      console.log(typeof filterObj[key]);
      if (typeof filterObj[key] == "string") {
        filterObj[key] = filterObj[key].split(",");
      }
    });

    return setFilters(filterObj);
  }, [router.query]);

  //This function will update filter object by add a object
  //New Object: contain an ID as the key the array of filter Id as value
  const addFilters = (title, filter) => {
    var finalObj = { ...filters };

    // check if final object has the relevent key
    if (finalObj.hasOwnProperty(title)) {
      // if it has that key then push the value according to the key
      const filterAdded = finalObj[title].find(
        (filterId) => filterId === filter.id
      );
      console.log(filterAdded);
      if (filterAdded) {
        finalObj[title] = finalObj[title].filter(
          (filterId) => filterId != filter.id
        );
      } else {
        finalObj[title].push(filter.id);
      }
    } else {
      finalObj[title] = [filter.id];
    }

    console.log(finalObj);
    return setFilters(finalObj);
  };

  const handleSubmit = () => {
    //Convert filters to query format
    if (Object.keys(filters).length <= 0) return;

    var queryObj = { ...filters };

    Object.keys(queryObj).map((key) => {
      queryObj[key] = queryObj[key].join(",");
      router.query[key] = queryObj[key];
      if (router.query[key].length <= 0) {
        delete router.query[key];
      }
    });

    console.log(queryObj, router);
    return router.push(router);
  };

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

  const options = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/products/v2/list",
    params: {
      store: "US",
      offset: "0",
      limit: "100",
      country: "US",
      sort: "freshness",
      currency: "USD",
      sizeSchema: "US",
      lang: "en-US",
      ...bodyObj,
    },
    headers: {
      "X-RapidAPI-Key": "f906b6c3a6msh49a5389c512d5c0p1819eajsn3b16cc8b1128",
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);

  const data = response.data;

  return { props: { data: data } };
}

export default ProductList;
