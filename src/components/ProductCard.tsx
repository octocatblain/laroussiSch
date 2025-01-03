"use client";
import Link from "next/link";
import type { FC } from "react";

import type { ProductType } from "@/data/types";
import Image from "next/image";
// import Variant from "@/shared/Variant/Variant";

interface ProductCardProps {
  product: ProductType;
  className?: string;
}

const ProductCard: FC<ProductCardProps> = ({ product, className }) => {
  const { coverImage, productName, price, slug } = product;
  return (
    <div className={`relative rounded-xl ${className}`}>
      <div className="relative h-[430px] overflow-hidden rounded-xl">
        {" "}
        <Image
          src={coverImage}
          alt="coverImage"
          className="h-full w-full object-cover object-top"
          width={500}
          height={500}
        />
        <Link
          href={`/products/${slug}`}
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <div className="mt-5 space-y-1">
        <div className="flex items-center justify-between">
          <Link href={`/products/${slug}`} className="text-2xl font-medium">
            {productName}
          </Link>
          {/* <Variant /> */}
        </div>
        <p className="text-2xl font-medium text-secondary">
          $
          {price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
