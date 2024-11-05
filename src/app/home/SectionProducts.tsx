import Image from "next/image";
import React from "react";
import Heading from "@/shared/Heading/Heading";
import goldImage from "@/images/gold.png"; // Example image, replace with actual image
import silverImage from "@/images/silver.png"; // Example image, replace with actual image
import platinumImage from "@/images/platinum.png"; // Example image, replace with actual image

const LaRoucciSCHPage = () => {
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
      image: silverImage,
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
      image: goldImage,
    },
  ];

  return (
    <div className="container">
      <Heading className="mb-5 max-w-3xl">
        LaRoucci SCH - Precious Metals
      </Heading>
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
  );
};

export default LaRoucciSCHPage;
