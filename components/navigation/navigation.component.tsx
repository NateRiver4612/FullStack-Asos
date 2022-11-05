import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
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
import { useRouter } from "next/router";

import {
  addToHistory,
  clearHistory,
} from "../../redux/features/search/search.slice";
import { selectSearch } from "../../redux/features/search/search.slice";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import { fontSize } from "@mui/system";

//https://asos2.p.rapidapi.com/v2/auto-complete?store=US&country=US&currency=USD&sizeSchema=US&lang=en-US&q=sexy mini dress

const categoriesArr = [
  "sale",
  "new in",
  "clothing",
  "dresses",
  "shoes",
  "sportwear",
  "accessories",
  "autumn",
  "gifting",
  "topshop",
  "face + body",
  "brands",
];

const Navigation = () => {
  const router = useRouter();

  const section = router.pathname.split("/")[1];

  const dispatch = useAppDispatch();
  const recentSearchs = useAppSelector(selectSearch);
  const searchRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [checked, setChecked] = useState(false);
  const [categories, setCategories] = useState(categoriesArr);

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      //Do whatever when esc is pressed
      setShowSearch(false);
      setSearch("");
      searchRef.current.value = "";
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  const onShowSearch = () => {
    console.log(showSearch);
    setShowSearch(true);
  };

  const onSubmitHandle = (event: any) => {
    event.preventDefault();

    let searchExisted = recentSearchs.includes(search);

    if (search.length > 0 && !searchExisted) {
      setSearch("");
      searchRef.current.value = "";
      dispatch(addToHistory(search));
    }
  };

  const onClearHandle = (event: any) => {
    event.preventDefault();

    dispatch(clearHistory());
  };

  const onHideSearch = () => {
    setShowSearch(false);
  };

  const onChangeHandle = (event: any) => {
    event.preventDefault();

    let text = event.target.value;

    if (text.length > 0) {
      setSearch(text);
    } else {
      setSearch("");
    }
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

  return (
    <div className="navigation-container ">
      <div
        onClick={onHideSearch}
        className={` ${
          showSearch
            ? "absolute z-10 h-screen transition-all duration-700 w-screen bg-black opacity-50"
            : "left-0 right-0 top-0 bottom-0"
        }`}
      ></div>
      <div className="header relative z-10 bg-[#2d2d2d] h-[60px]">
        <div className="h-full">
          <div className="flex text-white justify-between items-center h-full ">
            <div className="bg-black h-full flex items-center pr-6 xl:pl-28 pt-2 pl-8 lg:pl-12 md:pl-24  flex-shrink-0">
              <a>
                <Image
                  alt="ASOS logo"
                  color="white"
                  height={40}
                  width={70}
                  className="resize-none"
                  src="/logo.jpg"
                ></Image>
              </a>
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
              <form className="relative w-full " onSubmit={onSubmitHandle}>
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
                    onClick={onSubmitHandle}
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
                          onClick={onClearHandle}
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
                                key={index + searchKey}
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
              <ul className="flex h-full items-center gap-3 xl:gap-6 ">
                <li className="">
                  <div
                    onMouseEnter={() => {
                      console.log(checked);
                      setChecked(true);
                    }}
                    onMouseLeave={() => {
                      setChecked(false);
                    }}
                    className="overflow-hidden cursor-pointer"
                  >
                    <BiUser size={26}></BiUser>

                    <div
                      onMouseEnter={() => {
                        console.log(checked);
                        setChecked(true);
                      }}
                      onMouseLeave={() => {
                        setChecked(false);
                      }}
                      className={`fixed transition-all ${
                        !checked ? "max-h-0" : "max-h-[380px]"
                      } duration-500 xl:right-36 md:fixed md:right-0 Z-0 top-[60px] w-[325px] overflow-hidden bg-gray-100`}
                    >
                      <div className="h-full ">
                        <div className="h-fit flex justify-between bg-gray-200 p-3 items-center">
                          <div className="flex text-sm h-fit font-semibold text-gray-500 underline gap-2">
                            <a href="/">Sign In</a> <span>|</span>{" "}
                            <a href="/">Join</a>
                          </div>
                          <button
                            onClick={() => {
                              setChecked(false);
                            }}
                            className="text-black"
                          >
                            <MdClear size={27} />
                          </button>
                        </div>
                        <ul className="flex flex-col text-gray-600  capitalize">
                          {platMain.map((key) => {
                            const icon = map1.get(key);
                            return (
                              <li className="flex item-center px-6 py-[12px] hover:bg-gray-300">
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
        <div className="hidden xl:mx-[110px] text-[13px] mx-[3%] h-full md:flex">
          {categories.map((category, index) => {
            if (index == 0) {
              return (
                <button className="px-3 text-gray-200 capitalize tracking-wide overflow-hidden whitespace-nowrap relative  hover:text-black hover:[&>*]:bg-white">
                  <span className="-skew-x-12 px-4 font-bold flex items-center bg-[#d01345]  hover:transform-none h-[50px]">
                    <span>{category}</span>
                  </span>
                </button>
              );
            }
            return (
              <button className="px-3 text-gray-200  tracking-wide overflow-hidden whitespace-nowrap capitalize  hover:bg-white hover:text-black">
                <span>{category}</span>
              </button>
            );
          })}
          <button className="px-3 hidden lg:flex text-xs text-gray-200 capitalize overflow-hidden whitespace-nowrap relative  tracking-widehover:text-black hover:[&>*]:bg-white">
            <span className="-skew-x-12 px-4 font-bold flex items-center bg-[#d01345]  hover:transform-none h-[50px]">
              <span>Outlet</span>
            </span>
          </button>
          <button className="px-3 hidden xl:flex text-xs items-center text-gray-200   capitalize tracking-wide hover:bg-white hover:text-black">
            <span>Marketplace</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
