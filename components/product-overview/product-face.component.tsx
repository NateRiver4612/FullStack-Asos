import React from "react";
import { BiChevronDown, BiCheck, BiX } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";

const ProductFace = ({ face, active, handleClick, index }) => {
  const router = useRouter();
  const keys = Object.keys(router.query);
  const values = Object.values(router.query);

  const isActive = keys.includes(face.id);

  const filterations = face.facetValues.filter((item) =>
    router.query[face.id]?.includes(item.id)
  );
  const filterationIds = filterations.map((filter) => filter.id);

  console.log(filterationIds);

  return (
    <div id="face" className="relative ">
      <div
        onClick={() => {
          if (active === face.id) {
            return handleClick("");
          }
          return handleClick(face.id);
        }}
        key={face.id}
        className={`border-y-[2px] ${
          face.id === active || isActive
            ? "font-semibold bg-gray-200 border-gray-300"
            : ""
        } cursor-pointer hover:font-semibold static
        w-full flex items-center justify-between py-[6px] px-[4px] text-sm text-gray-500 border-gray-200`}
      >
        {face.name}
        <span>
          {face.id === active ? <BiX size={18} /> : <BiChevronDown size={18} />}
        </span>
      </div>
      {face.id === active && (
        <div
          className={`absolute z-10 ${
            index % 2 != 0 ? "right-[0]" : "left-[0]"
          } hidden drop-shadow-2xl md:block h-fit bg-gray-200 h-full  w-[340px] p-3`}
        >
          <div className="flex justify-between items-center ">
            <span className="text-gray-500">
              {filterations.length > 0
                ? `${filterations.length} is selected`
                : "0 is selected"}
            </span>
            {filterations.length > 0 ? (
              <button
                onClick={() => {
                  delete router.query[face.id];
                  router.push(router);

                  return;
                }}
                className="flex hover:bg-gray-500 hover:text-white transition-all duration-200 items-center tracking-wider font-bold text-gray-500 gap-1 border-2 px-3 py-[2px] border-gray-500"
              >
                Clear
              </button>
            ) : (
              <button className="flex hover:bg-gray-500 hover:text-white transition-all duration-200  items-center tracking-wider font-bold text-gray-500 gap-1 border-2 px-3 py-[2px] border-gray-500">
                <BiCheck size={20} /> All
              </button>
            )}
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
            {face.facetValues.map((value, index) => {
              const { count, id, name } = value;

              return (
                <li
                  onClick={() => {
                    if (Object.keys(router.query).includes(face.id)) {
                      if (!router.query[face.id].includes(id)) {
                        router.query[face.id] = `${
                          router.query[face.id]
                        },${id}`;

                        router.push(router);
                      }
                      return;
                    }

                    router.query[face.id] = id;
                    router.push(router);

                    return;
                  }}
                  key={name + id}
                  className={`flex gap-2 ${
                    filterationIds.includes(id) ? "bg-gray-300" : "bg-gray-200"
                  } cursor-pointer mt-2  transition-all duration-200 
                   hover:drop-shadow-lg rounded-[3px] text-[14px] px-4 py-[12px]`}
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
