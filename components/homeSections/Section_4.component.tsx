import React from "react";
import Image from "next/image";

const Section_4 = ({ data }) => {
  const listItem = data.children;
  return (
    <div className="flex justify-center pb-10 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-[92%] xl:w-[71%]">
        {listItem.map((item, index) => {
          const { webLargeImageUrl, title, subTitle } = item.content;
          return (
            <div
              key={item.id + index}
              className="flex flex-col  items-center tracking-wider mt-5 cursor-pointer"
            >
              <div className="-z-10">
                <Image src={webLargeImageUrl} width={510} height={640} />
              </div>

              <span className="uppercase text-2xl font-bold pt-3">{title}</span>
              <span className="capitalize mt-2">{subTitle}</span>
              <button className="uppercase mt-3 hover:bg-black cursor-pointer hover:text-white transition-all duration-300 text-gray-800 font-bold tracking-widest text-[16px] border-2 py-3 px-5 border-gray-800 ">
                shop the trend
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section_4;
