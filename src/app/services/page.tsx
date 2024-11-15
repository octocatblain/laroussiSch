'use client';

// import ReactComponent from "*.svg";
// import { contactSection } from "@/data/content";

// import "/assets/images/svg/all-currencies.svg" from "/assets/images/svg/all-currencies.svg";
// import "/assets/images/svg/buyback-guarantee.svg" from "/assets/images/svg/buyback-guarantee.svg";
// import "/assets/images/svg/consulting.svg" from "/assets/images/svg/consulting.svg";
// import "/assets/images/svg/discreet-entrance.svg" from "/assets/images/svg/discreet-entrance.svg";
// import "/assets/images/svg/international-delivery2.svg" from "/assets/images/svg/international-delivery2.svg";
// import "/assets/images/svg/largest-selection.svg" from "/assets/images/svg/largest-selection.svg";
// import "/assets/images/svg/live-prices.svg" from "/assets/images/svg/live-prices.svg";
// import "/assets/images/svg/offices.svg" from "/assets/images/svg/offices.svg";
// import "/assets/images/svg/storage.svg" from "/assets/images/svg/storage.svg";

// import "/assets/images/svg/authenticity-testing.svg" from "/assets/images/svg/authenticity-testing.svg";
// import "/assets/images/svg/international-partnerships.svg" from "/assets/images/svg/international-partnerships.svg";
// import "/assets/images/svg/newsletter.svg" from "/assets/images/svg/newsletter.svg";
// import "/assets/images/svg/rare-earths.svg" from "/assets/images/svg/rare-earths.svg";
// import "/assets/images/svg/wholesale.svg" from "/assets/images/svg/wholesale.svg";

import Heading from "@/shared/Heading/Heading";
import Image from "next/image";

export default function page() {
  const serviceSection = {
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

  const section2Header = "Why choose LaRoucci SCH | Kenya?";

  const data = [
    {
      Icon: "/assets/images/svg/consulting.svg",
      title: "Consulting",
      content:
        "We provide consultation regarding gold and precious metals investment via our experts, taking your personal needs into consideration, and delivering the best choices for you based on two decades of experience.",
    },
    {
      Icon: "/assets/images/svg/discreet-entrance.svg",
      title: "Discreet Entrance",
      content:
        "Leaving street stores leads to unwanted observations. Our offices and stores allow unobserved coming and a relaxed return home.",
    },
    {
      Icon: "/assets/images/svg/live-prices.svg",
      title: "Live Prices",
      content:
        "Our prices are tied to the current gold, silver, platinum, and precious metals and precious stones rates to the minute. We guarantee the price at the time of your order, night or day, weekday, or weekend.",
    },
    {
      Icon: "/assets/images/svg/storage.svg",
      title: "LaRoucci SCH Storage",
      content:
        "LaRoucci SCH combines secure gold, silver, platinum and precious stones storage with flexibility on a global scale. The crises of the past have proven the importance of this system. You too, like thousands of other customers, can rely on Real Security.",
    },
    {
      Icon: "/assets/images/svg/buyback-guarantee.svg",
      title: "Buyback Guarantee",
      content:
        "We guarantee the repurchase of all precious metals and precious stones purchased from LaRoucci SCH. In addition, we buy bars and coins from all manufacturers, as well as jewelry and scrap gold. Authenticating the precious metals and purchase calculation are always free of charge and without obligation.",
    },
    {
      Icon: "/assets/images/svg/all-currencies.svg",
      title: "All Currencies",
      content:
        "All currencies are perishable, except for gold, silver, platinum and precious metals and precious stones. Investing in precious stones is the best investment and saving for the future.",
    },
    {
      Icon: "/assets/images/svg/offices.svg",
      title: "16x in Europe",
      content:
        "Conduct business or receive consulting and LaRoucci SCH and Partners services in our offices and partners all across Europe. Learn about how LaRoucci SCH clients use this office network to their advantage.",
    },
    {
      Icon: "/assets/images/svg/largest-selection.svg",
      title: "Largest Selection",
      content:
        "Precious metals are in stock in every size. Over two hundred thousand customers invest in the best products with LaRoucci SCH, starting from gifts, going up to millions in investments.",
    },
    {
      Icon: "/assets/images/svg/international-delivery2.svg",
      title: "International Delivery",
      content:
        "Our own logistics center and partners assures you of fast and extensive delivery of your order to any corner of the world. We are also happy to plan special transports and pick-ups in personal consultation.",
    },
    {
      Icon: "/assets/images/svg/international-partnerships.svg",
      title: "International Partnerships",
      content:
        "LaRoucci SCH and partners provide all the major gold, silver, platinum, and precious metals and precious stones in the world for its clients. This network is available to every customer and provides a hedge to the globalized banking world.",
    },
    {
      Icon: "/assets/images/svg/rare-earths.svg",
      title: "Rare Earths",
      content:
        "The whole world needs them, but almost no one has them - the rare precious metals and precious stones. LaRoucci SCH and Partners import, certify, and safely store these raw materials for you. In times of inflation, limited goods are invaluable.",
    },
    {
      Icon: "/assets/images/svg/authenticity-testing.svg",
      title: "Authenticity Testing",
      content:
        "LaRoucci SCH and Partners is always up to date with the latest science and is aware of all counterfeiting methods. For authenticity testing, LaRoucci SCH and Partners use equipment from its own development.",
    },
    {
      Icon: "/assets/images/svg/wholesale.svg",
      title: "Wholesale",
      content:
        "LaRoucci SCH and Partners offer gold, silver, platinum, and precious metals and precious stones dealers a wholesale partnership with a modern real-time trading interface. This can be used by traders on all continents.",
    },
    {
      Icon: "/assets/images/svg/newsletter.svg",
      title: "Newsletter",
      content:
        "Independent news is the basic prerequisite for developing an informed opinion. The LaRoucci SCH newsletter ensures that this service is available to all our clients.",
    },
  ];

  return (
    <div className="container">
      <div className="mt-20">
        <Heading desc={serviceSection.description} isMain isCenter>
          Services by LaRoucci Mining SCH | Kenya
        </Heading>
      </div>

      <div className="mb-32">
        <Heading isMain isCenter>
          {section2Header}
        </Heading>
        {/* <div className="flex items-center">
          <div className="space-y-5 text-center">
            <p className="text-base">{section2Content.content}</p>
          </div>
        </div> */}

        <section className="container mx-auto py-16 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
