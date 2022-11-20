import React from "react";
import { useRouter } from "next/router";
import Section_1 from "../../components/homeSections/Section_1.component";
import Section_2 from "../../components/homeSections/Section_2.component";
import Section_3 from "../../components/homeSections/Section_3.component";
import Section_4 from "../../components/homeSections/Section_4.component";
import Section_5 from "../../components/homeSections/Section_5.component";
import Image from "next/image";

const index = ({ sections }) => {
  return (
    <div className="h-full w-full ">
      <Section_1 data={sections[1]} />
      <Section_2 data={sections[2]} />
      <Section_3 data={sections[3]} />
      <Section_4 data={sections[4]} />
      <div className="flex justify-center">
        <img
          className="h-[190px] w-full"
          src="https://content.asos-media.com/-/media/hubs/gifting/2022/01_jpeg/gifting/dt_live-text-banner_2880x600.jpg"
        />
        <span className="absolute text-center text-2xl font-bold mt-[25px]">
          GET GIFTING <br />
          It's never too early to start ticking 'em off the list...
        </span>
        <button className="absolute hover:bg-white hover:text-black transition-all duration-300 self-end mb-[1.3%] bg-gray-900 text-white tracking-widest text-[16px] font-bold uppercase px-5 py-3">
          discover more
        </button>
      </div>
      <div className="flex justify-center mt-10">
        <img
          className="h-[160px] w-full"
          src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/07_july/premier-re-brand/live-assets/desktop-banner-2880x320_compress.jpg"
        />
        <img
          className="absolute mt-[1.5%]"
          src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/07_july/premier-re-brand/logo-dt-mob---493x46--v2.png"
        />
        <span className="absolute mt-[5.5%] text-gray-900 tracking-wide text-2xl font-bold  pb-20">
          Unlimited free Next Day Delivery for a whole year for $24.99
        </span>
        <span className="text-xs absolute self-end pb-3">
          Minimum spend and Ts&Cs apply
        </span>
      </div>
      <Section_5 data={sections[5]} />
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

export async function getStaticProps({ params: { mainRouteId } }) {
  const response = await fetch("http://localhost:3000/api/homePageData");
  const homePageData = await response.json();

  const sections = homePageData[0].children;

  return {
    props: {
      sections: sections,
    },
  };
}

export default index;
