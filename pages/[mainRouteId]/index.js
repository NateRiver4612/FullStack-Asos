import React from "react";
import {
  Section_1,
  Section_2,
  Section_3,
  Section_4,
  Section_5,
  Section_6,
  Mutual_Section_1,
  Mutual_Section_2,
} from "../../components/homeSections";

const index = ({ sections }) => {
  return (
    <div className="h-full w-full pb-20">
      <Section_1 data={sections[1]} />
      <Section_2 data={sections[2]} />
      <Section_3 data={sections[3]} />
      <Section_4 data={sections[4]} />
      <Mutual_Section_1 />
      <Mutual_Section_2 />
      <Section_5 data={sections[5]} />
      <Section_6 data={sections[6]} />
    </div>
  );
};

export async function getStaticPaths(context) {
  return {
    paths: [
      { params: { mainRouteId: "men" } },
      { params: { mainRouteId: "women" } },
    ],
    fallback: false,
  };
}

import { LoadHomePageData } from "../../utils/LoadHomePageData";

export async function getStaticProps({ params: { mainRouteId } }) {
  const homePageData = await LoadHomePageData();

  var sections;

  if (mainRouteId == "men") {
    sections = homePageData[0].children;
  } else if (mainRouteId == "women") {
    sections = homePageData[1].children;
  }

  return {
    props: {
      sections: sections,
    },
  };
}

export default index;
