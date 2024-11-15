'use client';

import Heading from "@/shared/Heading/Heading";
import Image from "next/image";
// import safe from "/assets/images/services/safe.png";
// import "/assets/images/svg/audit.svg" from "/assets/images/svg/audit.svg";
// import "/assets/images/svg/discreet-entrance.svg" from "/assets/images/svg/discreet-entrance.svg";
// import "/assets/images/svg/experience.svg" from "/assets/images/svg/experience.svg";
// import "/assets/images/svg/flexible-powers-attorney.svg" from "/assets/images/svg/flexible-powers-attorney.svg";
// import "/assets/images/svg/logistics.svg" from "/assets/images/svg/logistics.svg";
// import "/assets/images/svg/secure-message.svg" from "/assets/images/svg/secure-message.svg";
// import "/assets/images/svg/tax-free.svg" from "/assets/images/svg/tax-free.svg";
// import "/assets/images/svg/trade-flexibility.svg" from "/assets/images/svg/trade-flexibility.svg";
// import "/assets/images/svg/worldwide-network.svg" from "/assets/images/svg/worldwide-network.svg";

export default function page() {
  const storageSection = {
    description:
      "Elevate your gold, silver, platinum precious metals and precious stones investments with LaRoucci SCH in ABAMA, your trusted and highly qualified partner in the realm of precious metals and precious stones investment.",
  };
  //   const sections = [
  //     {
  //       title: "Buy gold, silver and Platinum at LaRoucci SCH",
  //       content: `LaRoucci SCH has grown into an international alliance for gold, silver, and strategic commodities since 2003 in Slovakia.
  //                 And in Africa, Algeria, UAE, Turkey, China, and London. As one of the suppliers of precious metals in Africa, Asia,
  //                 and Europe, we provide our customers with real security amidst the unpredictability of the financial system.`,
  //       image: goldImage,
  //     },
  //     {
  //       title:
  //         "Sell gold in LaRoucci SCH - the most popular address for gold and silver",
  //       content: `Within a few years, LaRoucci SCH and Sea City Holding established itself as one of the most popular destinations
  //                 for selling gold and silver in Africa, Algeria, UAE, Turkey, China, USA, and Europe.
  //                 Thanks to our sophisticated logistics solutions and high-security storage of precious metals,
  //                 we created a Europe-wide market presence among gold dealers and end customers.`,
  //       image: silverImage2,
  //     },
  //     {
  //       title: "Expansion and customer proximity – gold shops all around Europe",
  //       content: `The increasing demand for gold consulting, over-the-counter transactions, storage, authenticity testing, and
  //                 shipping required an international orientation of our business. Besides the LaRoucci SCH brand,
  //                 we introduced other companies across Africa, Asia, and Europe, including offices in Slovakia, London, Dubai, Algeria,
  //                 and Hong Kong.`,
  //       image: platinumImage,
  //     },
  //     {
  //       title:
  //         "International focus - branches in Switzerland, Germany, Italy, Spain and more",
  //       content: `LaRoucci SCH continues to expand its presence in Africa and beyond. Soon we will supply customers in our branches
  //                 or partners in Vienna, Switzerland, Germany, India, and other cities with the best precious metal products.
  //                 We offer collection services, storage on three continents, professional advice, and logistics solutions.`,
  //       image: goldImage2,
  //     },
  //     {
  //       title: "Buy gold and silver - precious metal dealer for your needs",
  //       content: `At LaRoucci SCH you can buy gold, Silver and platinum and buy other precious metals. Our range includes gold bars, silver bars and platinum bars gold coins, silver coins, platinum coins and much more. As a trusted precious metals dealer, you will always receive up-to-date gold silver and platinum prices. You can also sell gold, sell silver and sell platinum or offer us your precious metal jewelry. We are your partner for precious metal purchase and precious stones and precious metal and precious stones investment.`,
  //       image: silverImage2,
  //     },
  //     {
  //       title: "Your expert for precious metals - LaRoucci SCH",
  //       content: `Trust in our many years of experience as a supplier of precious metals and precious stones. We offer you comprehensive information on the gold price and silver price, on the development of precious metal and precious stones prices as well as on gold, silver and platinum investment. Stay up to date on the precious metals market and invest in valuable precious metals with LaRoucci SCH.`,
  //       image: goldImage3,
  //     },
  //   ];

  const section2Header =
    "Special features of LaRoucci SCH High-Security Storage.";

  const data = [
    {
      Icon: "/assets/images/svg/worldwide-network.svg",
      title: "Worldwide Network",
      content:
        "Your LaRoucci SCH storage location is part of an international network of LaRoucci SCH high-security storage facilities. LaRoucci SCH trades at numerous trading hubs globally and maintains specialized high-security vaults on-site for storing precious metals. Our extensive industry information network enables us to anticipate unfavorable conditions and securely transfer assets across locations, ensuring real security for customers.",
      image: "path/to/worldwide-network-image.jpg",
    },
    {
      Icon: "/assets/images/svg/trade-flexibility.svg",
      title: "Buy & Sell Anytime",
      content:
        "LaRoucci SCH offers flexible storage and withdrawal options at any time, anywhere. With branches and web stores across European, African, and Arabic countries, customers can buy and sell from home or in person without transportation costs or import fees. Transactions are processed in major currencies and payment methods, ensuring convenience.",
      image: "path/to/trading-flexibility-image.jpg",
    },
    {
      Icon: "/assets/images/svg/tax-free.svg",
      title: "Tax-Free Purchase & Profits",
      content:
        "In most LaRoucci SCH storage locations, customers can buy silver, platinum, and palladium tax-free in bonded warehouses. After a holding period of one year and one day, profits from sales are often tax-free, providing a beneficial investment option.",
      image: "path/to/tax-free-purchase-image.jpg",
    },
    {
      Icon: "/assets/images/svg/discreet-entrance.svg",
      title: "Confidentiality & No Registries",
      content:
        "LaRoucci SCH maintains strict confidentiality for all stored precious metals, ensuring no reporting to registries or authorities. Storage details are offline and accessible only to the owner, providing robust protection from hackers and data breaches.",
      image: "path/to/confidentiality-image.jpg",
    },
    {
      Icon: "/assets/images/svg/secure-message.svg",
      title: "256-bit Encrypted Messaging",
      content:
        "Customers can securely communicate through encrypted messages for inquiries or storage contract changes via LaRoucci SCH's web stores, ensuring privacy and data security at all times.",
      image: "/assets/images/svg/secure-message.svg"
    },
    {
      Icon: "/assets/images/svg/flexible-powers-attorney.svg",
      title: "Flexible Powers of Attorney",
      content:
        "LaRoucci SCH allows customers to assign powers of attorney for asset access, with flexible options like joint access or restricted conditions. Amendments are easily managed to adapt to changing life circumstances.",
      image: "/assets/images/svg/flexible-powers-attorney.svg",
    },
    {
      Icon: "/assets/images/svg/audit.svg",
      title: "Independent Warehouse Audits",
      content:
        "LaRoucci SCH high-security storage exceeds industry standards with biannual inventory audits, ensuring all precious metals are physically present and unpledged. Audit reports are available for customer assurance.",
      image: "/assets/images/svg/audit.svg",
    },
    {
      Icon: "/assets/images/svg/experience.svg",
      title: "Years of Expertise",
      content:
        "With over 20 years in the precious metals business, LaRoucci SCH is a debt-free, independent entity providing real security for customers. Our team is available by phone, email, or in person to offer expert consultation and support.",
      image: "/assets/images/svg/experience.svg",
    },
    {
      Icon: "/assets/images/svg/logistics.svg",
      title: "Official Distributor",
      content:
        "LaRoucci SCH is an official distributor for leading mints globally, investing exclusively in precious metals over fiat currencies, ensuring customer assets retain real security through a commitment to gold and silver.",
      image: "/assets/images/svg/logistics.svg",
    },
  ];
  return (
    <div className="container">
      <div className="mt-20">
        <Heading desc={storageSection.description} isMain isCenter>
          Storage Services - LaRoucci Mining SCH | Kenya
        </Heading>
      </div>

      <div className="mb-32">
        <Image
          width={1000}
          height={1000}
          src="/assets/images/services/safe.png"
          alt="laroucci safe"
          className="m-6 w-full rounded object-bottom"
        />
        <Heading isMain isCenter>
          {section2Header}
        </Heading>

        <section className="container mx-auto py-16 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {data.map((item: any, index: any) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-6"
              >
                <Image
                  width={320}
                  height={320}
                  src={item.Icon}
                  alt="laroucci safe"
                  className="w-12 h-12 text-primary-600" 
                />
                {/* <item.Icon className="w-12 h-12 text-primary-600" /> */}
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

// export default page;
