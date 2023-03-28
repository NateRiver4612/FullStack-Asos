import React, { Fragment, useEffect, useState, useLayoutEffect } from "react";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { useRouter } from "next/router";
import SearchForm from "./search-form.component";
import { useAuth } from "../../context/authUserContext";
import Link from "next/link";
import NavigationAdd from "./navigation-ad.component";
import dynamic from "next/dynamic";
import NavigationOptions from "./navigation-options.components";
import NavigationCategories from "./navigation-categories.component";

const Sidebar = dynamic(() => import("../sidebar/sidebar.component"), {
  ssr: false,
});

const CategoryCard = dynamic(
  () => import("../category-card/category-card.component"),
  { ssr: false }
);

const Navigation = ({ navigations }) => {
  const router = useRouter();
  const section = router.query.mainRouteId;

  const [showSearch, setShowSearch] = useState(false);
  // const [showCategoryCard, setShowCategoryCard] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

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
          if (window && window.pageYOffset > fixedTop) {
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
              <div className="h-full w-full z-20 hidden sm:flex items-center px-6">
                <SearchForm
                  showSearch={showSearch}
                  setShowSearch={setShowSearch}
                ></SearchForm>
              </div>
              <NavigationOptions />
            </div>
          </div>
        </div>
        <NavigationCategories navigations={navigations}></NavigationCategories>
        <NavigationAdd section={section} />
      </div>
    </Fragment>
  );
};

export default Navigation;
