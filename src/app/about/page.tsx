"use client";

// import ReactComponent from "*.svg";
import { contactSection } from "@/data/content";
import goldImage from "@assets/images/gold.png";
import goldImage2 from "@assets/images/gold2.png";
import goldImage3 from "@assets/images/gold3.png";
import platinumImage from "@assets/images/platinum.png";
import silverImage2 from "@assets/images/silver2.png";

import CreditFreeCompanyIcon from "@assets/images/svg/credit-free-company.svg";
import IndividualConsultingIcon from "@assets/images/svg/customer-service.svg";
import BuySellIcon from "@assets/images/svg/dollar-sign.svg";
import FlexiblePowersAttorneyIcon from "@assets/images/svg/flexible-powers-attorney.svg";
import InternationalDeliveryIcon from "@assets/images/svg/global-distribution.svg";
import HighestSecurityLevelIcon from "@assets/images/svg/highest-security-level.svg";
import RegularAuditIcon from "@assets/images/svg/regular-audit.svg";
import WorldwideNetworkIcon from "@assets/images/svg/worldwide-network.svg";

import Heading from "@/shared/Heading/Heading";
import Image from "next/image";

const page = () => {
  const sections = [
    {
      title: "Buy gold, silver and Platinum at LaRoucci SCH",
      content: `LaRoucci SCH has grown into an international alliance for gold, silver, and strategic commodities since 2003 in Slovakia. 
                And in Africa, Algeria, UAE, Turkey, China, and London. As one of the suppliers of precious metals in Africa, Asia, 
                and Europe, we provide our customers with real security amidst the unpredictability of the financial system.`,
      image: goldImage,
    },
    {
      title:
        "Sell gold in LaRoucci SCH - the most popular address for gold and silver",
      content: `Within a few years, LaRoucci SCH and Sea City Holding established itself as one of the most popular destinations 
                for selling gold and silver in Africa, Algeria, UAE, Turkey, China, USA, and Europe. 
                Thanks to our sophisticated logistics solutions and high-security storage of precious metals, 
                we created a Europe-wide market presence among gold dealers and end customers.`,
      image: silverImage2,
    },
    {
      title: "Expansion and customer proximity – gold shops all around Europe",
      content: `The increasing demand for gold consulting, over-the-counter transactions, storage, authenticity testing, and 
                shipping required an international orientation of our business. Besides the LaRoucci SCH brand, 
                we introduced other companies across Africa, Asia, and Europe, including offices in Slovakia, London, Dubai, Algeria, 
                and Hong Kong.`,
      image: platinumImage,
    },
    {
      title:
        "International focus - branches in Switzerland, Germany, Italy, Spain and more",
      content: `LaRoucci SCH continues to expand its presence in Africa and beyond. Soon we will supply customers in our branches 
                or partners in Vienna, Switzerland, Germany, India, and other cities with the best precious metal products. 
                We offer collection services, storage on three continents, professional advice, and logistics solutions.`,
      image: goldImage2,
    },
    {
      title: "Buy gold and silver - precious metal dealer for your needs",
      content: `At LaRoucci SCH you can buy gold, Silver and platinum and buy other precious metals. Our range includes gold bars, silver bars and platinum bars gold coins, silver coins, platinum coins and much more. As a trusted precious metals dealer, you will always receive up-to-date gold silver and platinum prices. You can also sell gold, sell silver and sell platinum or offer us your precious metal jewelry. We are your partner for precious metal purchase and precious stones and precious metal and precious stones investment.`,
      image: silverImage2,
    },
    {
      title: "Your expert for precious metals - LaRoucci SCH",
      content: `Trust in our many years of experience as a supplier of precious metals and precious stones. We offer you comprehensive information on the gold price and silver price, on the development of precious metal and precious stones prices as well as on gold, silver and platinum investment. Stay up to date on the precious metals market and invest in valuable precious metals with LaRoucci SCH.`,
      image: goldImage3,
    },
  ];

  const section2Header = "High security vault LaRoucci SCH";

  const section2Content = {
    title: "High security vault LaRoucci SCH",
    content:
      "Discover peace of mind with our premier high-security vault for precious metals. As a trusted gold dealer, we offer a seamless way to buy gold online, ensuring 100% allocated storage in a guarded, private facility near LaRoucci SCH. Safeguard your investments with the utmost security while enjoying the convenience of electronic trading. Sell, transfer, or withdraw your gold coins, silver coins and platinum, gold bars, or silver bars and platinum at any LaRoucci SCH office & vault worldwide. All precious metals are held by an independent company that insures the total value and performs semi-annual inventory audits.",
  };

  const data = [
    {
      Icon: WorldwideNetworkIcon,
      title: "Worldwide Network",
      content:
        "Large manufacturers are distributed worldwide. LaRoucci SCH networks them. Secure storage locations are also distributed worldwide. Customers need worldwide flexibility. LaRoucci SCH networks them.",
    },
    {
      Icon: FlexiblePowersAttorneyIcon,
      title: "Flexible powers of attorney",
      content:
        "Appoint authorized representatives to operate your vault. Amendments and transfers are possible at any time. We will be happy to advise you on all options. Please contact your local LaRoucci SCH office.",
    },
    {
      Icon: HighestSecurityLevelIcon,
      title: "Highest Security Level",
      content:
        "Since 2003, LaRoucci SCH has used purpose-built safes from Europe-based market leaders. Only authorized staff have access to the storage facilities, carried out in a multi-person control system.",
    },
    {
      Icon: CreditFreeCompanyIcon,
      title: "Credit free company",
      content:
        "All companies of the LaRoucci SCH Bullion Group are 100% independent of banks. No credits, loans, or guarantees. Everything is built on physical gold, silver, platinum, and precious stones.",
    },
    {
      Icon: IndividualConsultingIcon,
      title: "Individual Consulting",
      content:
        "Purchase, sale, gold, silver, platinum and precious stones. You will receive competent answers to all questions in a pleasant atmosphere. Benefit from our years of experience.",
    },
    {
      Icon: InternationalDeliveryIcon,
      title: "International Delivery",
      content:
        "Our own logistics center or our partners assures you of fast and extensive delivery of your order to any corner of the world. We are also happy to plan special transports and pick-ups in personal consultation.",
    },
    {
      Icon: BuySellIcon,
      title: "24/7 Buy/Sell around the clock",
      content:
        "The prices of LaRoucci SCH are tied to the live commodity prices. When you buy gold, silver, platinum, and precious metals and precious stones online you are guaranteed the price at the time of your order. Likewise at night and on weekends.",
    },
    {
      Icon: RegularAuditIcon,
      title: "Regular Audits",
      content:
        "A tax expert audits all physically stored items twice a year at the same time and confirms the inventory of all storage clients. A report of the latest audit of each vault is available for download online.",
    },
  ];

  return (
    <div className="container">
      <div className="mt-20">
        <Heading desc={contactSection.description} isMain isCenter>
          About LaRoucci Mining SCH | Kenya
        </Heading>
      </div>

      <div className="mb-32">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`grid gap-5 lg:grid-cols-2 mb-10 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex items-center">
              <div className="space-y-5">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <p>{section.content}</p>
              </div>
            </div>
            <div className="relative w-full h-[300px]">
              <Image
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover rounded-2xl"
                layout="fill"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mb-32">
        <Heading isMain isCenter>
          {section2Header}
        </Heading>
        <div className="flex items-center">
          <div className="space-y-5 text-center">
            <p className="text-base">{section2Content.content}</p>
          </div>
        </div>

        <section className="container mx-auto py-16 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-6"
              >
                <item.Icon className="w-12 h-12 text-primary-600" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
