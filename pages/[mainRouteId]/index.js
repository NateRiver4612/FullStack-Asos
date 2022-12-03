import React from "react";
import Section_1 from "../../components/homeSections/section_1.component";
import Section_2 from "../../components/homeSections/section_2.component";
import Section_3 from "../../components/homeSections/section_3.component";
import Section_4 from "../../components/homeSections/section_4.component";
import Section_5 from "../../components/homeSections/section_5.component";
import Section_6 from "../../components/homeSections/section_6.component";

const index = ({ sections }) => {
  return (
    <div className="h-full w-full pb-20">
      <Section_1 data={sections[1]} />
      <Section_2 data={sections[2]} />
      <Section_3 data={sections[3]} />
      <Section_4 data={sections[4]} />
      <div className="flex justify-center">
        <img
          className="h-[190px] w-full object-cover"
          src="https://content.asos-media.com/-/media/hubs/gifting/2022/01_jpeg/gifting/dt_live-text-banner_2880x600.jpg"
        />
        <span className="absolute text-center break-normal w-[70%] md:w-full text-md md:text-lg lg:text-2xl font-bold mt-[25px]">
          GET GIFTING <br />
          It's never too early to start ticking 'em off the list...
        </span>
        <button className="absolute hover:bg-white hover:text-black transition-all duration-300 self-end mb-[4%] lg:mb-[1.3%] bg-black text-white tracking-widest text-[16px] font-bold uppercase px-5 py-3">
          discover more
        </button>
      </div>
      <div className="flex justify-center mt-10">
        <img
          className="h-[160px] w-full object-cover"
          src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/07_july/premier-re-brand/live-assets/desktop-banner-2880x320_compress.jpg"
        />
        <img
          className="absolute mt-[3%] md:mt-[2%] lg:mt-[1.5%] "
          src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/07_july/premier-re-brand/logo-dt-mob---493x46--v2.png"
        />
        <span className="absolute mt-[15%] sm:mt-[12%] md:mt-[9%] lg:mt-[6%] xl:mt-[5.5%] md:text-lg text-gray-900 tracking-wide text-md break-normal text-center w-[90%] lg:text-xl xl:text-2xl font-bold  pb-20">
          Unlimited free Next Day Delivery for a whole year for $24.99
        </span>
        <span className="text-xs absolute self-end pb-3">
          Minimum spend and Ts&Cs apply
        </span>
      </div>
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
