import React, { Fragment, useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const FilterCard = dynamic(() => import("./filter-card.component"), {
  ssr: false,
});

const FilterSidebar = ({
  facets,
  filters,
  isOpen,
  addFilters,
  handleSubmit,
}) => {
  const [face, setFace] = useState(null);

  const router = useRouter();

  return (
    <Fragment>
      <div
        className={`z-40 sm:hidden ${
          isOpen ? "right-[0]" : "right-[-100%]"
        } transition-all fixed bottom-0 w-[90%] right-0 duration-300  top-0  bg-gray-100`}
      >
        <div className="px-4 py-[16px] bg-gray-300 font-bold tracking-widest">
          <span className="text-xl">FILTER</span>
        </div>
        <ul className="h-[80%] text-gray-600  tracking-wide w-full p-4 pb-8 flex flex-col overflow-scroll relative">
          {facets.map((face: any, index: Int16Array) => {
            const faceFilters = face.facetValues.filter((filter) =>
              router.query[face.id]?.includes(filter.id)
            );

            return (
              <li
                onClick={() => {
                  setFace(face);
                }}
                key={face.id + index}
                className={`flex gap-2 flex-col border-b-[1px] border-gray-200 cursor-pointer 
          transition-all duration-200 text-gray-500 text-[15px] px-4 py-[25px] font-semibold`}
              >
                <div className="flex items-center justify-between w-full">
                  <span>{face.name}</span>
                  <MdOutlineKeyboardArrowRight
                    className="text-gray-400"
                    size={20}
                  />
                </div>
                <span className="text-gray-400 text-[14px] truncate">
                  {faceFilters?.map((filter) => filter.name).join(", ")}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="w-full  flex justify-center p-3">
          <button
            onClick={handleSubmit}
            className="font-bold tracking-widest uppercase bg-black py-3 text-white text-[15px] w-full"
          >
            view items
          </button>
        </div>
      </div>

      <FilterCard
        face={face}
        filters={filters}
        isOpen={isOpen}
        handleSubmit={handleSubmit}
        setFaceClick={setFace}
        addFilterClick={addFilters}
      ></FilterCard>
    </Fragment>
  );
};

export default FilterSidebar;
