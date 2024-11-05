import type { NavItemType } from "@/components/NavItem";
import _ from "lodash";

import oneHundredGram from "@/images/products/gold/bars/100g.png";
import tenGram from "@/images/products/gold/bars/10g.png";
import twelvePointFiveKgVariant2 from "@/images/products/gold/bars/12500g-variant-2.png";
import twelvePointFiveKgVariant1 from "@/images/products/gold/bars/12500g-variant.png";
import twelvePointFiveKg from "@/images/products/gold/bars/12500g.png";
import oneGram from "@/images/products/gold/bars/1g.png";
import twentyGram from "@/images/products/gold/bars/20g.png";
import twoHundredFiftyGram from "@/images/products/gold/bars/250g.png";
import thirtyOneGram from "@/images/products/gold/bars/31.1g.png";
import threeHundredElevenGram from "@/images/products/gold/bars/311g.png";
import fiveHundredGram from "@/images/products/gold/bars/500g.png";
import fiftyGram from "@/images/products/gold/bars/50g.png";
import fiveGram from "@/images/products/gold/bars/5g.png";
import oneThousandGram from "../images/products/gold/bars/1000g.jpeg";

// silver bars
import silverOneKg from "@/images/products/silver/bars/1000g.png";
import silverOneKgVariant from "@/images/products/silver/bars/1000g2.png";
import silverOneKgVariant1 from "@/images/products/silver/bars/1000g3.png";
import silverOneKgVariant2 from "@/images/products/silver/bars/1000g4.png";
import silverOneHundredGram from "@/images/products/silver/bars/100g.png";
import silverTenGram from "@/images/products/silver/bars/10g.png";
import silverOneGram from "@/images/products/silver/bars/1g.png";
import silverTwentyGram from "@/images/products/silver/bars/20g.png";
import silverTwoFiftyGram from "@/images/products/silver/bars/250g.png";
import silverThirtyOneGram from "@/images/products/silver/bars/31.1g.png";
import silverThreeElevenGram from "@/images/products/silver/bars/311g.png";
import silverFiveHundredGram from "@/images/products/silver/bars/500g.png";
import silverFiftyGram from "@/images/products/silver/bars/50g.png";
import silverFiveGram from "@/images/products/silver/bars/5g.png";
import silverBack from "@/images/products/silver/bars/silver-back.png";

// platinum bars
import platinumThousandClear from "@/images/products/platinum/bars/1000g-clear.png";
import platinumThousandLeft from "@/images/products/platinum/bars/1000g-left.png";
import platinumThousandRight from "@/images/products/platinum/bars/1000g-right.png";
import platinumThousandSide from "@/images/products/platinum/bars/1000g-side.png";
import platinumThousandTop from "@/images/products/platinum/bars/1000g-top.png";
import platinumThousandGram from "@/images/products/platinum/bars/1000g.png";
import platinumHundredGram from "@/images/products/platinum/bars/100g.png";
import platinumTenGram from "@/images/products/platinum/bars/10g.png";
import platinumTwelveKgFlat from "@/images/products/platinum/bars/12500g-flat.png";
import platinumTwelveKgLeft from "@/images/products/platinum/bars/12500g-left.png";
import platinumTwelveKgTop from "@/images/products/platinum/bars/12500g-top.png";
import platinumTwelveKg from "@/images/products/platinum/bars/12500g.png";
import platinumOneGramFront from "@/images/products/platinum/bars/1g-top.png";
import platinumOneGram from "@/images/products/platinum/bars/1g.png";
import platinumTwentyGram from "@/images/products/platinum/bars/20g.png";
import platinumTwoHundredFiftyGram from "@/images/products/platinum/bars/250g.png";
import platinumThirtyOneGram from "@/images/products/platinum/bars/31.1g.png";
import platinumThreeHundredElevenGram from "@/images/products/platinum/bars/311g.png";
import platinumFiveHundredGram from "@/images/products/platinum/bars/500g.png";
import platinumFiftyGram from "@/images/products/platinum/bars/50g.png";
import platinumFiveGram from "@/images/products/platinum/bars/5g.png";

import back from "@/images/products/gold/bars/back.png";
import { BsGlobe, BsHouse, BsMailbox, BsPhone } from "react-icons/bs";
import type { BlogType } from "./types";

const ncNanoId = _.uniqueId;

// const otherPageChildMenus: NavItemType[] = [
//   {
//     id: ncNanoId(),
//     href: "/products",
//     name: "Collections",
//     type: "dropdown",
//     children: [
//       {
//         id: ncNanoId(),
//         href: "/products",
//         name: "Collections",
//       },
//       {
//         id: ncNanoId(),
//         href: "/products/sweat-outfit",
//         name: "Product Single",
//       },
//     ],
//   },
//   {
//     id: ncNanoId(),
//     href: "/",
//     name: "Utility Pages",
//     type: "dropdown",
//     children: [
//       {
//         id: ncNanoId(),
//         href: "/gg",
//         name: "404 not found",
//       },
//       {
//         id: ncNanoId(),
//         href: "/signup",
//         name: "Signup",
//       },
//       {
//         id: ncNanoId(),
//         href: "/login",
//         name: "Login",
//       },
//       {
//         id: ncNanoId(),
//         href: "/forgot-pass",
//         name: "Forgot Password",
//       },
//     ],
//   },
//   {
//     id: ncNanoId(),
//     href: "/blog",
//     name: "Blog Pages",
//     type: "dropdown",
//     children: [
//       {
//         id: ncNanoId(),
//         href: "/blog",
//         name: "Blog Page",
//       },
//       {
//         id: ncNanoId(),
//         href: "/blog/chic-sleek-latest-trends-fashion-wonderland",
//         name: "Blog Single",
//       },
//     ],
//   },
// ];

const productsChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/products/gold/bars",
    name: "Gold Bars",
  },
  {
    id: ncNanoId(),
    href: "/products/gold/coins",
    name: "Gold Coins",
  },
  {
    id: ncNanoId(),
    href: "/products/silver/bars",
    name: "Silver Bars",
  },
  {
    id: ncNanoId(),
    href: "/products/silver/coins",
    name: "Silver Coins",
  },
  {
    id: ncNanoId(),
    href: "/products/platinum/bars",
    name: "Platinum Bars",
  },
  {
    id: ncNanoId(),
    href: "/products/platinum/coins",
    name: "Platinum Coins",
  },
  {
    id: ncNanoId(),
    href: "/products/palladium/bars",
    name: "Palladium Bars",
  },
  {
    id: ncNanoId(),
    href: "/products/palladium/coins",
    name: "Palladium Coins",
  },
];

const servicesChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/services/wholesale",
    name: "Wholesale",
  },
  {
    id: ncNanoId(),
    href: "/services/investments",
    name: "Investment",
  },
  {
    id: ncNanoId(),
    href: "/services/shipping",
    name: "Shipping",
  },
  {
    id: ncNanoId(),
    href: "/services/storage",
    name: "Storage",
  },
  // {
  //   id: ncNanoId(),
  //   href: "/services/currency",
  //   name: "Foreign Currency",
  // },
  // {
  //   id: ncNanoId(),
  //   href: "/services/checkout-process",
  //   name: "Checkout Process",
  // },
];

