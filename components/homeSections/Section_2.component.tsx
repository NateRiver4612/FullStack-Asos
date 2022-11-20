import React from "react";
import Image from "next/image";

const Section_2 = ({ data }) => {
  const item = data.children[0];

  return (
    <div>
      <img
        className="object-cover w-full h-[100px] xl:h-[140px]"
        src={item.content.webLargeImageUrl}
      />
    </div>
  );
};

export default Section_2;
