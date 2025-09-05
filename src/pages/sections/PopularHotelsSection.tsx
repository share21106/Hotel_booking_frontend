import React, { JSX } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const PopularHotelsSection = (): JSX.Element => {
  const featureCards = [
    {
      icon: "figmaAssets/container-18.svg",
      title: "Trusted by 10,000+ travelers in Saudi",
      subtitle: "Arabia",
    },
    {
      icon: "figmaAssets/container-20.svg",
      title: "Verified hotels & secure payments",
      subtitle: "",
    },
    {
      icon: "figmaAssets/container-10.svg",
      title: "Real reviews from travelers like you",
      subtitle: "",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed K.",
      location: "Riyadh",
      avatar: "figmaAssets/image-19.png",
      rating: "figmaAssets/container-12.svg",
      review: [
        "CoStay helped me find the perfect villa to",
        "share with colleagues during a business trip to",
        "Riyadh. The cost savings were significant and",
        "the experience was seamless.",
      ],
    },
    {
      name: "Layla M.",
      location: "Jeddah",
      avatar: "figmaAssets/image-20.png",
      rating: "figmaAssets/container-12.svg",
      review: [
        "I was hesitant about sharing accommodation,",
        "but CoStay's verification process made me",
        "feel secure. I ended up making new friends",
        "while exploring AlUla!",
      ],
    },
    {
      name: "Omar S.",
      location: "Dammam",
      avatar: "figmaAssets/image-21.png",
      rating: "figmaAssets/container-12.svg",
      review: [
        "As a property owner, listing on CoStay has",
        "been profitable and hassle-free. The support",
        "team is responsive and the booking process is",
        "streamlined.",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-gray-900 text-[30.6px] leading-10 [font-family:'Inter',Helvetica] tracking-[0] mb-4">
            Our Community
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-[17px] tracking-[0] leading-7 max-w-[730px] mx-auto">
            Experience the costay difference with our trusted community of
            travelers and hotels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className="bg-gray-50 border-0 shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_1px_2px_#0000000d] h-24"
            >
              <CardContent className="flex items-center p-6 h-full">
                <img
                  className="w-10 h-10 mr-4 flex-shrink-0"
                  alt="Feature icon"
                  src={card.icon}
                />
                <div className="flex-1">
                  <div className="[font-family:'Inter',Helvetica] font-medium text-gray-900 text-[13.6px] tracking-[0] leading-6">
                    {card.title}
                  </div>
                  {card.subtitle && (
                    <div className="[font-family:'Inter',Helvetica] font-medium text-gray-900 text-[13.6px] tracking-[0] leading-6">
                      {card.subtitle}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
          
        </div>
        <div className="m-auto flex justify-center mb-8 w-lg ">
            <Button className=" bg-[#42cccc] hover:bg-[#42cccc]/90 text-white font-medium text-[15.3px] tracking-[0] leading-7 px-7 py-4 h-auto rounded-md [font-family:'Inter',Helvetica]">
              Join Community
            </Button>
          </div>
        <div
          className="relative mb-16 rounded-xl overflow-hidden h-80 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(figmaAssets/image-18.png)" }}
        >
          <div className="h-full bg-[#00000033] flex items-center">
            <div className="max-w-[512px] ml-12">
              <div className="mb-6">
                <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-[25.5px] tracking-[0] leading-9 mb-1">
                  Create memories with new
                </h3>
                <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-[25.5px] tracking-[0] leading-9">
                  friends in beautiful settings
                </h3>
              </div>
              <div>
                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[15.3px] tracking-[0] leading-7 mb-1">
                  CoStay connects like-minded travelers for
                </p>
                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[15.3px] tracking-[0] leading-7">
                  authentic shared experiences
                </p>
              </div>
            </div>
          </div>
          
        </div>

        <div className="text-center mb-8">
          <h3 className="[font-family:'Inter',Helvetica] font-bold text-gray-900 text-[20.4px] tracking-[0] leading-8">
            What Our Community Says
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-100 shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_4px_6px_-1px_#0000001a,0px_2px_4px_-2px_#0000001a] h-[238px]"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center mr-4"
                    style={{ backgroundImage: `url(${testimonial.avatar})` }}
                  />
                  <div>
                    <div className="[font-family:'Inter',Helvetica] font-medium text-gray-900 text-[13.6px] tracking-[0] leading-6">
                      {testimonial.name}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-[11.9px] tracking-[0] leading-5">
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                <img
                  className="w-full h-4 mb-4"
                  alt="Rating"
                  src={testimonial.rating}
                />

                <div className="space-y-1">
                  {testimonial.review.map((line, lineIndex) => (
                    <div
                      key={lineIndex}
                      className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[13.6px] tracking-[0] leading-6"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
