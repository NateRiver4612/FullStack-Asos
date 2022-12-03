import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
} from "react";
import { MdClear } from "react-icons/md";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { FiPackage } from "react-icons/fi";
import { TbPackgeImport } from "react-icons/tb";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiMessageSquareDots } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { useRouter } from "next/router";

import {
  addToHistory,
  clearHistory,
} from "../../redux/features/search/search.slice";
import { selectSearch } from "../../redux/features/search/search.slice";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import Sidebar from "../sidebar/sidebar.component";
import CategoryCard from "../category-card/category-card.component";
import { FormControlUnstyled } from "@mui/base";

//https://asos2.p.rapidapi.com/v2/auto-complete?store=US&country=US&currency=USD&sizeSchema=US&lang=en-US&q=sexy mini dress

const Navigation = ({ navigations }) => {
  const router = useRouter();
  const section = router.query.mainRouteId;

  const dispatch = useAppDispatch();

  const recentSearchs = useAppSelector(selectSearch);
  const searchRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showCategoryCard, setShowCategoryCard] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [currentNavigation, setCurrentNavigation] = useState(navigations[1]);

  const categories = currentNavigation?.children[4].children;

  const escFunction = useCallback((event: { key: string }) => {
    if (event.key === "Escape") {
      //Do whatever when esc is pressed
      setShowSearch(false);
      setSearch("");
      searchRef.current.value = "";
    }
  }, []);

  //Listen to whenever user hit esc keyboard so that we turn off the search window
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  //Set the current navigations depends on the route
  useEffect(() => {
    if (section === "women") {
      setCurrentNavigation(navigations[1]);
    } else if (section === "men") {
      setCurrentNavigation(navigations[0]);
    }
  }, [section]);

  // Handle to open the search application whenever
  // the user type any thing in the search input
  useEffect(() => {
    if (search.length > 0) {
      setShowSearch(true);
    }
  }, [search]);

  const onShowSearch = () => {
    setShowSearch(true);
  };

  const onSubmitSearchHandle = (event: any) => {
    event.preventDefault();

    let searchExisted = recentSearchs.includes(search);

    if (search.length > 0 && !searchExisted) {
      setSearch("");
      searchRef.current.value = "";
      dispatch(addToHistory(search));
    }
  };

  const onClearSearchHistoryHandle = (event: any) => {
    event.preventDefault();

    dispatch(clearHistory());
  };

  const onHideSearch = () => {
    setShowSearch(false);
  };

  // Handle user typing text
  const onChangeHandle = (event: any) => {
    event.preventDefault();

    let text = event.target.value;

    if (text.length > 0) {
      setSearch(text);
    } else {
      setSearch("");
    }
  };

  const onToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const onCloseSidebar = () => {
    setOpenSidebar(false);
  };

  const map1 = new Map([
    ["my account", BiUser],
    ["my orders", FiPackage],
    ["my returns", TbPackgeImport],
    ["return information", AiOutlineQuestionCircle],
    ["contact preferences", BiMessageSquareDots],
  ]);

  const platMain = [
    "my account",
    "my orders",
    "my returns",
    "return information",
    "contact preferences",
  ];

  //Remain category card at top of page when user scrolling
  useLayoutEffect(() => {
    const mainHeader = document.getElementsByClassName("category_card");

    // declare a variable that have the size of our header and nagivation bar as the LINE
    // so that when user scroll the categoy card cross the LINE
    // we will adjust the css so that the category card still stick to the main display
    let fixedTop = 112;

    const fixedHeader = () => {
      for (var i = 0; i < mainHeader.length; i++) {
        if (mainHeader[i] != undefined) {
          if (window.pageYOffset > fixedTop) {
            // Whenever user scroll throught the LINE
            // we will style it as fixed
            mainHeader[i].className =
              "category_card hidden z-10 left-[1.5%]  2xl:left-[7.17%] w-[97vw] xl:w-[89vw] 2xl:w-[83vw] group-hover:flex fixed top-0 bg-black";
          } else {
            // other wise, keep default style
            if (mainHeader[i]) {
              mainHeader[i].className =
                "category_card hidden z-10 left-[0px] w-[97vw] xl:w-[89vw] 2xl:w-[83vw] group-hover:flex h-fit absolute bg-black";
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
            ? "absolute z-10 h-screen  transition-all duration-700 w-screen bg-black opacity-50"
            : "left-0 right-0 top-0 bottom-0"
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
        {showCategoryCard && (
          <div className="z-0 fixed  w-screen h-screen bg-black opacity-50"></div>
        )}
        <div
          className={`header relative ${
            openSidebar && "-z-10"
          } bg-[#2d2d2d] h-[60px]`}
        >
          <div className="h-full">
            <div className="flex text-white justify-between items-center h-full ">
              <div className="bg-black h-full flex items-center pr-6 xl:pl-28 gap-8 pl-8 lg:pl-12 flex-shrink-0">
                <button onClick={onToggleSidebar} className="lg:hidden">
                  <BiMenu size={26} className="ml-0" />
                </button>
                <Link href="/" className="pt-[5px]">
                  <Image
                    alt="ASOS logo"
                    color="white"
                    height={39}
                    width={70}
                    className="resize-none"
                    src="/logo.jpg"
                  ></Image>
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
                <form
                  className="relative w-full "
                  onSubmit={onSubmitSearchHandle}
                >
                  <div className="flex items-center w-full">
                    <input
                      type="text"
                      placeholder="Search for items and brands"
                      autoComplete="off"
                      ref={searchRef}
                      onClick={onShowSearch}
                      onChange={onChangeHandle}
                      className="h-[38px] w-full z-30 rounded-3xl focus:outline-none p-4 text-sm text-gray-600"
                    />
                    {search.length > 0 && (
                      <button className="absolute z-30 right-12">
                        <MdClear size={22} color="black" fontWeight="bold" />
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={search.length > 0 ? false : true}
                      className={`absolute  transition-all duration-300 z-30 right-1 ${
                        search.length > 0 ? "bg-[#2d2d2d]" : "bg-transparent"
                      }  rounded-full p-1.5`}
                    >
                      <FiSearch
                        size={22}
                        color={`${search.length > 0 ? "white" : "black"}`}
                        fontWeight="bold"
                      />
                    </button>
                    {showSearch && (
                      <div className=" absolute z-20 h-fit top-5 bg-gray-200 w-full">
                        <div className="w-full flex justify-between p-3 pt-8">
                          <span className="text-xs text-gray-400 uppercase font-bold tracking-widest">
                            Recent Searchs
                          </span>
                          <button
                            onClick={onClearSearchHistoryHandle}
                            className="text-xs text-black tracking-widest font-bold uppercase"
                          >
                            Clear
                          </button>
                        </div>

                        <ul className="w-full ">
                          {recentSearchs
                            .slice(0)
                            .reverse()
                            .map((searchKey, index) => {
                              return (
                                <li
                                  key={index}
                                  className="text-gray-700 hover:bg-gray-300 px-3 py-1 "
                                >
                                  {searchKey}
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    )}
                  </div>
                </form>
              </div>
              <div className="h-full mx-2 md:mr-6 lg:mr-10 xl:mr-36 ">
                <ul className="flex h-full items-center gap-6 md:gap-4 xl:gap-6 ">
                  <li className="">
                    <div className="overflow-hidden cursor-pointer group">
                      <BiUser size={26}></BiUser>

                      <div
                        className={`fixed transition-all 
                
                        max-h-0 group-hover:max-h-[380px] duration-500 xl:right-36 md:fixed md:right-0 z-20 top-[60px] w-[325px] overflow-hidden bg-gray-100`}
                      >
                        <div className="h-full">
                          <div className="static">
                            <div className="flex justify-center items-center w-full text-sm font-semibold text-gray-500 ">
                              <span className="hover:text-gray-900  hover:border-gray-800 border-b-2 p-3 h-[50px] text-center w-full">
                                <Link href="/">Sign In</Link>
                              </span>

                              <span className="border-gray-200 border-r-[1px] h-[30px] w-[0px]"></span>
                              <span className="hover:text-gray-900 hover:border-gray-800 border-b-2 p-3 h-[50px] text-center w-full">
                                <Link href="/">Join</Link>
                              </span>
                            </div>
                          </div>
                          <ul className="flex flex-col text-gray-600  capitalize">
                            {platMain.map((key, index) => {
                              const icon = map1.get(key);
                              return (
                                <li
                                  key={index}
                                  className="flex item-center px-6 py-[12px] hover:bg-gray-300"
                                >
                                  {icon({ size: 24 })}
                                  <div className="px-3"></div>
                                  <span className="text-sm">{key}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <Tooltip title="saved items" arrow>
                    <li>
                      <AiOutlineHeart size={26} />
                    </li>
                  </Tooltip>

                  <Tooltip title="bag" arrow>
                    <li>
                      <RiShoppingBagLine size={26} />
                    </li>
                  </Tooltip>

                  <Tooltip title="texting" arrow>
                    <li>
                      <AiOutlineMessage size={26} />
                    </li>
                  </Tooltip>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={`navigation h-[50px] bg-[#525050] hidden lg:flex `}>
          <div className="hidden relative xl:mx-[110px] text-[13px] mx-4 h-full md:flex">
            {categories?.map((category: any, index: number) => {
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
                      className={`category_card hidden z-10 left-[0px] w-[97vw] xl:w-[89vw] 2xl:w-[83vw] group-hover:flex h-fit absolute bg-black`}
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
                className={`category_card hidden z-10 left-[0px] w-[97vw] xl:w-[89vw] 2xl:w-[83vw] group-hover:flex h-fit absolute bg-black`}
              >
                <CategoryCard
                  section={section}
                  category={categories.at(categories.length - 1)}
                ></CategoryCard>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden bg-black h-[49px] w-full top-[50%] md:flex">
          <div
            className={`w-full h-full ${
              section == "men" ? "bg-[#9cf0e0]" : "bg-[#9d68fe]"
            } transition-all duration-500 font-bold flex flex-col items-center justify-center tracking-widest `}
          >
            <p className="uppercase text-[13px]">25% off all topman</p>
            <p className="capitalize text-[12px]">with code: TOP25</p>
          </div>
          <div
            className={`w-full h-full bg-black ${
              section == "men" ? "text-[#9cf0e0]" : "text-[#9d68fe]"
            } font-bold transition-all duration-700 flex flex-col items-center justify-center tracking-widest `}
          >
            <p className="uppercase text-[13px]">black friday warn-up</p>
            <p className="capitalize text-[12px]">with code: TOP25</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

//  <div className="hidden left-0 top-[110px] h-[calc(100%_-_110px)] z-30 right-0 absolute bg-transparent hover:hidden  group-hover:flex px-[2%] xl:pl-[8.6%] xl:pr-[5.7%] 2xl:pr-[10%] 2xl:pl-[7.2%]">
//    <CategoryCard category={category}></CategoryCard>
//  </div>;

//  <div className="bg-gray-200 opacity-100 z-30 static w-full h-[65%] "></div>;

export default Navigation;
