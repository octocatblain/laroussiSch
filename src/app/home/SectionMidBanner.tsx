"use client";

import Image from "next/image";

import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import bgPattern from "/public/assets/images/background.svg";
import bannerImg from "/public/assets/images/banner.png";

const SectionMidBanner = () => {
  return (
    <div className="container">
      <div className="relative h-[400px] w-full overflow-hidden rounded-3xl bg-sky-blue md:h-[500px] lg:h-[650px]">
        {/* <Image
          src={bgPattern}
          alt="pattern"
          className="absolute inset-0 z-0 h-full w-full"
        /> */}
        <img
          src={bgPattern}
          alt="pattern"
          className="absolute inset-0 z-0 h-full w-full"
        />

        <Image
          src={bannerImg}
          alt="ladies"
          className="relative z-10 mx-auto object-contain md:w-[60%]"
        />
        <div className="absolute bottom-7 left-0 flex w-full justify-center">
          <ButtonSecondary
            fontSize="text-xl"
            className="glassmorphism z-20 w-[80%] border-2 border-white text-white md:w-[60%]"
          >
            Shop Now
          </ButtonSecondary>
        </div>
      </div>
    </div>
  );
};

export default SectionMidBanner;