// const galleryChildMenus: NavItemType[] = [
//   {
//     id: ncNanoId(),
//     href: "/gallery/precious-metals",
//     name: "Precious Metals",
//   },
//   {
//     id: ncNanoId(),
//     href: "/gallery/precious-stones",
//     name: "Precious Stones",
//   },
//   {
//     id: ncNanoId(),
//     href: "/gallery/laroucci-sch-media",
//     name: "LaRoucci SCH in the Media",
//   },
//   {
//     id: ncNanoId(),
//     href: "/gallery/references",
//     name: "References",
//   },
//   {
//     id: ncNanoId(),
//     href: "/gallery/chief-economist-bachheimer",
//     name: "Chief Economist Bachheimer",
//   },
//   {
//     id: ncNanoId(),
//     href: "/gallery/press-material",
//     name: "Press Material",
//   },
// ];

export const NavLinks: NavItemType[] = [
  {
    id: ncNanoId(),
    name: "Home",
    href: "/",
  },
  {
    id: ncNanoId(),
    name: "Products",
    href: "/products",
    type: "dropdown",
    children: productsChildMenus,
  },
  {
    id: ncNanoId(),
    name: "Services",
    href: "/services",
    type: "dropdown",
    children: servicesChildMenus,
  },
  // {
  //   id: ncNanoId(),
  //   name: "Gallery",
  //   href: "/gallery",
  //   type: "dropdown",
  //   children: galleryChildMenus,
  // },
  {
    id: ncNanoId(),
    href: "/faqs",
    name: "FAQS",
  },
  // {
  //   id: ncNanoId(),
  //   name: "Blog",
  //   href: "/blog",
  // },
  // {
  //   id: ncNanoId(),
  //   name: "Pages",
  //   href: "/",
  //   type: "dropdown",
  //   children: otherPageChildMenus,
  // },
  // {
  //   id: ncNanoId(),
  //   name: "Collections",
  //   href: "/products",
  // },
  {
    id: ncNanoId(),
    name: "Contact",
    href: "/contact",
  },
];

export const headerSection = {
  title: "GLOBAL MINING RESOURCES",
  heading: "Leading the Way in Precious Metals and Mineral Extraction",
};

export const headerBannerData = [
  {
    image: "/assets/logo/kenyanflag.png",
    // coverImage: <KenyanLogo className="h-5 w-5" />,
    title: "LaRoucci SCH High-Security Storage ",
    year: undefined,
  },
];

export const newItemsData = [
  {
    coverImage:
      "https://images.unsplash.com/photo-1624365168876-7916e095130c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Gold Bars",
    year: undefined,
  },
  {
    coverImage:
      "https://images.unsplash.com/photo-1643393670617-0915d3f6d1b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Platinum",
    year: undefined,
  },
  {
    coverImage:
      "https://images.unsplash.com/photo-1629103619851-74fef9837df4?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Gold Coins",
    year: undefined,
  },
  {
    coverImage:
      "https://images.unsplash.com/photo-1641324113223-e18be03c08d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
    title: "Silver Coins",
    year: undefined,
  },
];

export const midText =
  "Explore our extensive collection of premium precious metals, minerals, and mining services crafted to meet the highest industry standards.";

