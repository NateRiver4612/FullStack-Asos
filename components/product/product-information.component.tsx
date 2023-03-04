import React, { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import Select from "react-select";
import LikeButton from "../styled-components/like-button.component";
import { useAuth } from "../../context/authUserContext";
import { Like } from "../../types";
import { useAppSelector } from "../../redux/hooks";
import { selectWishItems } from "../../redux/features/wish/wish.slice";

const ProductInformation = ({ product }) => {
  const options = [];

  const { variants, name, price } = product;

  const { authUser } = useAuth();
  const [isProductLiked, setIsProductLiked] = useState(false);

  const wishItems = useAppSelector(selectWishItems);

  const similar_items = JSON.parse(localStorage.getItem("items"));

  // Take product from list to apply Like Button parameter format
  const listProduct = similar_items.find((item) => item.id === product.id);

  // check product is Liked before by the user base on Id
  useEffect(() => {
    const isLiked =
      wishItems &&
      wishItems.find(
        (wish: { id: String; likes: Like[] }) =>
          wish.id == listProduct.id &&
          wish.likes.find((like: { id: String }) => like.id == authUser?.id)
      );

    if (isLiked) {
      return setIsProductLiked(true);
    }

    return setIsProductLiked(false);
  }, [wishItems, authUser]);

  variants.map((variant) => {
    if (variant.isInStock) {
      options.push({
        value: variant.brandSize.replaceAll(" ", " - "),
        label: variant.brandSize.replaceAll(" ", " - "),
      });
    } else {
      options.push({
        value: `${variant.brandSize} - Out of stock`,
        label: `${variant.brandSize} - Out of stock`,
        isDisabled: true,
      });
    }
  });

  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? "#e3e4eb"
          : isFocused
          ? "#e5e7eb"
          : undefined,
        color: isDisabled ? "#ccc" : "#757280",
      };
    },
  };

  return (
    <div className=" w-[80%] sm:w-[50%] sm:flex ml-6 2xl:ml-0 ">
      <div className="flex flex-col pt-6">
        <h1 className="text-[20px] text-gray-700 font-semibold tracking-wide">
          {name}
        </h1>
        <div className="mt-2 flex flex-col">
          <span className="font-bold text-[17px] tracking-wider text-[#d42051]">
            Now {price.current.text}
          </span>
          <div className="flex text-[14px] sm:text-[12px] tracking-wide gap-2">
            <span className="text-gray-500">RRP {price.previous.text}</span>
            <span className="text-[#d42051]">(-52%)</span>
          </div>
        </div>
        <div className="mt-4 flex text-[15px] sm:text-[13px] gap-2 items-center">
          <div className="flex gap-2 text-gray-800">
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>
            <BsStarHalf></BsStarHalf>
          </div>
          <span className="text-[15px] sm:text-[15px] text-gray-600">4.7</span>
          <span className="text-gray-500 text-[15px] sm:text-[15px]">(3)</span>
        </div>
        <div className="flex flex-col mt-4  ">
          <span className="font-bold tracking-widest pb-2 text-gray-800 text-[12px]">
            SIZE:
          </span>
          <Select
            className="outline-none;"
            styles={colourStyles}
            options={options}
          />
        </div>
        <div>
          <div className="flex mt-4 items-center gap-3 ">
            <button className="uppercase bg-[#0a8950] w-full font-bold bg-black text-[10px] sm:text-[14px] tracking-widest text-white  py-2">
              add to bag
            </button>
            <div className="h-full flex items-center pt-2 w-[11%]">
              <LikeButton
                product={listProduct}
                isWishItem={undefined}
                isProductLiked={isProductLiked}
              ></LikeButton>
            </div>
          </div>
          <div className="flex flex-col p-4 border-[1px] border-gray-200 gap-4 mt-5 ">
            <div className="flex gap-3 tracking-wide text-gray-600">
              <MdOutlineLocalShipping size={20} />
              <span className="text-[10px] sm:text-[13px]">Free Delivery</span>
            </div>
            <div className="flex gap-3 text-gray-600">
              <TbTruckReturn size={20} />
              <div className=" gap-2 flex flex-col text-[10px] sm:text-[13px] tracking-wide ">
                <span>Free Returns.</span>
                <span>Ts&Cs apply. More delivery info</span>
              </div>
            </div>
          </div>
          <div className="p-4 border-gray-200 border-x-[1px] border-b-[1px]">
            <span className="text-[8px] sm:text-[10px] underline text-gray-500 tracking-wider">
              This product has shipping restrictions.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
