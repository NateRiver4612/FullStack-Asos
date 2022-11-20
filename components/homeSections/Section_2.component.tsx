import React from "react";

const Section_2 = ({ data }) => {
  const item = data.children[0];

  return (
    <div>
      <img src={item.content.webLargeImageUrl} />
    </div>
  );
};

export default Section_2;
