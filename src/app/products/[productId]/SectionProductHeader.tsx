"use client";

import { useSession } from "@/contexts/SessionContext";
import axios from "axios"; // For API calls
import { FC, useEffect, useState } from "react";
import { BsBookmark, BsBookmarkFill, BsCheckCircleFill } from "react-icons/bs";

import ImageShowCase from "@/components/ImageShowCase";
import { useCart } from "@/contexts/cartContext";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Heading from "@/shared/Heading/Heading";
import { Product } from "@prisma/client";

interface SectionProductHeaderProps {
  id: string;
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
  id,
  productName,
  productType,
  availability,
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
  const session: any = useSession();
  const [isSaved, setIsSaved] = useState(false); // Track bookmark state
  const [productQuantity, setProductQuantity] = useState(1);

  // Check if the product is in the user's saved items
  useEffect(() => {
    const fetchSavedStatus = async () => {
      console.log("single session", session);
      console.log("id", id);
      try {
        if (session?.user?.id) {
          // Include the id as a query parameter in the request
          const response = await axios.get(`/api/products`, {
            params: { id },
          });
          console.log("Response for fetched product", response);
          setIsSaved(response.data.savedItems.some((item: any) => item.userId === session.user.id));
        }
      } catch (error) {
        console.error("Failed to fetch saved status:", error);
      }
    };

    fetchSavedStatus();
  }, [id, session?.user?.id]);


  // Handle bookmarking or unbookmarking a product
  const handleBookmarkClick = async () => {
    try {
      if (!session?.user?.id) {
        console.error("User is not logged in!");
        return;
      }

      if (isSaved) {
        await axios.delete(`/api/savedItems`, {
          data: {
            userId: session.user.id,
            productId: id,
          },
        });
        setIsSaved(false);
      } else {
        await axios.post(`/api/savedItems`, {
          userId: session.user.id,
          productId: id,
        });
        setIsSaved(true);
      }
    } catch (error) {
      console.error("Failed to toggle saved item:", error);
      alert("Failed to toggle saved item. Please try again.");
    }
  };


  // Function to handle input change
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const parsedValue = parseInt(value, 10);

    // Validate the input to ensure it's a positive integer
    if (!isNaN(parsedValue) && parsedValue > 0) {
      setProductQuantity(parsedValue);
    } else {
      // Optionally handle invalid input (e.g., reset to 1 or show an error)
      console.error("Invalid quantity. Please enter a positive number.");
    }
  };

  const { addToCart }: any = useCart();

  // onClick handler for the Buy Now button
  const onBuyNowClick = async () => {
    const productId = id; // Assuming `id` is the current product's ID
    const quantity = productQuantity; // Assuming `productQuantity` holds the selected quantity
    const userId = session?.user?.id;

    if (!userId) {
      console.error("User is not logged in.");
      return;
    }

    await handleBuyNow({ productId, quantity, userId }, addToCart);
  };

  // Buy button handler function
  const handleBuyNow = async (
    { productId, quantity, userId }: { productId: string; quantity: number; userId: string },
    addToCart: (productId: string, userId: string, quantity: number) => Promise<void>
  ) => {
    try {
      // Fetch product details by productId
      const response = await axios.get<Product>(`/api/products`, {
        params: { id: productId }, // Send the productId as a query param
      });

      const product = response.data;

      if (!product) {
        console.error("Product not found.");
        return;
      }

      console.log("Product:", product);
      console.log("Quantity:", quantity);
      console.log("User ID:", userId);

      // Add the product to the cart
      await addToCart(productId, userId, quantity);

      // Optionally, redirect to checkout
      // window.location.href = "/checkout";
    } catch (error) {
      console.error("Failed to fetch product or add to cart:", error);
    }
  };

  return (
    <div className="items-stretch justify-between space-y-10 lg:flex lg:space-y-0">
      <div className="basis-[47%]">
        <ImageShowCase shots={shots} />
      </div>

      <div className="basis-[48%] space-y-7 ml-3">
        <div className="flex justify-between items-center gap-2">
          <Heading className="!mx-0" isMain>
            {productName}
          </Heading>
          <div
            className={`cursor-pointer mb-6 ${isSaved ? "text-orange-500" : "text-neutral-500"}`}
            onClick={handleBookmarkClick}
          >
            {isSaved ? <BsBookmarkFill className="size-6" /> : <BsBookmark className="size-6" />}
          </div>
        </div>
        <p className="text-lg text-neutral-500">{description}</p>
        <div className="grid grid-cols-2 gap-2">
          {/* Product Details */}
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
                <input
                  type="checkbox"
                  checked
                  className="outline-green-500 text-green-500 rounded-full h-4 w-4"
                  readOnly
                />
              ) : (
                <input
                  type="radio"
                  checked
                  className="h-4 w-4 text-red-500"
                  readOnly
                />
              )}
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
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Kinebar: </p>
            <p className="text-neutral-500">{kinebar}</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="quantity" className="font-medium text-base text-gray-700">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              value={productQuantity}
              onChange={handleQuantityChange}
              min="1"
              className="border border-gray-300 rounded-md px-2 w-24 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
            <p className="text-base text-gray-600">Selected Quantity: {productQuantity}</p>
        </div>

        {availability === "in-stock" ? (
          <div className="mt-5 flex items-center gap-5">
            <ButtonPrimary onClick={onBuyNowClick} className="w-full flex items-center justify-center gap-2">
              <BsCheckCircleFill className="size-6" />
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
