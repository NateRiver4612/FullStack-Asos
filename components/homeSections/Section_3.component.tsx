import React from "react";
import Image from "next/image";

const Section_3 = ({ data }) => {
  const listItem = data.children;
  return (
    <div className="flex justify-center pt-7">
      <div className="grid grid-cols-4 justify-between w-[83%]">
        {listItem.map((item) => {
          const { webLargeImageUrl, title, subTitle } = item.content;
          return (
            <div className="flex flex-col items-center tracking-wider">
              <Image src={webLargeImageUrl} width={300} height={390} />
              <span className="uppercase text-lg font-bold pt-4">{title}</span>
              <span className="capitalize">{subTitle}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section_3;
