"use client";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

import { profilesPhotos } from "@/data/content";
import ButtonCircle from "@/shared/Button/ButtonCircle";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";

const SectionCategories = () => {
  return (
    <div className="container">
      <div className="grid gap-5 text-white md:h-[530px] md:grid-cols-2 lg:h-[500px]">
        <div className='relative h-[400px] w-full rounded-2xl bg-[url("https://images.pexels.com/photos/321452/pexels-photo-321452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] bg-cover bg-center bg-no-repeat md:h-full'>
          <div className="absolute bottom-5 left-0 w-full space-y-3 px-5">
            <h3 className="text-2xl font-medium">
              LaRoucci SCH and ABAMA relies on precious metals and precious
              stones
            </h3>
            <p className="text-neutral-100">
              Precious metals and precious stones are not just viewed as
              essential forms of security and future provision by the people of
              ABAMA. You too can depend on precious metals! Our team at the
              LaRoucci SCH and ABAMA is eager to provide guidance on the sale
              and purchase of precious metals and precious stones in LaRoucci
              SCH and ABAMA, secure storage solutions for your precious metals
              and precious stones , and any other related topics. Trust LaRoucci
              SCH and ABAMA for expert advice and support in navigating the
              world of precious metals and precious stones investments.
            </p>
            <div className="items-center gap-5 space-y-5 lg:flex lg:space-y-0">
              <ButtonPrimary className="w-full lg:w-auto">
                Laroucci SCH - Kenya | Abama - Africa
              </ButtonPrimary>
              {/* <ButtonSecondary className="flex w-full items-center gap-1 text-white lg:w-auto">
                <FaPlay /> Watch Trending
              </ButtonSecondary> */}
            </div>
          </div>
        </div>

        <div>
          <div className="flex h-[650px] flex-col gap-5 md:h-full">
            <div className="h-[63%] w-full rounded-2xl bg-[url('https://images.pexels.com/photos/8442335/pexels-photo-8442335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-bottom bg-no-repeat p-5">
              <div className="flex h-full w-full flex-col justify-between rounded-2xl border-2 border-white p-5">
                <div>
                  <ButtonSecondary className="flex text-[#ffd700] items-center gap-1 ">
                    {/* <FaPlay /> */}
                    Gold and Silver
                  </ButtonSecondary>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-medium">
                    Transparent online purchase of our products
                  </h3>
                  <p className="text-neutral-100">
                    Transparency is a core principle at LaRoucci SCH and ABAMA.
                    Whether purchasing precious metals through our web shop or
                    in our brick-and-mortar store in LaRoucci SCH and ABAMA, we
                    prioritize quick, straightforward, and crystal-clear
                    transactions.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-[35%] w-full flex-col justify-between rounded-2xl bg-primary p-5">
              <div className="flex items-center justify-between">
                <ButtonSecondary className="border-2 border-white bg-transparent uppercase text-black">
                  subscribe
                </ButtonSecondary>

                <div className="flex items-center -space-x-2">
                  {profilesPhotos.map((profile) => (
                    <div className="h-10 w-10" key={profile}>
                      <Image
                        width={300}
                        height={300}
                        className="h-full w-full rounded-full object-cover object-center"
                        src={profile}
                        alt="profile"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p
                  className="basis-[80%] text-2xl font-medium"
                  style={{ lineHeight: "1em" }}
                >
                  Subscribe to newsletter and get new deals and offers on all
                  Our Products.
                </p>
                <ButtonCircle size="bg-secondary w-10 h-10">
                  <BsArrowUpRight className="text-2xl" />
                </ButtonCircle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCategories;
