import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useRouter } from "next/router";

const FilterCard = ({
  filters,
  setFaceClick,
  face,
  isOpen,
  addFilterClick,
  handleSubmit,
}) => {
  let filterItemsId = [];

  const router = useRouter();

  if (filters && face) {
    filterItemsId = filters[face.id];
  }

  return (
    <div
      id="filter-card"
      className={`z-40 sm:hidden bg-gray-100 transition-all fixed top-0  ${
        face != null && isOpen ? "right-[0]" : "right-[-100%]"
      } w-[90%]  h-full duration-300  bg-gray-100`}
    >
      <div className="px-4 py-[16px] bg-gray-300 font-bold tracking-widest">
        <span className="text-xl cursor-pointer flex justify-between">
          <MdArrowBackIos
            onClick={() => {
              setFaceClick(null);
            }}
            size={25}
          />
          {face?.name}
        </span>
      </div>
      <ul
        className={`h-[80%] text-gray-600  tracking-wide w-full p-4 pb-24 flex flex-col overflow-scroll relative`}
      >
        {face?.facetValues.map((item: any, index: Int16Array) => {
          return (
            <li
              onClick={() => addFilterClick(face.id, item)}
              key={item.id + index}
              className={`flex  items-center 
                ${
                  filterItemsId &&
                  filterItemsId.includes(item.id) &&
                  "bg-gray-300"
                }
                justify-between border-b-[1px] border-gray-200 cursor-pointer rounded-lg 
          transition-all duration-200 text-gray-500 text-[15px] px-4 py-[25px] font-semibold`}
            >
              <span>{item.name}</span>
              <span>({item.count})</span>
            </li>
          );
        })}
      </ul>
      <div className="w-full bottom-0 flex justify-center p-3">
        <button
          onClick={() => {
            setFaceClick(null);
            handleSubmit();
          }}
          className="font-bold tracking-widest uppercase bg-black py-3 text-white text-[15px] w-full"
        >
          view items
        </button>
      </div>
    </div>
  );
};

export default FilterCard;
