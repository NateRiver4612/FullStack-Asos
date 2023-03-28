import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const CategoryCard = dynamic(
  () => import("../category-card/category-card.component"),
  { ssr: false }
);

const NavigationCategories = ({ navigations }) => {
  const [currentNavigation, setCurrentNavigation] = useState(navigations[1]);

  const categories = currentNavigation?.children[4].children;

  const router = useRouter();
  const section = router.query.mainRouteId;

  //Set the current navigations depends on the route
  useEffect(() => {
    if (section === "women") {
      setCurrentNavigation(navigations[1]);
    } else if (section === "men") {
      setCurrentNavigation(navigations[0]);
    }
  }, [section]);

  return (
    <div className={`navigation h-[50px] bg-[#525050] hidden lg:flex `}>
      <div className="hidden relative xl:mx-[110px] text-[13px] mx-4 h-full md:flex">
        {categories?.map((category, index: number) => {
          if (index != 1 && index != categories.length - 1) {
            return (
              <div key={category.id} className="group">
                {index == 0 || index == categories.length - 2 ? (
                  <button className="px-3 h-full text-gray-200 capitalize tracking-wide group-hover:bg-white overflow-hidden whitespace-nowrap relative group-hover:text-black hover:[&>*]:bg-white">
                    <span className="-skew-x-12 px-4 font-bold flex items-center bg-[#d01345] group-hover:bg-white  group-hover:transform-none h-[50px]">
                      <span>{category.content.title}</span>
                    </span>
                  </button>
                ) : (
                  <button className="px-3 group-hover:bg-white group-hover:text-black h-full text-gray-200 tracking-wide overflow-hidden whitespace-nowrap capitalize  hover:bg-white hover:text-black">
                    <span>{category.content.title}</span>
                  </button>
                )}
                <div
                  className={`category_card hidden z-30 left-[0px] w-[97vw] xl:w-[89vw]  2xl:w-[87vw] group-hover:flex h-fit absolute bg-black`}
                >
                  <CategoryCard
                    section={section}
                    category={category}
                  ></CategoryCard>
                </div>
              </div>
            );
          }
        })}
        <div className="hidden xl:block group">
          <button className="px-3 h-full text-gray-200 tracking-wide overflow-hidden whitespace-nowrap capitalize  hover:bg-white hover:text-black">
            <span>{categories.at(categories.length - 1).content.title}</span>
          </button>

          <div
            className={`category_card hidden z-30 left-[0px] w-[97vw] xl:w-[89vw] 2xl:w-[87vw]  group-hover:flex h-fit absolute bg-black`}
          >
            <CategoryCard
              section={section}
              category={categories.at(categories.length - 1)}
            ></CategoryCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationCategories;