export const products = [
  {
    slug: "gold-bar-1g",
    coverImage: oneGram,
    productName: "1g Gold Bar",
    productType: "gold-bar",
    availability: "in-stock",
    price: 100,
    refiner: "LaRoucci SCH",
    material: "Gold",
    fineness: "999.9 / 1000",
    fineWeight: "1g",
    dimensions: "8mm x 15mm x 0.4mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "Our 1g Gold Bar, refined by LaRoucci SCH, is crafted from pure gold with a fineness of 999.9/1000. It has a fine weight of 1g and dimensions of 8mm x 15mm x 0.4mm. This high-quality bar is in new condition and comes packaged in its original capsule. Our Kinebar® includes a hologram, certificate, serial number, and an international proof mark, ensuring authenticity and security. Produced by LaRoucci SCH, a trusted name in gold refining.",
    shots: [oneGram, back],
  },
  {
    slug: "gold-bar-31g",
    coverImage: thirtyOneGram,
    productName: "31.1g Gold Bar",
    productType: "gold-bar",
    availability: "out-of-stock",
    price: 3100,
    refiner: "LaRoucci SCH",
    material: "Gold",
    fineness: "999.9 / 1000",
    fineWeight: "31.1g",
    dimensions: "24mm x 42mm x 2mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "Our 31.1g Gold Bar, refined by LaRoucci SCH, is crafted from pure gold with a fineness of 999.9/1000. It has a fine weight of 31.1g and dimensions of 24mm x 42mm x 2mm. This high-quality bar is in new condition and comes packaged in its original capsule. Our Kinebar® includes a hologram, certificate, serial number, and an international proof mark, ensuring authenticity and security.",
    shots: [thirtyOneGram, back],
  },

  {
    slug: "gold-bar-5g",
    coverImage: fiveGram,
    productName: "5g Gold Bar",
    productType: "gold-bar",
    availability: "in-stock",
    price: 500,
    refiner: "LaRoucci SCH",
    material: "Gold",
    fineness: "999.9 / 1000",
    fineWeight: "5g",
    dimensions: "23.3mm x 14mm x 0.83mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "Our 5g Gold Bar, refined by LaRoucci SCH, is crafted from pure gold with a fineness of 999.9/1000. It has a fine weight of 5g and dimensions of 23.3mm x 14mm x 0.83mm. This high-quality bar is in new condition and comes packaged in its original capsule. Our Kinebar® includes a hologram, certificate, serial number, and an international proof mark, ensuring authenticity and security.",
    shots: [fiveGram, back],
  },

  {
    slug: "gold-bar-20g",
    coverImage: twentyGram,
    productName: "20g Gold Bar",
    productType: "gold-bar",
    availability: "in-stock",
    price: 2000,
    refiner: "LaRoucci SCH",
    material: "Gold",
    fineness: "999.9 / 1000",
    fineWeight: "20g",
    dimensions: "22mm x 39mm x 1.3mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "Our 20g Gold Bar, refined by LaRoucci SCH, is crafted from pure gold with a fineness of 999.9/1000. It has a fine weight of 20g and dimensions of 22mm x 39mm x 1.3mm. This high-quality bar is in new condition and comes packaged in its original capsule. Our Kinebar® includes a hologram, certificate, serial number, and an international proof mark, ensuring authenticity and security.",
    shots: [twentyGram, back],
  },

  {
    slug: "gold-bar-10g",
    coverImage: tenGram,
    productName: "10g Gold Bar",
    productType: "gold-bar",
    availability: "in-stock",
    price: 1000,
    refiner: "LaRoucci SCH",
    material: "Gold",
    fineness: "999.9 / 1000",
    fineWeight: "10g",
    dimensions: "18mm x 31mm x 1mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "Our 10g Gold Bar, refined by LaRoucci SCH, is crafted from pure gold with a fineness of 999.9/1000. It has a fine weight of 10g and dimensions of 18mm x 31mm x 1mm. This high-quality bar is in new condition and comes packaged in its original capsule. Our Kinebar® includes a hologram, certificate, serial number, and an international proof mark, ensuring authenticity and security.",
    shots: [tenGram, back],
  },

  {
    slug: "gold-bar-50g",
    coverImage: fiftyGram,
    productName: "50g Gold Bar",
    productType: "gold-bar",
    availability: "in-stock",
    price: 5000,
    refiner: "LaRoucci SCH",
    material: "Gold",
    fineness: "999.9 / 1000",
    fineWeight: "50g",
    dimensions: "25mm x 45mm x 2.3mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "Our 50g Gold Bar, refined by LaRoucci SCH, is crafted from pure gold with a fineness of 999.9/1000. It has a fine weight of 50g and dimensions of 25mm x 45mm x 2.3mm. This high-quality bar is in new condition and comes packaged in its original capsule. Our Kinebar® includes a hologram, certificate, serial number, and an international proof mark, ensuring authenticity and security.",
    shots: [fiftyGram, back],
  },
  {
    slug: "gold-bar-100g",
    coverImage: oneHundredGram,
    productName: "100g Gold Bar",
    productType: "gold-bar",
    availability: "in-stock",
    price: 10000,
    refiner: "LaRoucci SCH",
    material: "Gold",
    fineness: "999.9 / 1000",
    fineWeight: "100g",
    dimensions: "31mm x 55mm x 3mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "Our 100g Gold Bar by LaRoucci SCH is crafted from pure gold with a fineness of 999.9/1000. With dimensions of 31mm x 55mm x 3mm, this high-quality bar comes in its original capsule packaging. Our Kinebar® includes a hologram, certificate, serial number, and an international proof mark, ensuring authenticity and security.",
    shots: [oneHundredGram, back],
  },

  {
    slug: "gold-bar-500g",
    coverImage: fiveHundredGram,
    productName: "500g Gold Bar",
    productType: "gold-bar",
    availability: "in-stock",
    price: 50000,
    refiner: "LaRoucci SCH",
    material: "Gold",
    fineness: "999.9 / 1000",
    fineWeight: "500g",
    dimensions: "65mm x 35mm. Bottom 57mm x 28mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "Our 500g Gold Bar by LaRoucci SCH is crafted from pure gold with a fineness of 999.9/1000. With dimensions of 65mm x 35mm (bottom: 57mm x 28mm), this high-quality bar comes in its original capsule packaging. Our Kinebar® includes a hologram, certificate, serial number, and an international proof mark, ensuring authenticity and security.",
    shots: [fiveHundredGram, back],
  },

  {
    slug: "gold-bar-250g",
    coverImage: twoHundredFiftyGram,
    productName: "250g Gold Bar",
    productType: "gold-bar",
    availability: "in-stock",
    price: 25000,
    refiner: "LaRoucci SCH",
    material: "Gold",
    fineness: "999.9 / 1000",
    fineWeight: "250g",
    dimensions: "57mm x 28.1mm x 9.7mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "Our 250g Gold Bar by LaRoucci SCH is crafted from pure gold with a fineness of 999.9/1000. With dimensions of 57mm x 28.1mm x 9.7mm, this high-quality bar comes in its original capsule packaging. Our Kinebar® includes a hologram, certificate, serial number, and an international proof mark, ensuring authenticity and security.",
    shots: [twoHundredFiftyGram, back],
  },

  {
    slug: "gold-bar-1000g",
    coverImage: oneThousandGram,
    productName: "1000g Gold Bar",
    productType: "gold-bar",
    availability: "in-stock",
    price: 100000,
    refiner: "LaRoucci SCH",
    material: "Gold",
    fineness: "999.9 / 1000",
    fineWeight: "1000g",
    dimensions: "40mm x 80mm x 18mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "Our 1000g Gold Bar by LaRoucci SCH is crafted from pure gold with a fineness of 999.9/1000. With dimensions of 40mm x 80mm x 18mm, this high-quality bar comes in its original capsule packaging. Our Kinebar® includes a hologram, certificate, serial number, and an international proof mark, ensuring authenticity and security.",
    shots: [oneThousandGram, back],
  },

  {
    slug: "gold-bar-311g",
    coverImage: threeHundredElevenGram,
    productName: "311g Gold Bar",
    productType: "gold-bar",
    availability: "in-stock",
    price: 31100,
    refiner: "LaRoucci SCH",
    material: "Gold",
    fineness: "999.9 / 1000",
    fineWeight: "311g",
    dimensions: "33mm x 57mm x 7mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "Our 311g Gold Bar by LaRoucci SCH is crafted from pure gold with a fineness of 999.9/1000. With dimensions of 33mm x 57mm x 7mm, this high-quality bar comes in its original capsule packaging. Our Kinebar® includes a hologram, certificate, serial number, and an international proof mark, ensuring authenticity and security.",
    shots: [threeHundredElevenGram, back],
  },

  {
    slug: "gold-bar-12.5kg",
    coverImage: twelvePointFiveKg,
    productName: "12.5kg Gold Bar",
    productType: "gold-bar",
    availability: "in-stock",
    price: 1250000,
    refiner: "LaRoucci SCH",
    material: "Gold",
    fineness: "999.9 / 1000",
    fineWeight: "12.5kg",
    dimensions: "Top 78.5 x 249 x 39mm; Base 228.5 x 62mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "Our 12.5kg Gold Bar by LaRoucci SCH is crafted from pure gold with a fineness of 999.9/1000. This bar has top dimensions of 78.5mm x 249mm x 39mm and a base of 228.5mm x 62mm. This high-quality bar comes in its original capsule packaging. Our Kinebar® includes a hologram, certificate, serial number, and an international proof mark, ensuring authenticity and security.",
    shots: [
      twelvePointFiveKg,
      back,
      twelvePointFiveKgVariant1,
      twelvePointFiveKgVariant2,
    ],
  },

  // Silver Bars
  {
    slug: "silver-bar-2.5g",
    coverImage: silverOneGram, // placeholder variable for image
    productName: "2.5g Silver Bar",
    productType: "silver-bar",
    availability: "in-stock",
    price: 250, // Example price, adjust as necessary
    refiner: "LaRoucci SCH",
    material: "Silver",
    fineness: "999.9 / 1000",
    fineWeight: "2.5g",
    dimensions: "22.1 x 13.1 x 0.83mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "Our 2.5g Silver Bar by LaRoucci SCH is crafted from pure silver with a fineness of 999.9/1000. This bar is securely packaged in its original capsule, featuring a hologram, certificate, serial number, and international proof mark for added authenticity and security.",
    shots: [silverOneGram, silverBack], // placeholders for image variables
  },
  {
    slug: "silver-bar-31.1g",
    coverImage: silverThirtyOneGram,
    productName: "31.1g Silver Bar",
    productType: "silver-bar",
    availability: "in-stock",
    price: 310,
    refiner: "LaRoucci SCH",
    material: "Silver",
    fineness: "999.9 / 1000",
    fineWeight: "31.1g",
    dimensions: "49.9mm x 28.9mm x 2mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "The 31.1g Silver Bar by LaRoucci SCH boasts a high level of purity, with a fineness of 999.9/1000. Packaged in its original capsule, it includes a hologram, certificate, serial number, and international proof mark, ensuring authenticity.",
    shots: [silverThirtyOneGram, silverBack],
  },
  {
    slug: "silver-bar-5g",
    coverImage: silverFiveGram,
    productName: "5g Silver Bar",
    productType: "silver-bar",
    availability: "in-stock",
    price: 50,
    refiner: "LaRoucci SCH",
    material: "Silver",
    fineness: "999.9 / 1000",
    fineWeight: "5g",
    dimensions: "14mm x 23mm x 0.83mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "Our 5g Silver Bar by LaRoucci SCH is made of pure silver with a fineness of 999.9/1000. It is securely packaged in its original capsule and includes a hologram, certificate, serial number, and proof mark.",
    shots: [silverFiveGram, silverBack],
  },
  {
    slug: "silver-bar-20g",
    coverImage: silverTwentyGram,
    productName: "20g Silver Bar",
    productType: "silver-bar",
    availability: "in-stock",
    price: 200,
    refiner: "LaRoucci SCH",
    material: "Silver",
    fineness: "999.9 / 1000",
    fineWeight: "20g",
    dimensions: "24mm x 40mm x 3mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "Our 20g Silver Bar by LaRoucci SCH is a premium silver bar with a high fineness of 999.9/1000. It includes a hologram, certificate, serial number, and proof mark, securely packaged in its original capsule.",
    shots: [silverTwentyGram, silverBack],
  },
  {
    slug: "silver-bar-10g",
    coverImage: silverTenGram,
    productName: "10g Silver Bar",
    productType: "silver-bar",
    availability: "in-stock",
    price: 100,
    refiner: "LaRoucci SCH",
    material: "Silver",
    fineness: "999.9 / 1000",
    fineWeight: "10g",
    dimensions: "15mm x 25mm x 0.83mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "The 10g Silver Bar by LaRoucci SCH is crafted with pure silver and has a fineness of 999.9/1000. It comes in original capsule packaging with a hologram, certificate, serial number, and proof mark.",
    shots: [silverTenGram, silverBack],
  },
  {
    slug: "silver-bar-50g",
    coverImage: silverFiftyGram,
    productName: "50g Silver Bar",
    productType: "silver-bar",
    availability: "in-stock",
    price: 500,
    refiner: "LaRoucci SCH",
    material: "Silver",
    fineness: "999.9 / 1000",
    fineWeight: "50g",
    dimensions: "49.7mm x 28.5mm x 3.6mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "This 50g Silver Bar by LaRoucci SCH is made from high-purity silver with a fineness of 999.9/1000. Packaged in its original capsule, it includes a hologram, certificate, serial number, and proof mark.",
    shots: [silverFiftyGram, silverBack],
  },
  {
    slug: "silver-bar-100g",
    coverImage: silverOneHundredGram,
    productName: "100g Silver Bar",
    productType: "silver-bar",
    availability: "in-stock",
    price: 1000, // Example price, adjust as necessary
    refiner: "LaRoucci SCH",
    material: "Silver",
    fineness: "999.9 / 1000",
    fineWeight: "100g",
    dimensions: "55mm x 31mm x 6mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "The 100g Silver Bar by LaRoucci SCH is crafted from pure silver with a fineness of 999.9/1000. This high-quality bar comes in its original capsule, including a hologram, certificate, serial number, and proof mark for authenticity.",
    shots: [silverOneHundredGram, silverBack],
  },
  {
    slug: "silver-bar-500g",
    coverImage: silverFiveHundredGram,
    productName: "500g Silver Bar",
    productType: "silver-bar",
    availability: "in-stock",
    price: 5000,
    refiner: "LaRoucci SCH",
    material: "Silver",
    fineness: "999.9 / 1000",
    fineWeight: "500g",
    dimensions: "69mm x 40mm x 69mm x 40mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "Our 500g Silver Bar by LaRoucci SCH features a purity of 999.9/1000 and comes in its original capsule, including a hologram, certificate, serial number, and proof mark for security and verification.",
    shots: [silverFiveHundredGram, silverBack],
  },
  {
    slug: "silver-bar-250g",
    coverImage: silverTwoFiftyGram,
    productName: "250g Silver Bar",
    productType: "silver-bar",
    availability: "in-stock",
    price: 2500,
    refiner: "LaRoucci SCH",
    material: "Silver",
    fineness: "999.9 / 1000",
    fineWeight: "250g",
    dimensions: "Top: 59mm x 29mm x 16mm; Bottom: 53mm x 23mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "The 250g Silver Bar by LaRoucci SCH is made from pure silver with a fineness of 999.9/1000, packaged in its original capsule with a hologram, certificate, serial number, and proof mark.",
    shots: [silverTwoFiftyGram, silverBack],
  },
  {
    slug: "silver-bar-1000g",
    coverImage: silverOneKg,
    productName: "1000g Silver Bar",
    productType: "silver-bar",
    availability: "in-stock",
    price: 10000,
    refiner: "LaRoucci SCH",
    material: "Silver",
    fineness: "999.9 / 1000",
    fineWeight: "1000g",
    dimensions: "117mm x 52mm x 14mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "Our 1000g Silver Bar by LaRoucci SCH is a premium-quality bar with a high fineness of 999.9/1000. It comes in its original capsule and includes a hologram, certificate, serial number, and proof mark.",
    shots: [
      silverOneKg,
      silverOneKgVariant,
      silverOneKgVariant1,
      silverOneKgVariant2,
    ],
  },
  {
    slug: "silver-bar-311g",
    coverImage: silverThreeElevenGram,
    productName: "311g Silver Bar",
    productType: "silver-bar",
    availability: "in-stock",
    price: 3110,
    refiner: "LaRoucci SCH",
    material: "Silver",
    fineness: "999.9 / 1000",
    fineWeight: "311g",
    dimensions: "73mm x 41mm x 11.4mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "The 311g Silver Bar by LaRoucci SCH offers high purity with a fineness of 999.9/1000, packaged in its original capsule with a hologram, certificate, serial number, and proof mark.",
    shots: [silverThreeElevenGram, silverBack],
  },
  {
    slug: "silver-bar-5kg",
    coverImage: silverFiveGram,
    productName: "5kg Silver Bar",
    productType: "silver-bar",
    availability: "in-stock",
    price: 50000,
    refiner: "LaRoucci SCH",
    material: "Silver",
    fineness: "999.9 / 1000",
    fineWeight: "5kg",
    dimensions: "Top: 165mm x 72mm; Bottom: 149mm x 55mm; Thickness: 51mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "This 5kg Silver Bar by LaRoucci SCH is crafted from pure silver with a fineness of 999.9/1000. It comes in its original capsule with a hologram, certificate, serial number, and proof mark.",
    shots: [silverFiveGram, silverBack],
  },

  // platinum bars
  {
    slug: "platinum-bar-1g",
    coverImage: platinumOneGram,
    productName: "1g Platinum Bar",
    productType: "platinum-bar",
    availability: "in-stock",
    price: 6000,
    refiner: "LaRoucci SCH",
    material: "Platinum",
    fineness: "999.9 / 1000",
    fineWeight: "1g",
    dimensions: "6.0 x 9.5 x 0.85mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "This 1g Platinum Bar by LaRoucci SCH is crafted from pure platinum with a fineness of 999.9/1000. It comes in its original capsule with a hologram, certificate, serial number, and proof mark.",
    shots: [platinumOneGramFront],
  },
  {
    slug: "platinum-bar-5g",
    coverImage: platinumFiveGram,
    productName: "5g Platinum Bar",
    productType: "platinum-bar",
    availability: "in-stock",
    price: 29000,
    refiner: "LaRoucci SCH",
    material: "Platinum",
    fineness: "999.9 / 1000",
    fineWeight: "5g",
    dimensions: "22.1 x 13.1 x 0.81mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "This 5g Platinum Bar by LaRoucci SCH is crafted from pure platinum with a fineness of 999.9/1000. It comes in its original capsule with a hologram, certificate, serial number, and proof mark.",
    shots: [platinumFiveGram],
  },
  {
    slug: "platinum-bar-10g",
    coverImage: platinumTenGram,
    productName: "10g Platinum Bar",
    productType: "platinum-bar",
    availability: "in-stock",
    price: 58000,
    refiner: "LaRoucci SCH",
    material: "Platinum",
    fineness: "999.9 / 1000",
    fineWeight: "10g",
    dimensions: "24mm x 14mm x 2mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "This 10g Platinum Bar by LaRoucci SCH is crafted from pure platinum with a fineness of 999.9/1000. It comes in its original capsule with a hologram, certificate, serial number, and proof mark.",
    shots: [platinumTenGram],
  },
  {
    slug: "platinum-bar-20g",
    coverImage: platinumTwentyGram,
    productName: "20g Platinum Bar",
    productType: "platinum-bar",
    availability: "in-stock",
    price: 116000,
    refiner: "LaRoucci SCH",
    material: "Platinum",
    fineness: "999.9 / 1000",
    fineWeight: "20g",
    dimensions: "31 x 18 x 1.7mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "This 20g Platinum Bar by LaRoucci SCH is crafted from pure platinum with a fineness of 999.9/1000. It comes in its original capsule with a hologram, certificate, serial number, and proof mark.",
    shots: [platinumTwentyGram],
  },
  {
    slug: "platinum-bar-31.1g",
    coverImage: platinumThirtyOneGram,
    productName: "31.1g Platinum Bar",
    productType: "platinum-bar",
    availability: "in-stock",
    price: 180500,
    refiner: "LaRoucci SCH",
    material: "Platinum",
    fineness: "999.9 / 1000",
    fineWeight: "31.1g",
    dimensions: "22.00 x 38.00 x 2.05mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "This 31.1g Platinum Bar by LaRoucci SCH is crafted from pure platinum with a fineness of 999.9/1000. It comes in its original capsule with a hologram, certificate, serial number, and proof mark.",
    shots: [platinumThirtyOneGram],
  },
  {
    slug: "platinum-bar-50g",
    coverImage: platinumFiftyGram,
    productName: "50g Platinum Bar",
    productType: "platinum-bar",
    availability: "in-stock",
    price: 290000,
    refiner: "LaRoucci SCH",
    material: "Platinum",
    fineness: "999.9 / 1000",
    fineWeight: "50g",
    dimensions: "47 x 27 x 1.86mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "This 50g Platinum Bar by LaRoucci SCH is crafted from pure platinum with a fineness of 999.9/1000. It comes in its original capsule with a hologram, certificate, serial number, and proof mark.",
    shots: [platinumFiftyGram],
  },

  {
    slug: "platinum-bar-100g",
    coverImage: platinumHundredGram,
    productName: "100g Platinum Bar",
    productType: "platinum-bar",
    availability: "in-stock",
    price: 580000,
    refiner: "LaRoucci SCH",
    material: "Platinum",
    fineness: "999.9 / 1000",
    fineWeight: "100g",
    dimensions: "27 x 47 x 4mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "This 100g Platinum Bar by LaRoucci SCH is crafted from pure platinum with a fineness of 999.9/1000. It comes in its original capsule with a hologram, certificate, serial number, and proof mark.",
    shots: [platinumHundredGram],
  },
  {
    slug: "platinum-bar-250g",
    coverImage: platinumTwoHundredFiftyGram,
    productName: "250g Platinum Bar",
    productType: "platinum-bar",
    availability: "in-stock",
    price: 1450000,
    refiner: "LaRoucci SCH",
    material: "Platinum",
    fineness: "999.9 / 1000",
    fineWeight: "250g",
    dimensions: "Top: 59mm x 29mm x 16mm; Bottom: 53mm x 23mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "This 250g Platinum Bar by LaRoucci SCH is crafted from pure platinum with a fineness of 999.9/1000. It comes in its original capsule with a hologram, certificate, serial number, and proof mark.",
    shots: [platinumTwoHundredFiftyGram],
  },
  {
    slug: "platinum-bar-311g",
    coverImage: platinumThreeHundredElevenGram,
    productName: "311g Platinum Bar",
    productType: "platinum-bar",
    availability: "in-stock",
    price: 1805000,
    refiner: "LaRoucci SCH",
    material: "Platinum",
    fineness: "999.9 / 1000",
    fineWeight: "311g",
    dimensions: "73mm x 41mm x 11.4mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "This 311g Platinum Bar by LaRoucci SCH is crafted from pure platinum with a fineness of 999.9/1000. It comes in its original capsule with a hologram, certificate, serial number, and proof mark.",
    shots: [platinumThreeHundredElevenGram],
  },
  {
    slug: "platinum-bar-500g",
    coverImage: platinumFiveHundredGram,
    productName: "500g Platinum Bar",
    productType: "platinum-bar",
    availability: "in-stock",
    price: 2900000,
    refiner: "LaRoucci SCH",
    material: "Platinum",
    fineness: "999.9 / 1000",
    fineWeight: "500g",
    dimensions: "53 x 117 x 7.00mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "This 500g Platinum Bar by LaRoucci SCH is crafted from pure platinum with a fineness of 999.9/1000. It comes in its original capsule with a hologram, certificate, serial number, and proof mark.",
    shots: [platinumFiveHundredGram],
  },
  {
    slug: "platinum-bar-1000g",
    coverImage: platinumThousandGram,
    productName: "1000g Platinum Bar",
    productType: "platinum-bar",
    availability: "in-stock",
    price: 5800000,
    refiner: "LaRoucci SCH",
    material: "Platinum",
    fineness: "999.9 / 1000",
    fineWeight: "1000g",
    dimensions: "70.00 x 130.00 x 9.70mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "This 1000g Platinum Bar by LaRoucci SCH is crafted from pure platinum with a fineness of 999.9/1000. It comes in its original capsule with a hologram, certificate, serial number, and proof mark.",
    shots: [
      platinumThousandGram,
      platinumThousandClear,
      platinumThousandLeft,
      platinumThousandRight,
      platinumThousandSide,
      platinumThousandTop,
    ],
  },
  {
    slug: "platinum-bar-12.5kg",
    coverImage: platinumTwelveKg,
    productName: "12.5kg Platinum Bar",
    productType: "platinum-bar",
    availability: "in-stock",
    price: 29000000,
    refiner: "LaRoucci SCH",
    material: "Platinum",
    fineness: "999.9 / 1000",
    fineWeight: "12.5kg",
    dimensions: "Top: 165mm x 72mm; Bottom: 149mm x 55mm; Thickness: 51mm",
    quality: "New",
    packaging: "In original capsules",
    kinebar:
      "With hologram, certificate, serial number, and international proof mark.",
    description:
      "This 12.5kg Platinum Bar by LaRoucci SCH is crafted from pure platinum with a fineness of 999.9/1000. It comes in its original capsule with a hologram, certificate, serial number, and proof mark.",
    shots: [
      platinumTwelveKg,
      platinumTwelveKgFlat,
      platinumTwelveKgLeft,
      platinumTwelveKgTop,
    ],
  },
];

