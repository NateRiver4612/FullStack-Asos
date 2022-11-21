import React from "react";
import Image from "next/image";

const Section_5 = ({ data }) => {
  const listItem = data.children;

  return (
    <div className="mt-[10%] xl:mt-[3%] text-center">
      <h1 className="tracking-wide text-md xl:text-2xl font-bold">
        TRENDING BRANDS
      </h1>
      <div className="flex justify-center flex-wrap xl:gap-6 mt-[3%] px-0 xl:px-4 lg:px-1">
        {listItem.map((item, index) => {
          const { webLargeImageUrl, title, subTitle } = item.content;
          return (
            <div key={item.id + index} className="cursor-pointer">
              <Image height={185} width={185} src={webLargeImageUrl} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section_5;
