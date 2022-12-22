import React from "react";
import { BiChevronDown, BiCheck, BiX } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const ProductFace = ({ face, active, handleClick }) => {
  console.log(face);
  return (
    <div
      className="static "
      onClick={() => {
        if (active === face.id) {
          return handleClick("");
        }
        return handleClick(face.id);
      }}
    >
      <div
        key={face.id}
        className={`border-y-[2px] ${
          face.id === active ? "font-semibold bg-gray-200 border-gray-300" : ""
        } cursor-pointer hover:font-semibold 
        w-full flex items-center justify-between py-[6px] px-[4px] text-sm text-gray-500 border-gray-200`}
      >
        {face.name}
        <span>
          {face.id === active ? <BiX size={18} /> : <BiChevronDown size={18} />}
        </span>
      </div>
      {face.id === active && (
        <div className="absolute hidden drop-shadow-2xl md:block h-fit bg-gray-200 h-full md:w-[35%]  lg:w-[30%] xl:w-[340px] p-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">0 selected</span>
            <button className="flex items-center tracking-wider font-bold text-gray-500 gap-1 border-2 px-3 py-[2px] border-gray-500">
              <BiCheck size={20} /> All
            </button>
          </div>
          {face.facetValues.length > 10 && (
            <div className="mt-5">
              <div className="flex items-center w-full">
                <input
                  type="text"
                  placeholder="Search for items and brands"
                  autoComplete="off"
                  className="h-[38px] w-full z-30 rounded-3xl focus:outline-none p-4 text-sm text-gray-600"
                />
                <button
                  type="submit"
                  className={`absolute text-gray-500 transition-all duration-300 z-30 right-5   rounded-full p-1.5`}
                >
                  <FiSearch size={22} fontWeight="bold" />
                </button>
              </div>
            </div>
          )}

          <ul className="flex overflow-scroll pb-4 border-t-2 border-gray-300  max-h-[220px] flex-col mt-5">
            {face.facetValues.map((face, index) => {
              const { count, id, name } = face;
              return (
                <li
                  key={name + id}
                  className="flex gap-2 cursor-pointer mt-2 transition-all duration-200 bg-gray-200 hover:drop-shadow-lg rounded-[3px] text-[14px] px-4 py-[12px]"
                >
                  <span className="text-gray-600">{name}</span>
                  <span className="text-gray-400">({count})</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductFace;