export const profilesPhotos = [
  "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1930&q=80",
  "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
];

export const promoSection = {
  heading: "Style Is A Way To Say Who You Are Without Having To Speak",
  promoTitle: "Get 29% Off This Holiday Season Using The Code",
  photo:
    "https://images.unsplash.com/photo-1565288971009-a6db8844c687?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw5OTUwNDc1fHxlbnwwfHx8fHw%3D",
  review: {
    quote: `"Clothes and manners do not make the man; but when he is made, they greatly improve his appearance."`,
    reviewer: "Arthur Ashe",
  },
};

export const footerData = {
  footerLinks: [
    // {
    //   title: "LaRoucci Mining Kenya",
    //   links: [
    //     { href: "/", name: "Home" },
    //     { href: "/products", name: "Products" },
    //     { href: "/services", name: "Services" },
    //     { href: "/gallery", name: "Gallery" },
    //     { href: "/contact", name: "Contact Us" },
    //     { href: "/about", name: "About Us" },
    //   ],
    // },
    {
      title: "Products",
      links: [
        { href: "/products/gold", name: "Gold" },
        { href: "/products/silver", name: "Silver" },
        { href: "/products/platinum", name: "Platinum" },
        { href: "/products/precious-metals", name: "Precious Metals" },
        { href: "/products/precious-stones", name: "Precious Stones" },
      ],
    },
    {
      title: "Services",
      links: [
        { href: "/services/wholesale", name: "Wholesale" },
        { href: "/services/purchase", name: "Purchase" },
        { href: "/services/sell-to-us", name: "Sell to Us" },
        { href: "/services/storage", name: "Storage" },
        { href: "/services/foreign-currency", name: "Foreign Currency" },
        { href: "/services/shipping", name: "Shipping" },
        { href: "/services/checkout-process", name: "Checkout Process" },
      ],
    },
    {
      title: "Gallery",
      links: [
        { href: "/gallery/precious-metals", name: "Precious Metals" },
        { href: "/gallery/precious-stones", name: "Precious Stones" },
        {
          href: "/gallery/laroucci-sch-media",
          name: "In Media",
        },
        { href: "/gallery/references", name: "References" },
        {
          href: "/gallery/chief-economist-bachheimer",
          name: "Chief Economist Bachheimer",
        },
        { href: "/gallery/press-material", name: "Press Material" },
      ],
    },
    // {
    //   title: "Utility Pages",
    //   links: [
    //     { href: "/contact", name: "Contact" },
    //     { href: "/login", name: "Login" },
    //     { href: "/signup", name: "Signup" },
    //     { href: "/faq", name: "FAQ" },
    //     { href: "/404", name: "Not Found" },
    //   ],
    // },
  ],
};

