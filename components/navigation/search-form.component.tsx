import React, { useState, useRef, useEffect, useCallback } from "react";
import { selectSearch } from "../../redux/features/search/search.slice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { FiSearch } from "react-icons/fi";
import { MdClear } from "react-icons/md";
import {
  addToHistory,
  clearHistory,
} from "../../redux/features/search/search.slice";

const SearchForm = ({ showSearch, setShowSearch }) => {
  const [search, setSearch] = useState("");

  const searchRef = useRef<HTMLInputElement>(null);

  const recentSearchs = useAppSelector(selectSearch);
  const dispatch = useAppDispatch();

  const onClearSearchHistoryHandle = (event: any) => {
    event.preventDefault();

    dispatch(clearHistory());
  };

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

  // Handle to open the search application whenever
  // the user type any thing in the search input
  useEffect(() => {
    if (search.length > 0) {
      setShowSearch(true);
    }

    return () => {
      setShowSearch(false);
    };
  }, [search]);

  return (
    <form className="relative w-full " onSubmit={onSubmitSearchHandle}>
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
  );
};

export default SearchForm;
