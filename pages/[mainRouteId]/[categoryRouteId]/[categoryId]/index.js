import React, { useEffect, useState, Fragment } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useRouter } from "next/router";

import dynamic from "next/dynamic";

const ProductOverview_Container = dynamic(
  () =>
    import(
      "../../../../components/product-overview/product-overview.container"
    ),
  {
    ssr: false,
  }
);

const ProductFace = dynamic(
  () =>
    import("../../../../components/product-overview/product-face.component"),
  {
    ssr: false,
  }
);

const FilterSidebar = dynamic(
  () => import("../../../../components/filter/filter-sidebar.component"),
  {
    ssr: false,
  }
);

const ProductList = ({ data }) => {
  const { categoryName, products, itemCount, facets } = data;

  const [active, setActive] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [filters, setFilters] = useState({});

  //Save products to localstorage for later using
  localStorage.setItem("items", JSON.stringify(products));

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

      if (filterAdded) {
        finalObj[title] = finalObj[title].filter(
          (filterId) => filterId != filter.id
        );

        // This is for when user remove the selected filter
        // selected filter means they included in the router query
        if (Object.keys(router.query).includes(title)) {
          if (router.query[title].toString().split(",").includes(filter.id)) {
            return handleRemove(finalObj);
          }
        }

        if (finalObj[title].length <= 0) {
          delete finalObj[title];
        }
      } else {
        finalObj[title].push(filter.id);
      }
    } else {
      finalObj[title] = [filter.id];
    }

    return setFilters(finalObj);
  };

  const handleRemove = (filters) => {
    Object.keys(filters).map((key) => {
      filters[key] = filters[key].join(",");
      router.query[key] = filters[key];
      if (router.query[key].length <= 0) {
        delete router.query[key];
      }
    });

    setActive("");
    setOpenFilter(false);
    return router.push(router);
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

    setOpenFilter(false);
    setActive("");
    setOpenFilter(false);
    return router.push(router);
  };

  const clearFilters = (id) => {
    const updateFilters = Object.entries(filters).filter(
      ([key, value]) => key != id
    );

    return setFilters(updateFilters);
  };

  const selectAllFilters = (key, value) => {
    const updateFilters = { ...filters };
    updateFilters[key] = value;

    setFilters(updateFilters);

    Object.keys(updateFilters).map((key) => {
      updateFilters[key] = updateFilters[key].join(",");
      router.query[key] = updateFilters[key];
      if (router.query[key].length <= 0) {
        delete router.query[key];
      }
    });

    setActive("");
    setOpenFilter(false);
    return router.push(router);
  };

  return (
    <Fragment>
      <div
        onClick={() => setOpenFilter(false)}
        className={` ${
          !openFilter
            ? "opacity-0 w-0 right-0 top-0 bottom-0 left-0"
            : "bg-black/60  h-screen transition-all duration-500 fixed top-0 bottom-0 flex z-30 w-screen"
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

      <div className=" w-full flex  flex-col  items-center mt-10 border-b-[1px] pb-24 border-gray-200 ">
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
                clearFilters={clearFilters}
                index={index}
                active={active}
                setActive={setActive}
                selectAllFilters={selectAllFilters}
                handleClick={setActive}
                handleSubmit={handleSubmit}
              />
            ))}
          </div>
          <div className="w-fit  hover:drop-shadow-lg pb-4 bottom-0 hidden  sm:flex justify-center ">
            <button
              onClick={handleSubmit}
              className="font-bold tracking-widest px-4 uppercase bg-black py-3 text-white text-sm w-full"
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
        <ProductOverview_Container products={products} />
      </div>
    </Fragment>
  );
};

export async function getServerSideProps({ query, res, req }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const axios = require("axios");
  const { ListProduct } = require("../../../../public/listProduct.data");

  var bodyObj = {};

  let data = {};

  if (process.env.NODE_ENV === "development") {
    // development build code
    console.log("Development");
    data = ListProduct[0];
  } else {
    // production build code
    console.log("Prodution");
    Object.entries(query).map((object, index) => {
      const key = object[0];
      const value = object[1];

      bodyObj[key] = value;
    });

    const options = {
      method: "GET",
      url: process.env.PRODUCT_LIST,
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
        "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
      },
    };

    const response = await axios.request(options);

    data = response.data;
  }

  return { props: { data: data } };
}

export default ProductList;
