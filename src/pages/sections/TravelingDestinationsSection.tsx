import React, { JSX } from "react";
import { Card, CardContent } from "../../components/ui/card";
export const TravelingDestinationsSection = (): JSX.Element => {
  const steps = [
    {
      icon: "figmaAssets/container.png",
      title: "Create your profile",
      description:
        "Tell us about your travel dates, preferred destinations and the type of experience you're looking for.",
    },
    {
      icon: "figmaAssets/container-1.png",
      title: "Browse & Match",
      description:
        "Discover premium hotels across Saudi Arabia and the wider region. Browse other verified travellers' profiles and choose",
    },
    {
      icon: "figmaAssets/container-2.png",
      title: "Book together",
      description:
        "Once you both agree, book your shared stay instantly. Payments are split automatically, and Costay handles all coordination.",
    },
    {
      icon: "figmaAssets/container-3.png",
      title: "Enjoy your stay",
      description:
        "Meet your co‑traveller at the hotel, share new experiences and create lasting memories.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-[132px]">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-gray-900 text-[30.6px] leading-10 mb-[56px]">
            How costay Works
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-[17px] leading-7 max-w-[712px] mx-auto">
            Join thousands of travelers enjoying shared hotel accommodations
            across Saudi Arabia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="h-[264px] bg-white rounded-lg shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_4px_6px_-1px_#0000001a,0px_2px_4px_-2px_#0000001a]"
            >
              <CardContent className="p-6 h-full flex flex-col items-center text-center">
                <img
                  className="w-16 h-16 mb-6"
                  alt="Step icon"
                  src={step.icon}
                />

                <h3 className="[font-family:'Inter',Helvetica] font-normal text-gray-900 text-[17px] leading-7 mb-4">
                  {step.title}
                </h3>

                <p
                  className="[font-family:'Inter',Helvetica] font-normal text-[13.6px] leading-6 flex-1 text-gray-600"
                >
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
