"use client";

import Link from "next/link";
import { pathOr } from "ramda";
import { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";

import ButtonCircle3 from "@/shared/Button/ButtonCircle3";
import SectionMoreProducts from "./SectionMoreProducts";
import SectionProductHeader from "./SectionProductHeader";

// Function to fetch product data from the API
const fetchProductData = async (id: string) => {
  const response = await fetch(`/api/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await response.json();
  return products.find((item: { slug: string }) => item.slug === id);
};

type Props = {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const SingleProductPage = (props: Props) => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const product = await fetchProductData(props.params.productId);
        setSelectedProduct(product);
      } catch (error) {
        setError("Failed to fetch product data.");
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [props.params.productId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-xl font-semibold">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-xl font-semibold text-red-500">{error}</span>
      </div>
    );
  }

  return (
    <div className="container">
      <Link href="/products" className="mb-10">
        <ButtonCircle3 size="w-10 h-10" className="border border-neutral-300">
          <MdArrowBack className="text-2xl" />
        </ButtonCircle3>
      </Link>

      <div className="mb-20">
        <SectionProductHeader
          id={pathOr("", ["id"], selectedProduct)}
          refiner={pathOr("", ["refiner"], selectedProduct)}
          material={pathOr("", ["material"], selectedProduct)}
          fineness={pathOr("", ["fineness"], selectedProduct)}
          fineweight={pathOr("", ["fineWeight"], selectedProduct)}
          dimensions={pathOr("", ["dimensions"], selectedProduct)}
          quality={pathOr("", ["quality"], selectedProduct)}
          packaging={pathOr("", ["packaging"], selectedProduct)}
          kinebar={pathOr("", ["kinebar"], selectedProduct)}
          shots={pathOr([], ["shots"], selectedProduct)}
          productName={pathOr("", ["productName"], selectedProduct)}
          availability={pathOr("", ["availability"], selectedProduct)}
          productType={pathOr("", ["productType"], selectedProduct)}
          description={pathOr("", ["description"], selectedProduct)}
        />
      </div>
      <div className="mb-28">
        <SectionMoreProducts />
      </div>
    </div>
  );
};

export default SingleProductPage;
