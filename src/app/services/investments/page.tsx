"use client";

import Heading from "@/shared/Heading/Heading";
import Image from "next/image";
import financeImage from "/assets/images/investment.jpg";

const page = () => {
  const serviceDescription = {
    description:
      "Elevate your investments with LaRoucci SCH & ABAMA, your trusted partner for personal finance, savings, and secure investment opportunities in precious metals and other investment vehicles.",
  };

  const investmentOptions = [
    {
      title: "I want to invest in the market",
      description:
        "Invest in stocks and ETFs with an easy-to-use, low-fee ABAMA advisor.",
      details:
        "Instantly compare and select top stocks, bonds, and ETFs across various markets to maximize your ROI.",
    },
    {
      title: "I want to save",
      description:
        "Find the best savings accounts to earn more interest for your daily finances.",
      details:
        "Compare high-yield savings accounts across Kenya, Slovakia, Central African Republic, Algeria, and Bahrain to secure competitive interest rates.",
    },
    {
      title: "I want low-risk returns",
      description:
        "Lock your money in a Guaranteed Investment Certificate (GIC) and earn secure returns for the near future.",
      details:
        "Explore GIC options offering guaranteed returns on your investments with flexible terms to suit your financial goals.",
    },
  ];

  const rrspInfo = {
    intro: "A registered retirement savings plan (RRSP) gives you a fair degree of latitude in how you financially prepare for your retirement. The government allows Kenya, Slovakia, Central African Republic, Algeria, and Bahrain to buy, sell, and hold certain investments within RRSPs. However, not all investments qualify, and there can be substantial tax penalties for non-qualified investments.",
    types: [
      {
        title: "Managed RRSP",
        description: "An RRSP managed by an external party, where investment decisions are handled by a financial advisor.",
      },
      {
        title: "Self-Directed RRSP",
        description:
          "A self-directed RRSP where the account holder makes their own investment decisions.",
      },
    ],
    qualifiedInvestments: [
      "Cash",
      "Individual stocks on major domestic or foreign stock exchanges",
      "Government Bonds",
      "Corporate Bonds",
      "Savings Bonds",
      "Mutual Funds",
      "Index Funds",
      "Exchange-Traded Funds (ETFs)",
      "Mortgages and mortgage-backed securities",
      "Shares in Canadian small businesses",
      "Gold and silver",
    ],
    nonQualifiedInvestments: [
      "Businesses in which you have an interest of 10% or more",
      "Precious metals other than gold and silver",
      "Commodity futures contracts",
      "Shares in private holding companies and private foreign corporations",
      "Debt you own",
      "Personal property such as antiques or furniture",
    ],
    investmentTypes: [
      {
        title: "Stocks",
        description:
          "Stocks offer potential capital gains and dividends. They can be held in an RRSP if they trade on a major exchange.",
      },
      {
        title: "Bonds",
        description:
          "Bonds are fixed-income investments that pay interest over time. Government and corporate bonds are eligible for RRSPs.",
      },
      {
        title: "Mutual Funds",
        description:
          "Mutual funds are managed pools of stocks and/or bonds. They have an annual management fee called the management expense ratio (MER).",
      },
      {
        title: "GICs",
        description:
          "Guaranteed Investment Certificates (GICs) are fixed-income investments that pay interest and return the principal at the end of the term.",
      },
      {
        title: "ETFs",
        description:
          "ETFs are baskets of stocks or bonds, typically passively managed. They track a particular index or sector.",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header Section with Image */}
      <div className="text-center mt-12 mb-16">
        <Heading desc={serviceDescription.description} isMain isCenter>
          LaRoucci SCH & ABAMA Investments
        </Heading>
      </div>

      <div className="w-full mb-16 h-30 rounded-lg overflow-hidden shadow-lg">
        <Image
          width={1000}
          height={320}
          src={financeImage}
          alt="Finance and Investments"
          className="rounded-lg w-full h-80"
        />
      </div>

      {/* Investment Categories */}
      <div className="mb-16">
        <Heading isMain isCenter>
          Why Choose LaRoucci SCH & ABAMA?
        </Heading>
        <p className="text-center text-lg mt-4">
          Discover a wide range of investment options tailored to meet your financial goals.
        </p>
      </div>

      {/* Options Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {investmentOptions.map((option, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-4">{option.title}</h3>
            <p className="text-gray-700 mb-4">{option.description}</p>
            <p className="text-gray-500 text-sm">{option.details}</p>
          </div>
        ))}
      </div>

      {/* RRSP Introduction Section */}
      <div className="bg-gray-100 rounded-lg p-8 mb-32">
        <Heading isCenter isMain>
          Understanding RRSP Investments
        </Heading>
        <p className="text-gray-700 text-lg mt-4">{rrspInfo.intro}</p>

        <div className="mt-6">
          <h4 className="text-xl font-semibold text-gray-800">
            Types of RRSPs
          </h4>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            {rrspInfo.types.map((type, index) => (
              <li key={index} className="mb-2">
                <strong>{type.title}:</strong> {type.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Qualified and Non-Qualified Investments */}
        <div className="mt-6">
          <h4 className="text-xl font-semibold text-gray-800">
            Qualified Investments for RRSPs
          </h4>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            {rrspInfo.qualifiedInvestments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-8">
            Non-Qualified Investments for RRSPs
          </h4>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            {rrspInfo.nonQualifiedInvestments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* RRSP Investment Types */}
        <div className="mt-6">
          <h4 className="text-xl font-semibold text-gray-800">
            Types of Investments in RRSPs
          </h4>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            {rrspInfo.investmentTypes.map((investment, index) => (
              <li key={index} className="mb-2">
                <strong>{investment.title}:</strong> {investment.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Risk Tolerance and Goal Setting */}
        <div className="mt-6">
          <h4 className="text-xl font-semibold text-gray-800">
            Choosing the Best Investments for Your RRSP
          </h4>
          <p className="text-gray-700 mt-2">
            Consider your investment goals and risk tolerance, which may vary based on your age and financial experience. Younger investors might take on higher risk for potentially higher returns, while those nearing retirement may prefer more conservative investments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
