import React, { Fragment, useState } from "react";
import { MdClear } from "react-icons/md";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import {
  addToHistory,
  clearHistory,
} from "../../redux/features/search/search.slice";
import { selectSearch } from "../../redux/features/search/search.slice";
import Tooltip from "@mui/material/Tooltip";

//https://asos2.p.rapidapi.com/v2/auto-complete?store=US&country=US&currency=USD&sizeSchema=US&lang=en-US&q=sexy mini dress

const Navigation = () => {
  const dispatch = useAppDispatch();
  const recentSearchs = useAppSelector(selectSearch);

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  const onShowSearch = () => {
    setShowSearch(true);
  };

  if (recentSearchs) {
    console.log(recentSearchs);
  }

  const onSubmitHandle = (event: any) => {
    event.preventDefault();

    let searchExisted = recentSearchs.includes(search);

    if (search.length > 0 && !searchExisted) {
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

  return (
    <div className="navigation-container ">
      {showSearch && (
        <div
          onClick={onHideSearch}
          className="absolute z-10 h-screen w-screen bg-black opacity-50"
        ></div>
      )}
      <div className="header bg-[#2d2d2d] h-[60px]">
        <div className="h-full">
          <div className="flex text-white justify-between items-center h-full ">
            <div className="bg-black h-full flex items-center pr-3 xl:pl-28 pt-2 pl-8 lg:pl-12 md:pl-24  flex-shrink-0">
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
              <li className=" w-[115px] flex justify-center items-center">
                <a>WOMEN</a>
              </li>
              <li className="bg-[#525050] w-[115px] flex justify-center items-center">
                <a>MEN</a>
              </li>
            </ul>
            <div className="h-full w-full hidden sm:flex items-center px-6">
              <form className="relative w-full " onSubmit={onSubmitHandle}>
                <div className="flex items-center w-full">
                  <input
                    type="text"
                    placeholder="Search for items and brands"
                    autoComplete="off"
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
                  <div className="overflow-hidden">
                    <BiUser className="" size={26} onClick={handleCheck} />
                    <div
                      className={`fixed transition-all ${
                        checked ? "max-h-0" : "max-h-48"
                      } duration-500 xl:right-36 md:fixed md:right-0 -z-10 top-[60px] w-[325px] overflow-hidden bg-gray-500`}
                    >
                      <div className="h-[180px]"> Sign in | Sign up</div>
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
      <div className="navigation">Hello</div>
    </div>
  );
};

export default Navigation;
