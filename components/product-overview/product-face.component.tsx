import React from "react";
import { BiChevronDown } from "react-icons/bi";

const ProductFace = ({ face }) => {
  console.log(face);
  return (
    <div
      key={face.id}
      className="border-y-[2px] cursor-pointer hover:font-semibold w-full flex items-center justify-between py-[6px] px-[4px] text-sm text-gray-500 border-gray-200"
    >
      {face.name}
      <span>
        <BiChevronDown size={18} />
      </span>
    </div>
  );
};

export default ProductFace;
