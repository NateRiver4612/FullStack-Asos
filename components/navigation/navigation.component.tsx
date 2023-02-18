import React, { Fragment, useEffect, useState, useLayoutEffect } from "react";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { useRouter } from "next/router";
import SearchForm from "./search-form.component";
import { useAuth } from "../../context/authUserContext";
import Link from "next/link";
import NavigationAdd from "./navigation-ad.component";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("../sidebar/sidebar.component"), {
  ssr: true,
});
const ProfileCard = dynamic(() => import("./profile-card.component"), {
  ssr: true,
});
const CategoryCard = dynamic(
  () => import("../category-card/category-card.component"),
  { ssr: true }
);

const Navigation = ({ navigations }) => {
  const router = useRouter();
  const section = router.query.mainRouteId;

  const { authUser } = useAuth();

  const [showSearch, setShowSearch] = useState(false);
  const [showCategoryCard, setShowCategoryCard] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [currentNavigation, setCurrentNavigation] = useState(navigations[1]);

  const categories = currentNavigation?.children[4].children;

  //Set the current navigations depends on the route
  useEffect(() => {
    if (section === "women") {
      setCurrentNavigation(navigations[1]);
    } else if (section === "men") {
      setCurrentNavigation(navigations[0]);
    }
  }, [section]);

  const onHideSearch = () => {
    setShowSearch(false);
  };

  const onCloseSidebar = () => {
    setOpenSidebar(false);
  };

  //Remain category card at top of page when user scrolling
  useLayoutEffect(() => {
    const mainHeader = document.getElementsByClassName("category_card");

    // declare a variable that have the size of our header and nagivation bar as the LINE
    // so that when user scroll the categoy card cross the LINE
    // we will adjust the css so that the category card still stick to the main display
    let fixedTop = 108;

    const fixedHeader = () => {
      for (var i = 0; i < mainHeader.length; i++) {
        if (mainHeader[i] != undefined) {
          if (window.pageYOffset > fixedTop) {
            // Whenever user scroll throught the LINE
            // we will style it as fixed
            mainHeader[i].className =
              "category_card hidden z-30 lg:left-[16px] xl:left-[8.56%] 2xl:left-[7.15%] w-[97vw] xl:w-[89vw] 2xl:w-[87vw]  group-hover:flex fixed top-0 bg-black";
          } else {
            // other wise, keep default style
            if (mainHeader[i]) {
              mainHeader[i].className =
                "category_card hidden z-30 left-[0px] w-[97vw] xl:w-[89vw] 2xl:w-[87vw] group-hover:flex h-fit absolute bg-black";
            }
          }
        }
      }
    };
    window.addEventListener("scroll", fixedHeader);
  }, []);

  return (
    <Fragment>
      <Sidebar navigations={navigations} openSidebar={openSidebar} />

      <div
        onClick={onCloseSidebar}
        className={` ${
          openSidebar
            ? " z-30 h-screen fixed overflow-none top-0 bottom-0 transition-all duration-700 w-screen bg-black opacity-50"
            : "left-0 top-0 "
        }`}
      ></div>
      <div className={`navigation-container ${openSidebar && "-z-10"}`}>
        <div
          onClick={onHideSearch}
          className={` ${
            showSearch
              ? "absolute z-10 h-screen transition-all duration-700 w-screen bg-black opacity-50"
              : "left-0 right-0 top-0 bottom-0"
          }`}
        ></div>
        {/* CategoryCard Opacity Background */}
        {/* {showCategoryCard && (
          <div className=" absolute z-0 w-screen h-screen bg-black opacity-50"></div>
        )} */}
        <div
          className={`header relative ${
            openSidebar && "-z-10"
          } bg-[#2d2d2d] h-[60px]`}
        >
          <div className="h-full">
            <div className="flex text-white justify-between items-center h-full ">
              <div className="bg-black h-full flex items-center pr-6 xl:pl-28 gap-5 pl-2 lg:pl-12 flex-shrink-0">
                <button
                  // onClick={onToggleSidebar}
                  className=" lg:hidden"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas_SidebarNavigation"
                  role="button"
                  aria-controls="offcanvas_SidebarNavigation"
                >
                  <BiMenu size={26} className="ml-0" />
                </button>
                <Link href="/" className="pt-[5px]">
                  <a className="flex items-center">
                    <Image
                      alt="ASOS logo"
                      color="white"
                      height={39}
                      width={70}
                      className="resize-none"
                      src="/logo.jpg"
                    />
                  </a>
                </Link>
              </div>

              <ul className="hidden lg:flex h-full cursor-pointer font-bold text-xs tracking-widest">
                <Link href="/women">
                  <li
                    className={`${
                      section === "women" && "bg-[#525050]"
                    } hover:bg-[#525050] transition-all duration-300 w-[115px] flex justify-center items-center`}
                  >
                    WOMEN
                  </li>
                </Link>

                <Link href="/men">
                  <li
                    className={`${
                      section === "men" && "bg-[#525050]"
                    } hover:bg-[#525050] transition-all duration-300 w-[115px] flex justify-center items-center`}
                  >
                    MEN
                  </li>
                </Link>
              </ul>
              <div className="h-full w-full hidden sm:flex items-center px-6">
                <SearchForm
                  showSearch={showSearch}
                  setShowSearch={setShowSearch}
                ></SearchForm>
              </div>
              <ProfileCard />
            </div>
          </div>
        </div>
        <div className={`navigation h-[50px] bg-[#525050] hidden lg:flex `}>
          <div className="hidden relative xl:mx-[110px] text-[13px] mx-4 h-full md:flex">
            {categories?.map((category, index: number) => {
              if (index != 1 && index != categories.length - 1) {
                return (
                  <div
                    key={category.id}
                    onMouseEnter={() => {
                      setShowCategoryCard(true);
                    }}
                    onMouseLeave={() => {
                      setShowCategoryCard(false);
                    }}
                    className="group"
                  >
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
            <div
              onMouseEnter={() => {
                setShowCategoryCard(true);
              }}
              onMouseLeave={() => {
                setShowCategoryCard(false);
              }}
              className="hidden xl:block group"
            >
              <button className="px-3 h-full text-gray-200 tracking-wide overflow-hidden whitespace-nowrap capitalize  hover:bg-white hover:text-black">
                <span>
                  {categories.at(categories.length - 1).content.title}
                </span>
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
        <NavigationAdd section={section} />
      </div>
    </Fragment>
  );
};

//  <div className="hidden left-0 top-[110px] h-[calc(100%_-_110px)] z-30 right-0 absolute bg-transparent hover:hidden  group-hover:flex px-[2%] xl:pl-[8.6%] xl:pr-[5.7%] 2xl:pr-[10%] 2xl:pl-[7.2%]">
//    <CategoryCard category={category}></CategoryCard>
//  </div>;

//  <div className="bg-gray-200 opacity-100 z-30 static w-full h-[65%] "></div>;

export default Navigation;
