import React, { Fragment } from "react";
import Image from "next/image";
import TextList from "./category-container/textList.component";
import CircleImageListLarge from "./category-container/circleImageListLarge.component";
import GridCircleImageLarge from "./category-container/gridCircleImageLarge.component";
import FullMarketingImage from "./category-container/fullMarketingImage.component";
import ThirdMarketingImage from "./category-container/thirdMarketingImage.component";
import HalfMarketingImage from "./category-container/halfMarketingImage.component";

const CategoryCard = ({ category }) => {
  var categoryContainers = category?.children;

  categoryContainers = categoryContainers?.filter(
    (container) =>
      container.content.title.includes("App and Mobile") == false &&
      // container.content.title.includes("CTA") == false &&
      container.content.title.includes("App & Mobile") == false
  );

  return (
    <div className="w-full h-full bg-gray-100 flex relative">
      {categoryContainers?.map((container) => {
        const categoryItems = container.children;
        const categoryDisplay = container.display;

        if (categoryItems.length > 0) {
          return (
            <Fragment>
              <div className="w-fit py-5 px-8">
                {container.content.title.includes("CTA") == false && (
                  <h1 className="uppercase font-bold underline underline-offset-4 tracking-wider text-[14px]">
                    {container.content.title}
                  </h1>
                )}
                {(categoryDisplay.webLargeTemplateName == "textList" ||
                  categoryDisplay.webLargeTemplateName == "") && (
                  <TextList categoryItems={categoryItems}></TextList>
                )}
                {categoryDisplay.webLargeTemplateName ==
                  "circleImageListLarge" && (
                  <CircleImageListLarge
                    categoryItems={categoryItems}
                  ></CircleImageListLarge>
                )}
                {categoryDisplay.webLargeTemplateName ==
                  "gridCircleImageLarge" && (
                  <GridCircleImageLarge
                    categoryItems={categoryItems}
                  ></GridCircleImageLarge>
                )}
                {categoryDisplay.webLargeTemplateName ==
                  "fullMarketingImage" && (
                  <FullMarketingImage
                    categoryItems={categoryItems}
                  ></FullMarketingImage>
                )}
                {categoryDisplay.webLargeTemplateName ==
                  "thirdMarketingImage" && (
                  <ThirdMarketingImage
                    categoryItems={categoryItems}
                  ></ThirdMarketingImage>
                )}
                {categoryDisplay.webLargeTemplateName ==
                  "halfMarketingImage" && (
                  <HalfMarketingImage
                    categoryItems={categoryItems}
                  ></HalfMarketingImage>
                )}
              </div>
              <div className="w-[1px]  mt-[2%] mb-[2%] border-gray-200 border-r-[1px]"></div>
            </Fragment>
          );
        }
      })}
    </div>
  );
};

export default CategoryCard;
