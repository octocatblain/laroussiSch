import Image from "next/image";

import { productsCollection } from "@/data/content";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Heading from "@/shared/Heading/Heading";
import hero from "/public/assets/images/productsHero.jpg";

// const categories = [
//   "New arrivals",
//   "Linen",
//   "Tops",
//   "Shades",
//   "Dresses",
//   "Jackets",
// ];

const productCategories = [
  "Gold Coins",
  "Gold Bars",
  "Silver Coins",
  "Silver Bars",
  "Platinum Coins",
  "Platinum Bars",
  "Palladium Coins",
  "Palladium Bars",
  "Bronze Coins",
  "Bronze Bars",
];

const SectionProductsHeader = () => {
  return (
    <div className="space-y-10">
      <div className="h-[220px] w-full overflow-hidden rounded-2xl">
        <Image
          src={hero}
          alt="hero products"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <Heading desc={productsCollection.description} isMain>
        {productsCollection.heading}
      </Heading>

      <div className="hiddenScrollbar grid grid-cols-2 gap-5 overflow-y-hidden md:grid-cols-6">
        {productCategories.map((category) => (
          <ButtonSecondary className="w-full" key={category}>
            {category}
          </ButtonSecondary>
        ))}
      </div>
    </div>
  );
};

export default SectionProductsHeader;
