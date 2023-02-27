import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const Section_1 = dynamic(
  () => import("../../components/homeSections/section-1.component"),
  {
    loading: () => "Loading...",
    ssr: false,
  }
);

const Section_2 = dynamic(
  () => import("../../components/homeSections/section-2.component"),
  {
    loading: () => "Loading...",
    ssr: false,
  }
);

const Section_3 = dynamic(
  () => import("../../components/homeSections/section-3.component"),
  {
    ssr: false,
  }
);

const Section_4 = dynamic(
  () => import("../../components/homeSections/section-4.component"),
  {
    loading: () => "Loading...",
    ssr: false,
  }
);

const Section_6 = dynamic(
  () => import("../../components/homeSections/section-6.component"),
  {
    loading: () => "Loading...",
    ssr: false,
  }
);

const Section_5 = dynamic(
  () => import("../../components/homeSections/section-5.component"),
  {
    loading: () => "Loading...",
    ssr: false,
  }
);

const Mutual_Section_1 = dynamic(
  () => import("../../components/homeSections/mutual-section-1.component"),
  {
    loading: () => "Loading...",
    ssr: false,
  }
);

const Mutual_Section_2 = dynamic(
  () => import("../../components/homeSections/mutual-section-2.component"),
  {
    loading: () => "Loading...",
    ssr: false,
  }
);

const index = ({ sections }) => {
  return (
    <Fragment>
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
    </Fragment>
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
