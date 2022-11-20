import React from "react";
import Image from "next/image";

const Section_5 = ({ data }) => {
  const listItem = data.children;

  return (
    <div className="mt-[3%] text-center">
      <h1 className="tracking-widest text-2xl font-bold mt-[2%]">
        TRENDING BRANDS
      </h1>
      <div className="flex justify-center gap-4 mt-[2%]">
        {listItem.map((item) => {
          const { webLargeImageUrl, title, subTitle } = item.content;
          return (
            <div>
              <Image height={200} width={200} src={webLargeImageUrl} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section_5;
