"use client";

// import ReactComponent from "*.svg";
// import { contactSection } from "@/data/content";

import { onSalePreciousMetalsInfo } from "@/data/content";
import Heading from "@/shared/Heading/Heading";
const page = () => {
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

  const section2Header = "Precious Metals Bullion";

  const metalsCollection = [
    "Germanium",
    "Silicon",
    "Tellurium",
    "Tantalum",
    "Nickel",
    "Tungsten",
    "Tin",
    "Carbon",
    "Cobalt",
    "Niobium",
    "Ytterbium",
    "Indium",
    "Rhenium",
    "Chromium",
    "Bismuth",
    "Zirconium",
    "Iron",
    "Molybdenum"
  ];


  return (
    <div className="container">
      <div className="mt-20">
        <Heading desc={serviceSection.description} isMain isCenter>
          WholeSale Services - LaRoucci Mining SCH | Kenya
        </Heading>
      </div>

      <div className="mb-32">
        <Heading isMain isCenter>
          {section2Header}
        </Heading>

        <div className="">
          <p className="space-y-2 text-gray-600 mb-4">While LaRoucci SCH and ABAMA has long offered investors the opportunity to purchase well-known and popular precious metals such as gold, silver, platinum, and palladium, we also strive to provide variety and countless options to our buyers. With other metals such as copper already a long-standing option for buyers, there are other lesser-known and rare metals out there that are becoming increasingly common in bar and round collections. Below, you can learn about some of these more unique metals coming to our collection.</p>

          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-6 mb-3 gap-4">
            {metalsCollection.map((metal, index) => (
              <div key={index} className="p-2 font-bold border rounded-full bg-slate-100 text-center">
                {metal}
              </div>
            ))}
          </div>


          <div className="p-6 mx-auto my-8 w-full text-gray-800">
            <h1 className="text-3xl text-center font-bold mb-4">{onSalePreciousMetalsInfo.title}</h1>
            <p className="mb-6 space-y-2 mb-4">{onSalePreciousMetalsInfo.description}</p>

            {/* Locations Table */}
            <h2 className="text-2xl text-center font-semibold my-4 mb-3">Our Locations</h2>
            <div className="w-full justify-center flex flex-wrap gap-4 mb-6">
              {onSalePreciousMetalsInfo.locations.map((location, index) => (
                <div key={index} className="border rounded-full p-3 w-full sm:w-auto">
                  {location}
                </div>
              ))}
            </div>


            {/* Product Types Table */}
            {onSalePreciousMetalsInfo.productTypes.map((type, index) => (
              <div key={index} className="mb-8 my-4">
                <h2 className="text-2xl font-semibold mb-3 font-bold text-center">{type.category}</h2>
                <hr className="my-2" />
                <table className="table-auto w-full mb-4">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left">Metal</th>
                      <th className="px-4 py-2 text-left">Themes / Weights</th>
                    </tr>
                  </thead>
                  <tbody>
                    {type.metals.map((metalObj: any, metalIndex: any) => (
                      <tr key={metalIndex}>
                        <td className="border px-4 py-2">{metalObj.metal}</td>
                        <td className="border px-4 py-2">
                          {metalObj?.themes ? (
                            <ul className="grid grid-cols-4 gap-2 list-inside">
                              {metalObj?.themes?.map((theme: any, themeIndex: any) => (
                                <li key={themeIndex}>{theme}</li>
                              ))}
                            </ul>
                          ) : (
                            <ul className="grid grid-cols-4 gap-2 list-inside">
                              {metalObj.weights.map((weight: any, weightIndex: any) => (
                                <li key={weightIndex}>{weight}</li>
                              ))}
                            </ul>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}


            <h2 className="text-2xl text-center font-semibold mb-3">How it Works</h2>
            <ul className="list-disc list-inside space-y-2 pl-5 mb-6 text-gray-700">
              {onSalePreciousMetalsInfo.howItWorks.map((point, index) => (
                <li key={index} className="pl-1 text-lg ">
                  {point}
                </li>
              ))}
            </ul>


            <h2 className="text-2xl text-center font-semibold mb-3">What to Expect</h2>
            <p className="mb-6 space-y-1">{onSalePreciousMetalsInfo.expectations}</p>

            <h2 className="text-2xl text-center font-semibold mb-3">Buying On-Sale Precious Metals</h2>
            <p className="space-y-1">{onSalePreciousMetalsInfo.buyingInfo}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default page;
