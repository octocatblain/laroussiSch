'use client';

import Accordion from "@/components/Accordion";
import Heading from "@/shared/Heading/Heading";
import Image from "next/image";
import carriers from "/public/assets/images/carriers.png";
import packaging from "/public/assets/images/packaging.png";
import shippingImage from "/public/assets/images/shipping.jpg";
import tracking from "/public/assets/images/tracking.jpg";

export default function Page() {

  const shippingSection = {
    description:
      "We are proud to offer fast, discreet, and fully insured shipping of your precious metals and precious stones directly to your home via our company or trust partners. You can rest easy knowing we have shipped precious metals and precious stones parcels and counting. Thanks to our proprietary shipment monitoring process, our specialized insurance, and our experienced fulfillment team, your shipment is in good hands.",
  };

  const section2Header = "Shipping Methods";

  const section3Header = "More About Our Shipping & Insurance Policies";

  const shippingMethods = [
    {
      image: carriers,
      title: "Shipping Carriers",
      description: "We ship via Brink's, USPS, FedEx, and UPS. The carrier used depends on your order's contents. Expedited shipping is available for a surcharge. Our fulfillment center near Airport enables us to load shipments directly onto carrier planes, reducing the risk of delays, theft, or losses.",
    },
    {
      image: packaging,
      title: "Shipment Packaging",
      description: "For precious metals, discretion and protection are essential. Products are securely wrapped and placed in a parcel with packing material to prevent shifting. Our return address and packaging do not indicate the valuable contents inside, ensuring your packages arrive safely and securely.",
    },
    {
      image: tracking,
      title: "Shipment Tracking",
      description: "Track your order from creation to doorstep delivery. You’ll receive an email notification when your order ships, typically within 1 business day of payment. Additional email updates will be sent for delays, when out for delivery, and upon delivery. SMS updates are also available for tracking.",
    },
  ];

  const section3 = { description: "Every single package we ship is sent with full third-party shipping insurance. This means that in the extremely unlikely case your package is lost or damaged in transit, your shipment will be covered. Please note that our insurance policies only extend to packages in transit – once the carrier obtains a signature or completes the delivery confirmation, our coverage ceases. It is a common misconception is that the carrier covers the shipment, this is not the case with precious metals. We insure it with a specific precious metals policy." };

  const faqsData = [
    {
      category: "Shipping & Insurance",
      data: [
        {
          question: "Is my package insured while in transit?",
          answer:
            "LaRoucci SCH and ABAMA fully insures all its shipments. If your package is lost or damaged in transit, we file a claim. At our discretion, we may re-ship your items or refund your money.",
        },
        {
          question: "My package appears to have been damaged or tampered with. What should I do?",
          answer:
            "We recommend refusing any shipment that appears damaged or tampered with, as insurance ends once signed for or delivered. Contact us within 48 hours of receiving a damaged package.",
        },
        {
          question: "What happens if my order is lost in transit?",
          answer:
            "If your package is lost in transit, contact us immediately. Claims must be filed within specific timeframes: 7 days for BRINK’S and 3 days for UPS from last tracking. Claims may take 30+ days to resolve.",
        },
        {
          question: "What happens if my order is damaged in transit?",
          answer:
            "If your order is damaged or items are missing, contact us within 48 hours of delivery to begin the claims process.",
        },
        {
          question: "Will I need to sign for my package?",
          answer:
            "Orders under $1,500 require a signature if selected and paid for. Orders over $2,000 always require a signature. Our responsibility ends once the package is delivered.",
        },
        {
          question: "What if my order shows delivered but I did not receive it?",
          answer:
            "Our liability ceases when a package is signed for or left at the delivery address. Report any issues within 2 days of recorded delivery.",
        },
      ],
    },
    {
      category: "Shipping Locations",
      data: [
        {
          question: "Do you ship internationally?",
          answer:
            "We ship to African, European, Asian, and American countries, including P.O. Boxes and APO addresses.",
        },
        {
          question: "Do I have to ship my order to my billing address?",
          answer:
            "Depending on payment method, you may ship to an address other than your billing address. For credit cards, please contact us to see if address changes are possible.",
        },
        {
          question: "Do you ship to US territories?",
          answer:
            "We ship to African, European, Asian, and American countries, including P.O. Boxes and APO addresses.",
        },
        {
          question: "Do we ship to P.O. Boxes?",
          answer: "No, we cannot ship to P.O. Boxes.",
        },
        {
          question: "Do you ship to UPS stores?",
          answer:
            "Yes, we can ship to UPS and other stores. However, our shipping insurance does not cover missing packages delivered to these locations.",
        },
      ],
    },
    {
      category: "Shipping Process",
      data: [
        {
          question: "How will I know when my order ships?",
          answer:
            "You will receive an email notification once your order ships. You can also check status by logging into your account or using our Order page.",
        },
        {
          question: "How do I choose my shipping method?",
          answer:
            "Select your preferred shipping method during checkout. If eligible for free shipping, base shipping (BRINK’S, UPS, or FedEx) is pre-selected. Upgrade options are available.",
        },
        {
          question: "If my order includes a presale item, will in-stock items ship first?",
          answer:
            "All items ship together once the presale item arrives to ensure full insurance coverage. Orders with presale items ship within 24-72 hours of presale item receipt.",
        },
        {
          question: "Do you offer UPS or FedEx shipping to Alaska and Hawaii?",
          answer:
            "Due to high costs, we use Brink’s for shipments to Alaska and Hawaii.",
        },
        {
          question: "How do you ship orders?",
          answer:
            "Orders are shipped discreetly via Brink’s, UPS, or FedEx. All shipments are fully insured.",
        },
      ],
    },
    {
      category: "Shipping Restrictions",
      data: [
        {
          question: "What does “No Will Call” mean?",
          answer:
            "No Will Call restricts pickup from carrier locations to prevent fraud. Carriers make three delivery attempts before returning packages to us.",
        },
        {
          question: "Where do you ship orders from?",
          answer:
            "Orders ship from our warehouses in Nairobi, Kenya, Central African Republic, Slovakia, London, Dubai, and Algeria. Our return address is masked to maintain discretion.",
        },
      ],
    },
  ];


  const handleTermsClick = () => {
    // Open the terms and conditions page
  }


  return (
    <div className="container">
      <div className="mt-20">
        <Heading desc={shippingSection.description} isMain isCenter>
          Shipping & Insurance - LaRoucci Mining SCH | Kenya
        </Heading>
      </div>

      <div className="mb-32">


        <div className="w-full mb-16 h-30 overflow-hidden rounded-lg shadow-lg"> 
          <Image
            src={shippingImage}
            alt="Shipping and Investments"
            style={{objectFit: "cover", display: "block", objectPosition: "center",
    margin: "auto"}}	
            objectFit="cover" 
            className="rounded-lg h-80 w-full"
          />
        </div>

        <Heading isMain isCenter>
          {section2Header}
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shippingMethods.map((method, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative w-full h-64">
                <Image
                  src={method.image}
                  alt={method.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center my-16">
        <button className="bg-black text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition duration-300">
          Learn More About Our Shipping Policies
        </button>
              </div>
               */}
        <div className="my-16">

          <Heading isMain isCenter>
            {section3Header}
          </Heading>

          <p className="text-gray-600 mb-4">{section3.description}</p>

          <p className="text-red-500 mt-16 text-outline-black text-center text-2xl mb-4 leading-relaxed">
            It is very important that you notify us immediately if there is an issue with your shipment, cooperate with our claims team, and abide by our{" "}
            <span
              className="font-semibold text-blue-600 underline cursor-pointer hover:text-black transition duration-150"
              onClick={() => handleTermsClick()}
            >
              Terms and Conditions (USER AGREEMENT)
            </span>. To learn more about our shipping practices and your responsibilities, see our{" "}
            <span
              className="font-semibold text-black underline cursor-pointer hover:text-slate-700 transition duration-150"
            >
              Shipping FAQ
            </span> below.
          </p>

        </div>

        <hr className="my-3"/>

        <div className="my-16">

          <div className="my-3">
            <Heading isMain isCenter>
              Shipping FAQs
            </Heading>
          </div>

          <div className="grid gap-20">
            {faqsData.map((item: any) => (
              <div key={item.category}>
                <Heading className="mb-5" isCenter>
                  {item.category}
                </Heading>
                <div className="grid gap-5 lg:grid-cols-2">
                  {item.data.map((itemData: any) => (
                    <Accordion {...itemData} key={itemData.question} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>


        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"></section>
      </div>
    </div>
  );
}