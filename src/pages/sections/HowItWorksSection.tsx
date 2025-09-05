import { StarIcon } from "lucide-react";
import React, { JSX } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const eventSections = [
  {
    location: "RIYADH",
    date: "DEC 11-13",
    title: "MDLBEAST Soundstorm",
    priceFrom: "280",
    guests: "2",
    nights: "2",
  },
  {
    location: "RIYADH",
    date: "DEC 11-13",
    title: "LEAP Tech Conference",
    priceFrom: "280",
    guests: "2",
    nights: "2",
  },
  {
    location: "RIYADH",
    date: "DEC 11-13",
    title: "Riyadh Season",
    priceFrom: "280",
    guests: "2",
    nights: "2",
  },
];

const hotelCards = [
  {
    image: "figmaAssets/image-15.png",
    badge: "Popular this week",
    badgeColor: "bg-amber-400",
    favoriteIcon: "figmaAssets/button-2.svg",
    title: "Holiday Inn Hotel",
    rating: "4.9",
    location: "Riyadh",
    reviews: "127",
    distance: "1.1 km to venue",
    amenities: [
      { icon: "figmaAssets/frame-8.svg", name: "WiFi" },
      { icon: null, name: "Pool" },
      { icon: null, name: "Gym" },
    ],
    price: "200",
    pricePerPerson: "100",
  },
  {
    image: "figmaAssets/image-16.png",
    badge: "Special Deal",
    badgeColor: "bg-amber-400",
    favoriteIcon: "figmaAssets/button.svg",
    title: "Modern Beachfront Hotel",
    rating: "4.7",
    location: "Jeddah",
    reviews: "89",
    distance: "1.1 km to venue",
    amenities: [
      { icon: "figmaAssets/frame-3.svg", name: "WiFi" },
      { icon: null, name: "Pool" },
      { icon: null, name: "Gym" },
    ],
    price: "200",
    pricePerPerson: "100",
  },
  {
    image: "figmaAssets/image-17.png",
    badge: "Trending",
    badgeColor: "bg-amber-400",
    favoriteIcon: "figmaAssets/button.svg",
    title: "Desert Camp Experience Hotel",
    rating: "4.8",
    location: "AlUla",
    reviews: "64",
    distance: "1.1 km to venue",
    amenities: [
      { icon: "figmaAssets/frame-3.svg", name: "WiFi" },
      { icon: null, name: "Pool" },
      { icon: null, name: "Gym" },
    ],
    price: "200",
    pricePerPerson: "100",
  },
];

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-[30.6px] font-bold text-gray-900 [font-family:'Inter',Helvetica] mb-10">
          Top Events and nearest hotel stay
        </h2>

        <div className="space-y-16">
          {eventSections.map((event, sectionIndex) => (
            <div key={sectionIndex} className="space-y-6">
              <div className="flex justify-between items-end">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[10.2px] font-medium text-gray-500 [font-family:'Inter',Helvetica]">
                    <span>{event.location}</span>
                    <span>·</span>
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-[15.3px] font-bold text-black [font-family:'Inter',Helvetica]">
                    {event.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 text-[10.2px] text-gray-500 [font-family:'Inter',Helvetica]">
                  <div className="flex items-center gap-1">
                    <span>From</span>
                    <img
                      src="figmaAssets/saudi-riyal-symbol-svg-1-26.png"
                      alt="Saudi riyal symbol"
                      className="w-3.5 h-4 object-cover"
                    />
                    <span>{event.priceFrom}</span>
                  </div>
                  <span>|</span>
                  <div className="flex items-center gap-1">
                    <span>guest ·</span>
                    <span>{event.guests}</span>
                    <span>nights</span>
                  </div>
                  <Button
                    variant="link"
                    className="text-[#42cccc] text-[10.2px] font-medium p-0 h-auto"
                  >
                    See all
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {hotelCards.map((hotel, cardIndex) => (
                  <Card
                    key={cardIndex}
                    className="overflow-hidden shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_4px_6px_-1px_#0000001a,0px_2px_4px_-2px_#0000001a] h-auto"
                  >
                    <CardContent className="p-0">
                      <div className="relative h-48">
                        <div
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${hotel.image})` }}
                        >
                          <Badge
                            className={`absolute top-3 left-3 ${hotel.badgeColor} text-white text-[10.2px] font-bold [font-family:'Inter',Helvetica] rounded-full px-3 py-1`}
                          >
                            {hotel.badge}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-3 right-3 w-8 h-8 p-0"
                          >
                            <img
                              src={hotel.favoriteIcon}
                              alt="Favorite"
                              className="w-8 h-8"
                            />
                          </Button>
                        </div>
                      </div>

                      <div className="p-4 space-y-4">
                        <div className="flex justify-between items-start">
                          <h4 className="text-[15.3px] font-normal text-gray-900 [font-family:'Inter',Helvetica] flex-1">
                            {hotel.title}
                          </h4>
                          <div className="flex items-center gap-1 ml-2">
                            <StarIcon className="w-4 h-4 fill-current text-yellow-400" />
                            <span className="text-[11.9px] font-medium text-black [font-family:'Inter',Helvetica]">
                              {hotel.rating}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-[11.9px] text-gray-600 [font-family:'Inter',Helvetica]">
                          <span>{hotel.location}</span>
                          <span>•</span>
                          <span>{hotel.reviews}</span>
                          <span>reviews</span>
                          <span className="ml-auto text-[10.2px] text-gray-500">
                            {hotel.distance}
                          </span>
                        </div>

                        <div className="flex gap-2">
                          {hotel.amenities.map((amenity, amenityIndex) => (
                            <Badge
                              key={amenityIndex}
                              variant="secondary"
                              className="bg-gray-100 text-gray-900 text-[10.2px] font-normal [font-family:'Inter',Helvetica] px-2 py-1 rounded flex items-center gap-1"
                            >
                              {amenity.icon && (
                                <img
                                  src={amenity.icon}
                                  alt=""
                                  className="w-3 h-3"
                                />
                              )}
                              {amenity.name}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex justify-between items-end pt-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-1">
                              <img
                                src="figmaAssets/saudi-riyal-symbol-svg-1-26.png"
                                alt="Saudi riyal symbol"
                                className="w-6 h-[26px] object-cover"
                              />
                              <span className="text-[27.4px] font-bold text-gray-900 [font-family:'Inter',Helvetica]">
                                {hotel.price}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <img
                                src="figmaAssets/saudi-riyal-symbol-svg-1-26.png"
                                alt="Saudi riyal symbol"
                                className="w-[13px] h-[15px] object-cover"
                              />
                              <span className="text-[11.9px] font-normal text-black [font-family:'Inter',Helvetica]">
                                {hotel.pricePerPerson} per Person
                              </span>
                            </div>
                            <div className="text-[8px] font-normal text-black [font-family:'Inter',Helvetica]">
                              Per Night
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              className="border-[#42cccc] text-[#42cccc] text-[11.9px] font-normal [font-family:'Inter',Helvetica] px-6 py-4 h-auto rounded-lg"
                            >
                              Find Roommate
                            </Button>
                            <Button className="bg-[#42cccc] hover:bg-[#42cccc]/90 text-white text-[11.9px] font-normal [font-family:'Inter',Helvetica] px-6 py-4 h-auto rounded-lg flex items-center gap-2">
                              <img
                                src="figmaAssets/frame-2.svg"
                                alt=""
                                className="w-[13px] h-4"
                              />
                              <div className="text-center">
                                <div>Instant</div>
                                <div>Book</div>
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
