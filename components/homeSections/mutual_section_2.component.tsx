import React from "react";
import Image from "next/image";

const Mutual_Section_2 = () => {
  return (
    <div className="flex relative justify-center mt-10">
      <div className="h-[160px] flex justify-center w-full relative">
        <Image
          objectFit="cover"
          layout="fill"
          src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/07_july/premier-re-brand/live-assets/desktop-banner-2880x320_compress.jpg"
        />

        <div className="relative absolute w-[496px] h-[46px] mt-[3%] md:mt-[2%] lg:mt-[1.5%] ">
          <Image
            objectFit="cover"
            layout="fill"
            src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/07_july/premier-re-brand/logo-dt-mob---493x46--v2.png"
          />
        </div>
      </div>

      <span className="absolute mt-[15%] sm:mt-[12%] md:mt-[9%] lg:mt-[6%] xl:mt-[5.5%] md:text-lg text-gray-900 tracking-wide text-md break-normal text-center w-[90%] lg:text-xl xl:text-2xl font-bold  pb-20">
        Unlimited free Next Day Delivery for a whole year for $24.99
      </span>
      <span className="text-xs absolute self-end pb-3">
        Minimum spend and Ts&Cs apply
      </span>
    </div>
  );
};

export default Mutual_Section_2;
