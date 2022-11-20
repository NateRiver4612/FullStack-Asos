import React from "react";
import Image from "next/image";

const Section_3 = ({ data }) => {
  const listItem = data.children;
  return (
    <div className="flex justify-center pt-7">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 justify-between w-[92%] xl:w-[72%]">
        {listItem.map((item, index) => {
          const { webLargeImageUrl, title, subTitle } = item.content;
          return (
            <div
              key={item.id + index}
              className="flex flex-col items-center tracking-wider"
            >
              <Image src={webLargeImageUrl} width={300} height={390} />
              <span className="uppercase text-sm lg:text-lg font-bold pt-4">
                {title}
              </span>
              <span className="capitalize mt-2">{subTitle}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section_3;