export const newsletter = {
  heading: "Stay Updated!",
  description:
    "Join our mailing list to receive the latest news, exclusive offers, and important updates about our services in Nairobi and Slovakia. Sign up today and enjoy special promotions and offers tailored just for you!",
  cta: "Sign Up Now",
};

export const sizes = [
  "1g",
  "5g",
  "10g",
  "20g",
  "31.1g",
  "50g",
  "100g",
  "250g",
  "311g",
  "500g",
  "1000g",
  "12500g",
];

export const note =
  "Explore an wide selection of gold, silver, platinum precious metals and precious stones or gold, silver or platinum coins our ABAMA, our featuring brands Choose from a diverse selection of gold and silver bars, coins, platinum, and palladium.";

export const contactSection = {
  title: "Contact Us",
  heading: "How may we help you?",
  description:
    "We are here to assist you with any inquiries related to our services and operations. Feel free to reach out using the contact information provided below.",
  directContactInfo: [
    {
      icon: <BsHouse className="text-3xl" />, // Replace with appropriate icon
      title: "Business Inquiries",
      contactLink: {
        href: "mailto:z.laroussi@laroucciinternational.org",
        title: "z.laroussi@laroucciinternational.org",
      },
    },
    {
      icon: <BsMailbox className="text-3xl" />, // Replace with appropriate icon
      title: "General Inquiries",
      contactLink: {
        href: "mailto:info.sk@laroucciinternational.org",
        title: "info.sk@laroucciinternational.org",
      },
    },
    {
      icon: <BsPhone className="text-3xl" />, // Replace with appropriate icon
      title: "Telephone",
      contactLink: {
        href: "tel:+254788328898",
        title: "+254 788 328 898",
      },
    },
    {
      icon: <BsGlobe className="text-3xl" />, // Replace with appropriate icon
      title: "Website",
      contactLink: {
        href: "https://laroucci.institute",
        title: "laroucci.institute",
      },
    },
  ],
  additionalInfo: {
    businessName: "LAROUCCI SCH LTD",
    address: "Thompson Estate, House No.50,",
    mailingAddress: "Kunde Road, Lavington.",
    registeredOffice: "00100",
    countryIncorporation: "Nairobi, Kenya",
  },
  openingHours: [
    { day: "Monday", hours: "9:00am - 6:00pm" },
    { day: "Tuesday", hours: "9:00am - 6:00pm" },
    { day: "Wednesday", hours: "9:00am - 6:00pm" },
    { day: "Thursday", hours: "9:00am - 6:00pm" },
    { day: "Friday", hours: "9:00am - 6:00pm" },
    { day: "Saturday", hours: "by appointment only for storage" },
    { day: "Sunday", hours: "by appointment only for storage" },
  ],
};

