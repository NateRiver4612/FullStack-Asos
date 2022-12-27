import React, { Fragment, useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { MdArrowBackIos } from "react-icons/md";

const FilterCard = ({
  filters,
  setFaceClick,
  face,
  isOpen,
  addFilterClick,
  handleSubmit,
}) => {
  const [filterItemsId, setFilterItemsId] = useState([]);

  useEffect(() => {
    if (filters && face && filters[face.id]) {
      const filterItemsId = filters[face.id].map((item) => item.id);

      setFilterItemsId(filterItemsId);
    }
  }, [filters, face]);

  return (
    <div
      id="filter-card"
      className={`z-40 sm:hidden bg-gray-100 transition-all fixed top-0  ${
        face != null && isOpen ? "right-[0]" : "right-[-100%]"
      } w-[94%]  h-full duration-300  bg-gray-100`}
    >
      <div className="px-4 py-[16px] bg-gray-300 font-bold tracking-widest">
        <span className="text-xl cursor-pointer flex justify-between">
          <MdArrowBackIos
            onClick={() => {
              setFaceClick(null);
            }}
            size={25}
          />
          {face && face.name}
        </span>
      </div>
      <ul className="h-[84%]  text-gray-600  tracking-wide w-full p-4 pb-24 flex flex-col overflow-scroll relative">
        {face &&
          face.facetValues.map((item: any, index: Int16Array) => {
            return (
              <li
                onClick={() => addFilterClick(face.id, item)}
                key={item.id + index}
                className={`flex  items-center 
                ${filterItemsId.includes(item.id) && "bg-gray-300"}
                justify-between border-b-[1px] border-gray-200 cursor-pointer rounded-lg 
          transition-all duration-200 text-gray-500 text-[16px] px-4 py-[25px] font-semibold`}
              >
                <span>{item.name}</span>
                <span>({item.count})</span>
              </li>
            );
          })}
      </ul>
      <div className="w-full bottom-0 flex justify-center p-3">
        <button
          onClick={handleSubmit}
          className="font-bold tracking-widest uppercase bg-black py-3 text-white text-lg w-full"
        >
          view items
        </button>
      </div>
    </div>
  );
};

const FilterSidebar = ({
  facets,
  filters,
  isOpen,
  addFilters,
  handleSubmit,
}) => {
  const [face, setFace] = useState(null);

  console.log(filters);

  return (
    <Fragment>
      <div
        className={`z-40 sm:hidden ${
          isOpen ? "right-[0]" : "right-[-100%]"
        } transition-all fixed bottom-0 w-[94%] right-0 duration-300  top-0  bg-gray-100`}
      >
        <div className="px-4 py-[16px] bg-gray-300 font-bold tracking-widest">
          <span className="text-xl">FILTER</span>
        </div>
        <ul className="max-h-[84%] text-gray-600  tracking-wide w-full p-4 pb-24 flex flex-col overflow-scroll relative">
          {facets.map((item: any, index: Int16Array) => {
            return (
              <li
                onClick={() => {
                  setFace(item);
                }}
                key={item.id + index}
                className={`flex gap-2 flex-col border-b-[1px] border-gray-200 cursor-pointer 
          transition-all duration-200 text-gray-500 text-[16px] px-4 py-[25px] font-semibold`}
              >
                <div className="flex items-center justify-between w-full">
                  <span>{item.name}</span>
                  <MdOutlineKeyboardArrowRight
                    className="text-gray-400"
                    size={20}
                  />
                </div>
                <span className="text-gray-400 text-[14px] truncate">
                  {/* {filters &&
                    filters[item.id] &&
                    filters[item.id].map((filter) => filter.name).join(", ")} */}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="w-full bottom-0  flex justify-center p-3">
          <button
            onClick={handleSubmit}
            className="font-bold tracking-widest uppercase bg-black py-3 text-white text-lg w-full"
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
