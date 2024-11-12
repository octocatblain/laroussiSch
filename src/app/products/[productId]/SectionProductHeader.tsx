"use client";
import type { FC } from "react";

import ImageShowCase from "@/components/ImageShowCase";
import SizeSelect from "@/components/SizeSelect";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Heading from "@/shared/Heading/Heading";

interface SectionProductHeaderProps {
  shots?: string[];
  productName?: string;
  price?: number;
  reviews?: number;
  description?: string;
  refiner?: string;
  material?: string;
  fineness?: string;
  fineweight?: string;
  dimensions?: string;
  quality?: string;
  packaging?: string;
  kinebar?: string;
  productType?: string;
  availability?: string;
}

const SectionProductHeader: FC<SectionProductHeaderProps> = ({
  shots,
  productName,
  productType,
  availability,
  price,
  // reviews,
  description,
  refiner,
  material,
  fineness,
  fineweight,
  dimensions,
  quality,
  packaging,
  kinebar,
}) => {
  return (
    <div className="items-stretch justify-between space-y-10 lg:flex lg:space-y-0">
      <div className="basis-[47%]">
        <ImageShowCase shots={shots} />
      </div>

      <div className="basis-[48%] space-y-7">
        <Heading className="mb-0" isMain>
          {productName}
        </Heading>
        <p className="text-lg text-neutral-500">{description}</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex gap-2">
            <p className="font-semibold">Refiner: </p>
            <p className="text-neutral-500">{refiner}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Material: </p>
            <p className="text-neutral-500">{material}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Fineness: </p>
            <p className="text-neutral-500">{fineness}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Fine Weight: </p>
            <p className="text-neutral-500">{fineweight}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Availability: </p>
            <div className="flex items-center">
              {availability === "in-stock" ? (
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked
                    className="outline-green-500 text-green-500 rounded-full h-4 w-4"
                  />
                  {/* <span className="ml-2 text-semibold">In Stock</span> */}
                </div>
              ) : (
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    checked
                    name="default_radio"
                    className="h-4 w-4 text-red-500"
                  />
                  {/* <span className="ml-2 text-semibold">Out of Stock</span> */}
                </div>
              )}
              {/* <p className="text-neutral-500">{availability}</p> */}
            </div>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Dimensions: </p>
            <p className="text-neutral-500">{dimensions}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Quality: </p>
            <p className="text-neutral-500">{quality}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Packaging: </p>
            <p className="text-neutral-500">{packaging}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-semibold">Product Type: </p>
            <ProductTypeDisplay productType={productType} />
            {/* <p className="text-neutral-500">{productType}</p> */}
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Kinebar: </p>
            <p className="text-neutral-500">{kinebar}</p>
          </div>
        </div>
        {/* <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-yellow-400">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </div>
          <span className="text-sm text-neutral-500">({reviews}k)Reviews</span>
        </div> */}
        <p className="text-2xl font-semibold text-secondary">
          $
          {price?.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>

        <SizeSelect />

        {/* <div>
          <h4 className="mb-5 font-medium">Colours available</h4>
          <Variant sizes="w-8 h-8" />
        </div> */}

        {availability === "in-stock" ? (
          <div className="mt-5 flex items-center gap-5">
            <ButtonPrimary href="/checkout" className="w-full">
              Buy this Item
            </ButtonPrimary>
          </div>
        ) : (
          <div className="mt-5 flex items-center gap-5">
            <ButtonPrimary className="w-full !bg-slate-200 border border-slate-500 !text-black">
              Item is Out of Stock
            </ButtonPrimary>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionProductHeader;

const ProductTypeDisplay = ({ productType }: any) => {
  let productDisplay;

  switch (productType) {
    case "gold-coin":
      productDisplay = (
        <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
          <span className="text-black font-semibold">Coin</span>
        </div>
      );
      break;
    case "gold-bar":
      productDisplay = (
        <div className="w-24 h-8 bg-gold  rounded flex items-center justify-center">
          <span className="text-black font-semibold">Gold Bar</span>
        </div>
      );
      break;
    case "silver-coin":
      productDisplay = (
        <div className="w-8 h-8 rounded-full bg-silver flex items-center justify-center">
          <span className="text-black font-semibold">Coin</span>
        </div>
      );
      break;
    case "silver-bar":
      productDisplay = (
        <div className="w-24 h-8 bg-silver rounded  flex items-center justify-center">
          <span className="text-black font-semibold">Silver Bar</span>
        </div>
      );
      break;
    case "palladium-coin":
      productDisplay = (
        <div className="w-8 h-8 rounded-full bg-palladium flex items-center justify-center">
          <span className="text-black font-semibold">Coin</span>
        </div>
      );
      break;
    case "palladium-bar":
      productDisplay = (
        <div className="w-24 h-8 bg-palladium  rounded flex items-center justify-center">
          <span className="text-black font-semibold">Palladium Bar</span>
        </div>
      );
      break;
    case "bronze-coin":
      productDisplay = (
        <div className="w-8 h-8 rounded-full bg-bronze flex items-center justify-center">
          <span className="text-black font-semibold">Coin</span>
        </div>
      );
      break;
    case "bronze-bar":
      productDisplay = (
        <div className="w-24 h-8 bg-bronze flex rounded  items-center justify-center">
          <span className="text-black font-semibold">Bronze Bar</span>
        </div>
      );
      break;
    case "platinum-coin":
      productDisplay = (
        <div className="w-8 h-8 rounded-full bg-platinum flex items-center justify-center">
          <span className="text-black font-semibold">Coin</span>
        </div>
      );
      break;
    case "platinum-bar":
      productDisplay = (
        <div className="w-24 h-8 bg-platinum flex rounded  items-center justify-center">
          <span className="text-black font-semibold">Platinum Bar</span>
        </div>
      );
      break;
    default:
      productDisplay = <p className="text-neutral-500">{productType}</p>;
  }

  return <div className="flex items-center">{productDisplay}</div>;
};
