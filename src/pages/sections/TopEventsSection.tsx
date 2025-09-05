import React, { JSX } from "react";
import { Card, CardContent } from "../../components/ui/card";

export const TopEventsSection = (): JSX.Element => {
  const features = [
    {
      icon: "figmaAssets/container-8.svg",
      title: "AI Roommate Matching",
      description: "Compatibility scoring for safe social travel.",
    },
    {
      icon: "figmaAssets/container-7.svg",
      title: "Secure Split Payments",
      description: "Seamless multi-user booking & payment.",
    },
    {
      icon: "figmaAssets/container-17.svg",
      title: "Verified User Profiles",
      description: "Building trust through identity verification.",
    },
    {
      icon: "figmaAssets/container-6.svg",
      title: "Chat & Meet",
      description: "Communicate with potential roommates before booking.",
    },
    {
      icon: "figmaAssets/container-9.svg",
      title: "Review System",
      description: "Rate roommates and hotels post-stay.",
    },
    {
      icon: "figmaAssets/container-13.svg",
      title: "Curated Hotel Partnerships",
      description: "Access quality hotels approved for sharing.",
    },
  ];

  return (
    <section className="w-full bg-[#f0f7fa] py-12 overflow-hidden">
      <div className="max-w-[1152px] mx-auto px-4">
        <header className="text-center mb-[88px]">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-gray-900 text-[30.6px] leading-10">
            How costay makes hotel sharing safe and simple
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white rounded-lg shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_1px_2px_#0000000d] h-32"
            >
              <CardContent className="p-6 flex items-start gap-4 h-full">
                <img
                  className="w-6 h-6 flex-shrink-0"
                  alt="Feature icon"
                  src={feature.icon}
                />
                <div className="flex-1">
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-gray-800 text-[15.3px] leading-7 mb-2">
                    {feature.title}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-[13.6px] leading-6">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
