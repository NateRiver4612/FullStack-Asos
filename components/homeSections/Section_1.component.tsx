import React from "react";
import Image from "next/image";

const Section_1 = ({ data }) => {
  const item = data.children[0];

  return (
    <div className="w-full h-full flex justify-center pt-[1px] cursor-pointer">
      <img src={item.content.webLargeImageUrl} />
    </div>
  );
};

export default Section_1;
