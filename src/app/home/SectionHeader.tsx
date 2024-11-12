"use client";

import Image from "next/image";

import { headerSection } from "@/data/content";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import heroImage from "/assets/images/hero.png";

const SectionHeader = () => {
  return (
    <div className="container">
      <div className="items-stretch justify-between rounded-3xl bg-primary lg:flex">
        <div className="basis-[50%] space-y-10 py-10 pl-5 text-white md:pl-10">
          <p className="text-2xl font-medium">{headerSection.title}</p>
          <div
            className="flex items-center gap-1 text-[40px] font-bold md:text-[70px]"
            style={{ lineHeight: "1em" }}
          >
            {headerSection.heading}
          </div>
          <div className="flex items-center gap-7">
            <ButtonSecondary href="/products">Shop Now</ButtonSecondary>
            
          </div>
        </div>
        <div className="flex basis-[47%] items-end overflow-hidden">
          <Image
            src={heroImage}
            alt="hero image"
            className="-mb-16 w-full object-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
