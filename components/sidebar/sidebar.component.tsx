import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";
import Link from "next/link";
import { Sidebar_CircleImageList } from "./sidebar-section.component/Sidebar-CircleImageList.component";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { MdArrowBackIos } from "react-icons/md";
import { Sidebar_CircleImageRight } from "./sidebar-section.component/Sidebar-CirlcleImageRight.component";

const SidebarCard = ({ gender, openSidebar, category, setCategory }) => {
  return (
    <div
      className={`lg:hidden z-40 fixed top-0 bottom-0 ${
        category && openSidebar ? "w-[315px]" : "w-0"
      } transition-all overflow-hidden duration-150 h-full bg-white`}
    >
      <div className="h-[60px] px-4 cursor-pointer flex items-center uppercase text-sm text-gray-800 border-b-2 font-bold">
        <MdArrowBackIos onClick={() => setCategory(null)} size={25} />
        <span className="w-full text-center text-lg tracking-widest ">
          {category?.content.title}
        </span>
      </div>
      <ul className="h-full w-full overflow-x-hidden pb-24 flex flex-col overflow-scroll relative">
        {category?.children.map((section, index) => {
          console.log(section);
          if (section.content.title.includes("App")) {
            const items = section.children;
            return (
              items.length > 0 && (
                <div key={section.id + index} className="px-4 py-4">
                  <Swiper
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                  >
                    {items.map((item, index) => {
                      console.log(item);
                      return (
                        <SwiperSlide key={item.id + index}>
                          <li
                            className={`text-[15x] relative flex flex-start items-center cursor-pointer tracking-widest hover:font-bold  capitalize w-full  text-gray-800`}
                          >
                            <img
                              src={item.content.webLargeImageUrl}
                              alt="picture"
                            />
                            <div className="absolute font-bold flex items-center uppercase h-full w-full text-[18px] pl-4 text-black">
                              <p className={`w-[60%] text-gray-800`}>
                                {item.content.title}
                              </p>
                              <p className="font-light w-[40%]">
                                {item.content.subTitle}
                              </p>
                            </div>
                          </li>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              )
            );
          }
          return (
            section.children.length > 0 && (
              <Fragment>
                {section.content.title && (
                  <div className="bg-gray-200 w-screen px-4 py-5 ">
                    <span className="text-md font-bold tracking-wider  text-gray-800">
                      {section.content.title}
                    </span>
                  </div>
                )}

                {section.display.mobileTemplateName == "circleImageList" && (
                  <Sidebar_CircleImageList
                    gender={gender}
                    categoryItems={section.children}
                    categoryTitle={section.content.title}
                  />
                )}

                {section.display.mobileTemplateName == "circleImageRight" && (
                  <Sidebar_CircleImageRight
                    gender={gender}
                    categoryItems={section.children}
                    categoryTitle={section.content.title}
                  />
                )}
              </Fragment>
            )
          );
        })}
      </ul>
    </div>
  );
};

const Sidebar = ({ navigations, openSidebar }) => {
  const [gender, setGender] = useState("women");
  const [currentNavigation, setCurrentNavigation] = useState<any[]>(
    navigations[0].children
  );
  const [category, setCategory] = useState(null);

  const handleSetCurrentNavigation = (section: string) => {
    return setGender(section);
  };

  useEffect(() => {
    if (gender == "men") {
      return setCurrentNavigation(navigations[0].children);
    } else {
      return setCurrentNavigation(navigations[1].children);
    }
  }, [gender]);

  return (
    <Fragment>
      <div
        className={`lg:hidden z-40 fixed top-0 bottom-0 ${
          openSidebar ? "w-[315px]" : "w-0"
        } transition-all overflow-hidden duration-150 h-full bg-white`}
      >
        <ul className="h-[60px]  cursor-pointer flex items-center uppercase text-sm text-gray-800 border-b-2 font-bold">
          <li
            value="women"
            onClick={() => handleSetCurrentNavigation("women")}
            className={`px-4 ${
              gender == "women" && "text-gray-800 border-gray-800 border-b-2"
            } w-[50%] justify-center flex items-center h-full`}
          >
            women
          </li>
          <div className="w-[1px] h-[50%] border-r-2"></div>
          <li
            value="men"
            onClick={() => handleSetCurrentNavigation("men")}
            className={`px-4 ${
              gender == "men" && "text-gray-800 border-gray-800 border-b-2"
            } w-[50%] justify-center flex items-center h-full`}
          >
            men
          </li>
        </ul>
        <ul className="h-full w-full  pb-24 flex flex-col overflow-scroll overflow-x-hidden relative">
          {Array.isArray(currentNavigation) &&
            currentNavigation.map((navigation) => {
              const navigationItems = navigation.children;

              const multiDisplay =
                navigationItems.length >= 2 && navigationItems.length <= 6;

              if (navigation.content.title.includes("App and Mobile")) {
                return (
                  <div key={navigation.id} className="px-4">
                    <Swiper
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                      }}
                      autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay, Pagination]}
                      className="mySwiper"
                    >
                      {navigationItems.map((item, index) => {
                        return (
                          <SwiperSlide key={item.id + index}>
                            <li
                              key={item.id + index}
                              className={`text-[15x] relative flex flex-start items-center cursor-pointer tracking-widest hover:font-bold py-[5px] capitalize w-full  text-gray-500`}
                            >
                              <img
                                src={item.content.webLargeImageUrl}
                                alt="picture"
                              />
                              <div className="absolute top-3 font-bold uppercase h-full w-full text-[15px] pl-4 text-black">
                                <p className={`w-[50%]`}>
                                  {item.content.title}
                                </p>
                                <p className="font-light w-full">
                                  {item.content.subTitle}
                                </p>
                              </div>
                            </li>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                );
              }

              return (
                <Fragment key={navigation.id}>
                  {navigation.content.title != "Home" &&
                    navigation.content.title != "SPEND AND SAVE NEW" && (
                      <div className="bg-gray-200 w-screen px-5 py-5 mt-6">
                        <span className="text-lg uppercase font-bold tracking-wider text-black">
                          {navigation.content.title}
                        </span>
                      </div>
                    )}

                  <ul
                    key={navigation.id}
                    className={`grid mt-2 ${
                      multiDisplay ? "grid-cols-2" : "grid-cols-1"
                    }  `}
                  >
                    {navigationItems.map((item, index) => {
                      return (
                        <li
                          key={item.id + index}
                          onClick={() => setCategory(item)}
                          className={`text-[15x] px-4 py-[7px] relative flex  flex-start ${
                            multiDisplay
                              ? "text-xs  justify-center pb-14 [&>p]:top-[70%] leading-6"
                              : "text-md"
                          } items-center cursor-pointer tracking-widest hover:font-bold py-[5px] capitalize w-full  text-gray-500`}
                        >
                          <img
                            src={item.content.webLargeImageUrl}
                            alt="picture"
                          />

                          <p
                            className={`absolute  break-normal ${
                              multiDisplay
                                ? "text-center px-3"
                                : "text-start px-4"
                            } w-full font-bold uppercase  text-gray-800`}
                          >
                            {item.content.title}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </Fragment>
              );
            })}
        </ul>
      </div>
      <SidebarCard
        gender={gender}
        category={category}
        setCategory={setCategory}
        openSidebar={openSidebar}
      />
    </Fragment>
  );
};

export default Sidebar;
