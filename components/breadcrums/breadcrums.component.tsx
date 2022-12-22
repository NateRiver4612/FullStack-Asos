import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { useRouter } from "next/router";

const Breadcrums = () => {
  const router = useRouter();

  const { mainRouteId, item, categoryRouteId } = router.query;

  return (
    <div className="w-full hidden sm:flex items-center pl-[4%] lg:pl-[5%] xl:pl-[7%] border-gray-200 border-b-[1px]">
      <ul className="gap-3 h-[50px] flex items-center text-[13px]">
        <li className="flex items-center text-gray-600">
          <span>Home</span>
        </li>

        <li className="flex items-center capitalize gap-3 text-gray-600">
          <span className="pt-1">
            <BsChevronRight size={8} />
          </span>

          <span>{mainRouteId}</span>
        </li>

        <li className="flex items-center capitalize gap-3 text-gray-600">
          <span className="pt-1">
            <BsChevronRight size={8} />
          </span>
          <span>{categoryRouteId}</span>
        </li>

        {item && (
          <li className="flex items-center capitalize gap-3 text-gray-500">
            <span className="pt-1">
              <BsChevronRight size={8} />
            </span>
            <span>{item}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Breadcrums;
