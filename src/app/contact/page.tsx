import Link from "next/link";

import { contactSection } from "@/data/content";
import ButtonCircle3 from "@/shared/Button/ButtonCircle3";
import Heading from "@/shared/Heading/Heading";

import ContactForm from "./ContactForm";

const page = () => {
  return (
    <div className="container">
      <div className="mt-20">
        <Heading desc={contactSection.description} isMain isCenter>
          {contactSection.heading}
        </Heading>
      </div>

      <div className="mb-32">
        <div className="grid gap-10 lg:grid-cols-4">
          {contactSection.directContactInfo.map((info) => (
            <div
              key={info.title}
              className="flex flex-col items-center justify-center gap-2"
            >
              <ButtonCircle3 className="text-primary" size="w-10 h-10">
                {info.icon}
              </ButtonCircle3>

              <h2 className="text-2xl font-medium">{info.title}</h2>
              <Link href={info.contactLink.href}>{info.contactLink.title}</Link>
            </div>
          ))}
        </div>

        {/* Corporate Information and Opening Hours in Two Columns */}
        <div className="mx-auto my-10 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 bg-gray-100 p-5 md:p-10 lg:p-16 rounded-3xl">
          {/* Additional Business Information Section */}
          <div>
            <h2 className="text-2xl font-medium text-start mb-8">
              Corporate Information
            </h2>
            <ul className="space-y-4">
              <li>
                <strong>Business Name:</strong>{" "}
                {contactSection.additionalInfo.businessName}
              </li>
              <li>
                <strong>Business Address:</strong>{" "}
                <span className="flex flex-col gap-1">
                  <p>{contactSection.additionalInfo.address}</p>
                  <p>{contactSection.additionalInfo.mailingAddress}</p>
                </span>
              </li>
              <li>
                <strong>Country/State of Incorporation:</strong>{" "}
                {contactSection.additionalInfo.registeredOffice} -{" "}
                {contactSection.additionalInfo.countryIncorporation}
              </li>
            </ul>
          </div>

          {/* Opening Hours Section */}
          <div>
            <h2 className="text-2xl font-medium text-start mb-8">
              Opening Hours
            </h2>
            <ul className="space-y-4">
              {contactSection.openingHours.map((dayInfo, index) => (
                <li key={index}>
                  <strong>{dayInfo.day}:</strong> {dayInfo.hours}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto my-20 max-w-3xl rounded-3xl p-5 md:p-10 lg:p-16">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default page;
