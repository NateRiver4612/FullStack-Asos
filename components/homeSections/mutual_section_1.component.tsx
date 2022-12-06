import React from "react";
import Image from "next/image";

const Mutual_Section_1 = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full -z-10 h-[190px] relative">
        <Image
          objectFit="cover"
          layout="fill"
          src="https://content.asos-media.com/-/media/hubs/gifting/2022/01_jpeg/gifting/dt_live-text-banner_2880x600.jpg"
        />
      </div>

      <span className="absolute text-center break-normal w-[70%] md:w-full text-md md:text-lg lg:text-2xl font-bold mt-[25px]">
        GET GIFTING <br />
        It's never too early to start ticking 'em off the list...
      </span>
      <button className="absolute  hover:bg-white hover:text-black transition-all duration-300 self-end mb-[4%] lg:mb-[1.3%] bg-black text-white tracking-widest text-[16px] font-bold uppercase px-5 py-3">
        discover more
      </button>
    </div>
  );
};

export default Mutual_Section_1;
