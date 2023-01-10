import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ProductDetailPage = ({ data }) => {
  const {
    media: { images },
    info,
    price,
    variants,
    brand,
    description,
    name,
    rating,
  } = data;

  console.log(data);

  return (
    <div className="flex flex-col ">
      <div className="flex">
        <div className="flex w-full h-full ">
          <div className="w-[20%] pl-6 lg:w-[40%] 2xl:w-[65%]  flex flex-col items-end pt-4 pr-2 gap-4  ">
            {images.map((image, index) => (
              <div>
                <Image height={52} width={40} src={`https://${image.url}`} />
              </div>
            ))}
          </div>
          <div className="w-full pl-6">
            <div className="h-full w-full">
              <img src="https://images.asos-media.com/products/brave-soul-cotton-ribbed-roll-neck-sweater-in-khaki/202867448-1-green?$n_640w$&wid=513&fit=constrain" />
            </div>
          </div>
        </div>
        <div className="w-[50%] 2xl:w-[65%] pl-6 flex flex-col pt-6">
          <h1 className="w-[90%] xl:w-[60%] text-[17px] text-gray-800 font-semibold tracking-wide">
            {name}
          </h1>
          <div className="mt-2 flex flex-col">
            <span className="font-bold text-lg tracking-wider text-[#d42051]">
              Now {price.current.text}
            </span>
            <div className="flex text-[13px] tracking-wide gap-2">
              <span className="text-gray-500"> RRP {price.previous.text}</span>
              <span className="text-[#d42051]">(-52%)</span>
            </div>
          </div>
          <div className="mt-4 flex gap-2 items-center">
            <div className="flex gap-2">
              <BsStarFill size={15}></BsStarFill>
              <BsStarFill size={15}></BsStarFill>
              <BsStarFill size={15}></BsStarFill>
              <BsStarFill size={15}></BsStarFill>
              <BsStarHalf size={15}></BsStarHalf>
            </div>
            <span className="text-[15px] text-gray-600">4.7</span>
            <span className="text-gray-500 text-[15px]">(3)</span>
          </div>
          <div className="flex flex-col mt-4">
            <span className="font-bold tracking-widest text-gray-800 text-[12px]">
              SIZE:
            </span>
            <select className="w-[50%] outline-none text-[14px] border-2 border-gray-500 tracking-wide py-[6px] mt-2">
              {variants.map((size) => {
                return size.isInStock ? (
                  <option className="py-24 flex ">
                    <span className="py-4">
                      {size.brandSize.replaceAll(" ", "-")}
                    </span>
                  </option>
                ) : (
                  <option className="py-24 flex " disabled>
                    <span className="py-4">
                      {size.brandSize} - Out of stock
                    </span>
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex mt-4 items-center justify-between w-[50%] ">
            <button className="uppercase bg-[#0a8950] font-bold bg-black text-[14px] tracking-widest text-white w-[80%] py-2">
              add to bag
            </button>
            <AiOutlineHeart size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const axios = require("axios");

  const productId = context.params.productId;

  const options = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/products/v3/detail",
    params: {
      id: productId,
      lang: "en-US",
      store: "US",
      sizeSchema: "US",
      currency: "USD",
    },
    headers: {
      "X-RapidAPI-Key": "f906b6c3a6msh49a5389c512d5c0p1819eajsn3b16cc8b1128",
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);

  const data = response.data;

  return {
    props: {
      data: data,
    },
  };
};

export default ProductDetailPage;