export const faqsData = {
  heading: "Frequently Asked Questions",
  description:
    "Explore our FAQs to learn more about investing in precious metals and how LaRoucci SCH and Partners can help you secure your wealth.",
  faqs: [
    {
      category: "Buying & Selling Precious Metals",
      data: [
        {
          question: "How can I buy gold, silver, or platinum?",
          answer:
            "You can purchase gold, silver, or platinum through our online store or by visiting our physical location in ABAMA. Our selection includes bars, coins, and other precious metals, all priced based on real-time market rates.",
        },
        {
          question: "Do you buy precious metals from individuals?",
          answer:
            "Yes, we offer a quick and convenient process for selling your precious metals. You can sell online or visit our ABAMA office for immediate cash payment upon selling gold, silver, platinum, or palladium.",
        },
        {
          question: "What is the process for selling old gold or silver?",
          answer:
            "You can sell your old gold or silver directly at our LaRoucci SCH and ABAMA locations or via our online platform. Our experts will verify the authenticity and offer competitive pricing based on real-time market value.",
        },
        {
          question: "How are your prices calculated?",
          answer:
            "Our prices are tied to the real-time gold price, ensuring transparency and accuracy around the clock. The price you see at the time of your order is the price you will pay.",
        },
        {
          question: "Can I track price changes for precious metals?",
          answer:
            "Yes, our website displays live updates on gold, silver, and platinum prices, allowing you to make informed buying or selling decisions.",
        },
      ],
    },
    {
      category: "Security & Storage",
      data: [
        {
          question: "How do you ensure the security of my assets?",
          answer:
            "LaRoucci SCH and ABAMA provides high-security storage facilities for your precious metals. We offer independent, insured safekeeping with flexible options for adding or removing authorized family members.",
        },
        {
          question: "Can I transfer my stored metals between locations?",
          answer:
            "Yes, you can seamlessly transfer your stored precious metals between different locations in our international warehouse network, ensuring the highest level of security and flexibility.",
        },
        {
          question: "Do you offer crisis hedge solutions?",
          answer:
            "Yes, LaRoucci SCH specializes in providing secure hedging strategies during crises. Our extensive experience helps safeguard your assets through our unique crisis management solutions.",
        },
        {
          question:
            "What are the security measures in your storage facilities?",
          answer:
            "Our storage facilities are equipped with state-of-the-art security systems, ensuring the highest level of protection for your precious metals and assets.",
        },
        {
          question: "Can I modify access to my stored assets?",
          answer:
            "Yes, we offer flexibility in managing access to your stored precious metals. You can easily add, modify, or remove powers of attorney for family members at any time.",
        },
      ],
    },
    {
      category: "Testing & Authenticity",
      data: [
        {
          question: "How do you verify the authenticity of precious metals?",
          answer:
            "We use advanced testing equipment to verify the authenticity of gold, silver, platinum, and palladium, ensuring that all metals are genuine and free of forgeries.",
        },
        {
          question: "Can I test my gold or silver before purchasing?",
          answer:
            "Yes, we offer on-site testing at our ABAMA office. Our laboratory tester quickly verifies the authenticity of precious metals and stones before purchase.",
        },
        {
          question: "What testing services do you offer?",
          answer:
            "We provide testing services for gold, silver, platinum, precious stones, and old gold or silverware. Our modern equipment ensures fast and accurate results.",
        },
        {
          question:
            "How can I ensure that the precious metals I own are genuine?",
          answer:
            "You can bring your metals to our ABAMA location, where we will perform authenticity checks using state-of-the-art testing technology.",
        },
      ],
    },
    {
      category: "Consultation & Support",
      data: [
        {
          question: "Can I get personalized investment advice?",
          answer:
            "Yes, we offer personal consultations to help you choose the best investment options in precious metals and precious stones. Our experts are available in multiple languages to guide you through the process.",
        },
        {
          question: "How do I choose between bars and coins for investment?",
          answer:
            "Our team can help you decide between bars and coins based on your investment goals. Both options offer unique advantages depending on your strategy and preferences.",
        },
        {
          question:
            "Do you provide consultation services for international clients?",
          answer:
            "Yes, we offer consultation services to clients worldwide, helping them make informed investment decisions in precious metals regardless of location.",
        },
        {
          question:
            "Can I get assistance in testing the authenticity of rare metals?",
          answer:
            "Yes, our ABAMA office offers testing services for rare metals such as germanium and gallium, ensuring the authenticity of even the most uncommon elements.",
        },
        {
          question: "How can I contact customer support for more details?",
          answer:
            "You can contact our customer support team through our website or by visiting our ABAMA office. We're happy to assist with any questions related to your precious metal investments.",
        },
      ],
    },
  ],
};

