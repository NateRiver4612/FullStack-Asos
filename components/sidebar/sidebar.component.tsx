import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { MdClear } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/bundle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Sidebar = ({ navigations, openSidebar }) => {
  const [section, setSection] = useState("women");
  const [currentNavigation, setCurrentNavigation] = useState<any[]>(
    navigations[1]
  );

  const onSetSectionHandle = (sec: string) => {
    setSection(sec);
  };

  useEffect(() => {
    var navigationArr = [];

    if (section == "men") {
      navigationArr = navigations[0].children;
    } else {
      navigationArr = navigations[1].children;
    }

    // if (Array.isArray(navigationArr)) {
    //   navigationArr = navigationArr.filter(
    //     (navigation: { content: { title: string | string[] } }) =>
    //       navigation.content.title.includes("App and Mobile") == false
    //   );
    // }

    setCurrentNavigation(navigationArr);
  }, [section]);

  return (
    <div
      className={`lg:hidden z-40 absolute ${
        openSidebar ? "w-[320px]" : "w-0"
      } transition-all overflow-hidden duration-150 h-full bg-white`}
    >
      <ul className="h-[60px] cursor-pointer flex items-center uppercase text-sm text-gray-500 border-b-2 font-bold">
        <li
          value="women"
          onClick={() => onSetSectionHandle("women")}
          className={`px-4 ${
            section == "women" && "text-gray-800 border-gray-800 border-b-2"
          } w-[50%] justify-center flex items-center h-full`}
        >
          women
        </li>
        <div className="w-[1px] h-[50%] border-r-2"></div>
        <li
          value="men"
          onClick={() => onSetSectionHandle("men")}
          className={`px-4 ${
            section == "men" && "text-gray-800 border-gray-800 border-b-2"
          } w-[50%] justify-center flex items-center h-full`}
        >
          men
        </li>
      </ul>
      <ul className="h-full w-full p-4 pb-24 flex flex-col overflow-scroll relative">
        {Array.isArray(currentNavigation) &&
          currentNavigation.map((navigation) => {
            const navigationItems = navigation.children;

            if (navigation.content.title.includes("App and Mobile")) {
              return (
                <div>
                  <Swiper
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    key={navigation.id}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {navigationItems.map((item) => {
                      return (
                        <SwiperSlide key={item.id}>
                          <li
                            className={`text-[15x] relative flex flex-start items-center cursor-pointer tracking-widest hover:font-bold py-[5px] capitalize w-full  text-gray-500`}
                          >
                            <img
                              src={item.content.webLargeImageUrl}
                              alt="picture"
                            />
                            <p
                              className={`absolute break-normal font-bold uppercase  w-[50%] pl-4  text-black`}
                            >
                              {item.content.title}
                            </p>
                          </li>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              );
            }

            return (
              <ul
                key={navigation.id}
                className={`grid ${
                  navigationItems.length >= 2 && navigationItems.length <= 6
                    ? "grid-cols-2"
                    : "grid-cols-1"
                } gap-3`}
              >
                {navigationItems.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className={`text-[15x] relative flex flex-start ${
                        navigationItems.length >= 2 &&
                        navigationItems.length <= 6
                          ? "text-[11px] justify-center pb-14 [&>p]:top-[70%] leading-6"
                          : "text-[15px]"
                      } items-center cursor-pointer tracking-widest hover:font-bold py-[5px] capitalize w-full  text-gray-500`}
                    >
                      <img src={item.content.webLargeImageUrl} alt="picture" />

                      <p
                        className={`absolute  break-normal text-center font-bold uppercase  pl-4  text-black`}
                      >
                        {item.content.title}
                      </p>
                    </li>
                  );
                })}
              </ul>
            );
          })}
      </ul>
    </div>
  );
};

export default Sidebar;
