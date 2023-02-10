import React, { Fragment, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { Sidebar_CircleImageList } from "./sidebar-section.component/Sidebar-CircleImageList.component";
import { Sidebar_CircleImageRight } from "./sidebar-section.component/Sidebar-CirlcleImageRight.component";

const SidebarCard = ({ gender, category }) => {
  return (
    <div
      className="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-[315px] bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-96"
      tabIndex={-2}
      id="offcanvas_SidebarCard"
      aria-labelledby="offcanvas_SidebarCard_Label"
    >
      <div className="h-[60px] px-4 cursor-pointer flex items-center uppercase text-sm text-gray-800 border-b-2 font-bold">
        <MdArrowBackIos
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas_SidebarNavigation"
          role="button"
          aria-controls="offcanvas_SidebarNavigation"
          size={25}
        />
        <span className="w-full text-center text-lg tracking-widest ">
          {category?.content.title}
        </span>
      </div>
      <ul className="h-full w-full overflow-x-hidden pb-24 flex flex-col overflow-scroll relative">
        {category?.children.map((section, index) => {
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
                      return (
                        <SwiperSlide key={item.id + index}>
                          <li
                            key={item.id + index}
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
              <Fragment key={section.id + index}>
                {section.content.title &&
                  !section.content.title.includes("CTA") && (
                    <div className="bg-gray-200 w-screen px-4 py-5 ">
                      <span className="text-md font-bold tracking-wider  text-gray-800">
                        {section.content.title}
                      </span>
                    </div>
                  )}

                {section?.display?.mobileTemplateName == "circleImageList" && (
                  <Sidebar_CircleImageList
                    gender={gender}
                    categoryItems={section.children}
                    categoryTitle={section.content.title}
                  />
                )}

                {section?.display?.mobileTemplateName == "circleImageRight" && (
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

export default SidebarCard;