const demoBlogData = {
  sectionOne: {
    title:
      "Can you share insights into the evolution of chic and sleek styles in the fashion industry?",
    paragraph1:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    points: [
      "Pretium nibh ipsum consequat nisl vel pretium. Sed vulputate mi sit",
      "Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer  dolore eu fugiat nulla pariatur",
      "Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac",
      "Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis",
    ],
    paragraph2:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  sectionTwo: {
    title:
      'What distinguishes the latest trends featured in the "Fashion Wonderland" from previous seasons?',
    description:
      "Augue lacus viverra vitae congue eu consequat ac felis donec. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Morbi tristique senectus et netus et malesuada fames ac turpis. Iaculis eu non diam phasellus vestibulum lorem sed.",
    midImage:
      "https://images.unsplash.com/photo-1464490826362-59825a4f51df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    midImageTwo:
      "https://images.unsplash.com/photo-1502163140606-888448ae8cfe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  sectionThree: {
    title:
      "How can individuals incorporate chic and sleek elements into their everyday wardrobes?",
    description:
      "Augue lacus viverra vitae congue eu consequat ac felis donec. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Morbi tristique senectus et netus et malesuada fames ac turpis. Iaculis eu non diam phasellus vestibulum lorem sed.",
  },
  sectionFour: {
    title:
      "Which fashion influencers or celebrities have embraced the chic and sleek trends showcased?",
    description:
      "Bibendum at varius vel pharetra vel turpis nunc. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Volutpat est velit egestas dui id ornare.",
    points: [
      "Pretium nibh ipsum consequat nisl vel pretium. Sed vulputate mi sit",
      "Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer  dolore eu fugiat nulla pariatur",
      "Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac",
      "Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis",
    ],
  },
  quote:
    "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor porta rhoncus, viverra sit et auctor. Augue in volutpat sed eget in etiam.”",
  sectionFive: [
    {
      title:
        "What materials or fabrics are emphasized in creating the chic and sleek look?",
      description:
        "Tincidunt nunc pulvinar sapien et ligula. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Aliquet bibendum enim facilisis gravida neque convallis a cras. Molestie nunc non blandit massa enim nec dui nunc.",
    },
    {
      title:
        "How does the collection cater to diverse fashion preferences and body types?",
      description:
        "Tincidunt nunc pulvinar sapien et ligula. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Aliquet bibendum enim facilisis gravida neque convallis a cras. Molestie nunc non blandit massa enim nec dui nunc.",
    },
  ],
};

export const blogs: BlogType[] = [
  {
    title:
      "Chic and Sleek: Unveiling the Latest Trends in Our Fashion Wonderland",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    blogData: demoBlogData,
    tag: "Style",
    slug: "chic-sleek-latest-trends-fashion-wonderland",
  },
  {
    title: "Runway to Your Wardrobe: Must-Have Styles from Our Fall Collection",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "Trend",
    slug: "runway-wardrobe-must-have-styles-fall-collection",
  },
  {
    title: "Dress to Impress: Elevate Your Fashion Game with Our New Arrivals",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "Outfit",
    slug: "dress-impress-elevate-fashion-game-new-arrivals",
  },
  {
    title: "Accessorize Your Life: The Ultimate Guide to Statement Pieces",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "Style",
    slug: "accessorize-life-ultimate-guide-statement-pieces",
  },
  {
    title:
      "Effortless Elegance: Mastering Everyday Glamour with Our Essentials",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "Trend",
    slug: "effortless-elegance-mastering-everyday-glamour-essentials",
  },
  {
    title: "Fashion Forward: Uncovering the Hottest Looks of the Season",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "General",
    slug: "fashion-forward-uncovering-hottest-looks-season",
  },
  {
    title:
      "Sustainable Style: Embrace Eco-Friendly Fashion Finds in Our Collection",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "Style",
    slug: "sustainable-style-embrace-eco-friendly-fashion-finds",
  },
  {
    title: "Dapper Duds: Men's Fashion Picks for a Stylish Wardrobe Upgrade",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "Outfit",
    slug: "dapper-duds-mens-fashion-picks-stylish-wardrobe",
  },
  {
    title: "Fierce and Fabulous: Channel Your Inner Diva with Our Bold Apparel",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1546548729-375ff057ec22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "Style",
    slug: "fierce-fabulous-channel-inner-diva-bold-apparel",
  },
  {
    title:
      "The Art of Mix and Match: Create Endless Outfit Possibilities with Our Versatile Pieces",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "Trend",
    slug: "art-mix-match-create-endless-outfit-possibilities-versatile-pieces",
  },
];

export const productsCollection = {
  heading: "Our Product Collection",
  description:
    "Precious metals and precious stones are not just viewed as essential forms of security and future provision by the people of ABAMA. You too can depend on precious metals! Our team at the LaRoucci SCH and ABAMA is eager to provide guidance on the sale and purchase of precious metals and precious stones in LaRoucci SCH and ABAMA, secure storage solutions for your precious metals and precious stones , and any other related topics. Trust LaRoucci SCH and ABAMA for expert advice and support in navigating the world of precious metals and precious stones investments.",
};

export const onSalePreciousMetalsInfo = {
  title: "On-Sale Precious Metals",
  description:
    "From time to time, LaRoucci SCH and ABAMA places some of its popular Gold, Silver, Platinum, and Palladium products on sale for customers to purchase. Our relationships in various locations around the world provide access to popular bullion coins, bars, and rounds. We provide discounted gold and silver bullion, often with free shipping and minimal premiums over the spot price.",
  locations: [
    "Nairobi, Kenya",
    "Bangui, Central African Republic",
    "Trnava, Slovakia",
    "Liptovsky Mikulas, Slovakia",
    "London, United Kingdom",
    "Dubai, UAE",
    "Algiers, Algeria",
  ],
  productTypes: [
    {
      category: "Coins",
      metals: [
        {
          metal: "Gold",
          themes: ["Africa", "Tiger", "Arabian Horse", "Elephant", "Rhinoceros", "Camels", "Crocodile", "Falcon", "Kangaroo", "Zebra", "Deer", "Eagle"]
        },
        {
          metal: "Silver",
          themes: ["Africa", "Tiger", "Arabian Horse", "Elephant", "Rhinoceros", "Camels", "Crocodile", "Falcon", "Kangaroo", "Zebra", "Deer", "Eagle"]
        },
        {
          metal: "Platinum",
          themes: ["Africa", "Tiger", "Arabian Horse", "Elephant", "Rhinoceros", "Camels", "Crocodile", "Falcon", "Kangaroo", "Zebra", "Deer", "Eagle"]
        },
        {
          metal: "Bronze",
          themes: ["Africa", "Tiger", "Arabian Horse", "Elephant", "Rhinoceros", "Camels", "Crocodile", "Falcon", "Kangaroo", "Zebra", "Deer", "Eagle"]
        },
        {
          metal: "Palladium",
          themes: ["Africa", "Tiger", "Arabian Horse", "Elephant", "Rhinoceros", "Camels", "Crocodile", "Falcon", "Kangaroo", "Zebra", "Deer", "Eagle"]
        },
      ],
    },
    {
      category: "Bars",
      metals: [
        {
          metal: "Gold",
          weights: ["1 Gram", "5 Grams", "10 Grams", "20 Grams", "31.1 Grams", "50 Grams", "100 Grams", "250 Grams", "311 Grams", "500 Grams", "1,000 Grams", "12,500 Grams"]
        },
        {
          metal: "Silver",
          weights: ["1 Gram", "5 Grams", "10 Grams", "20 Grams", "31.1 Grams", "50 Grams", "100 Grams", "250 Grams", "311 Grams", "500 Grams", "1,000 Grams", "12,500 Grams"]
        },
        {
          metal: "Platinum",
          weights: ["1 Gram", "5 Grams", "10 Grams", "20 Grams", "31.1 Grams", "50 Grams", "100 Grams", "250 Grams", "311 Grams", "500 Grams", "1,000 Grams", "12,500 Grams"]
        },
        {
          metal: "Bronze",
          weights: ["1 Gram", "5 Grams", "10 Grams", "20 Grams", "31.1 Grams", "50 Grams", "100 Grams", "250 Grams", "311 Grams", "500 Grams", "1,000 Grams", "12,500 Grams"]
        },
        {
          metal: "Palladium",
          weights: ["1 Gram", "5 Grams", "10 Grams", "20 Grams", "31.1 Grams", "50 Grams", "100 Grams", "250 Grams", "311 Grams", "500 Grams", "1,000 Grams", "12,500 Grams"]
        },
      ],
    },
  ],
  howItWorks: [
    "LaRoucci SCH and ABAMA assesses stock and incoming inventory each week to decide on-sale items.",
    "Weekly deals are available for Gold Bullion Coins/Bars, Silver Bullion Coins/Bars, and other precious metals.",
    "Items are placed on sale to make room for the latest releases of bullion coins.",
    "Prices are marked down to minimal premiums over the current spot price of bullion.",
    "Some items are offered on an 'Any Quantity' basis, allowing wholesale pricing with one low premium over spot price.",
  ],
  expectations:
    "LaRoucci SCH and ABAMA cannot guarantee any particular product popping up in our on-sale precious metals section, but you can expect to find a variety of options awaiting you when you browse our discounted bullion. As mentioned, we check our existing stock each week against incoming new releases and select the best options to put on sale. There’s no telling what could be in our on-sale section, so it’s worth checking in each week to see what’s available!",
  buyingInfo:
    "If you’re looking for discounted bullion, LaRoucci SCH and ABAMA has you covered. If you have any questions about our on-sale precious metals, we encourage you to reach out to us at +254 788 328 898. You can also connect with us online using our live chat and email address options.",
};
