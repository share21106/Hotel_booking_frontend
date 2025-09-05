import { StarIcon, ZapIcon } from "lucide-react";
import React, { JSX } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const destinationCards = [
  {
    backgroundImage: "bg-[url(figmaAssets/image-4.png)]",
    containerImage: "figmaAssets/container-4.png",
    showOverlay: false,
  },
  {
    backgroundImage:
      "[background:url(figmaAssets/image-4.png)_50%_50%_/_cover]",
    containerImage: null,
    showOverlay: true,
    cityName: "Jeddah",
    hotelCount: "120",
  },
  {
    backgroundImage: "bg-[url(figmaAssets/image-5.png)]",
    containerImage: "figmaAssets/container-5.png",
    showOverlay: false,
  },
  {
    backgroundImage:
      "[background:url(figmaAssets/image-4.png)_50%_50%_/_cover]",
    containerImage: null,
    showOverlay: true,
    cityName: "Madina",
    hotelCount: "120",
  },
  {
    backgroundImage:
      "[background:url(figmaAssets/image-5.png)_50%_50%_/_cover]",
    containerImage: null,
    showOverlay: true,
    cityName: "Abha",
    hotelCount: "95",
  },
];

const hotelCards = [
  {
    image: "figmaAssets/image-15.png",
    badge: "Popular this week",
    badgeColor: "bg-amber-400",
    heartIcon: "figmaAssets/button-2.svg",
    name: "Holiday Inn Hotel",
    rating: "4.9",
    location: "Riyadh",
    reviewCount: "127",
    amenities: [
      { icon: "figmaAssets/frame-8.svg", name: "WiFi" },
      { name: "Pool" },
      { name: "Gym" },
    ],
  },
  {
    image: "figmaAssets/image-16.png",
    badge: "Special Deal",
    badgeColor: "bg-amber-400",
    heartIcon: "figmaAssets/button.svg",
    name: "Modern Beachfront Hotel",
    rating: "4.7",
    location: "Jeddah",
    reviewCount: "89",
    amenities: [
      { icon: "figmaAssets/frame-3.svg", name: "WiFi" },
      { name: "Pool" },
      { name: "Gym" },
    ],
  },
  {
    image: "figmaAssets/image-17.png",
    badge: "Trending",
    badgeColor: "bg-amber-400",
    heartIcon: "figmaAssets/button.svg",
    name: "Desert Camp Experience Hotel",
    rating: "4.8",
    location: "AlUla",
    reviewCount: "64",
    amenities: [
      { icon: "figmaAssets/frame-3.svg", name: "WiFi" },
      { name: "Pool" },
      { name: "Gym" },
    ],
  },
];

export const TrendingDestination = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Trending Destinations Section */}
        <div className="mb-16">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-gray-900 text-[30.6px] leading-10 tracking-[0] mb-4">
              Trending Destinations
            </h2>
            <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-[17px] leading-7 tracking-[0] max-w-[590px] mx-auto">
              Discover the most popular cities and properties across Saudi
              Arabia
            </p>
          </div>

          {/* Destination Cards */}
          <div className="grid grid-cols-5 gap-4">
            {destinationCards.map((destination, index) => (
              <div
                key={`destination-${index}`}
                className={`h-60 rounded-lg overflow-hidden shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_4px_6px_-1px_#0000001a,0px_2px_4px_-2px_#0000001a] ${destination.backgroundImage} bg-cover bg-[50%_50%] relative`}
              >
                {destination.containerImage && (
                  <img
                    className="absolute w-full h-60 top-0 left-0"
                    alt="Container"
                    src={destination.containerImage}
                  />
                )}
                {destination.showOverlay && (
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="[font-family:'Inter',Helvetica] font-bold text-[17px] leading-7 tracking-[0] mb-1">
                      {destination.cityName}
                    </h3>
                    <div className="flex items-center text-[11.9px] leading-5 tracking-[0]">
                      <span className="[font-family:'Inter',Helvetica] font-normal">
                        {destination.hotelCount}
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-normal ml-0">
                        Hotels
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Popular Hotels Section */}
        <div className="mb-16">
          {/* Header */}
          <div className="mb-14">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-gray-900 text-[20.4px] leading-8 tracking-[0]">
              Popular Hotels
            </h2>
          </div>

          {/* Hotel Cards */}
          <div className="grid grid-cols-3 gap-6">
            {hotelCards.map((hotel, index) => (
              <Card
                key={`hotel-${index}`}
                className="overflow-hidden shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_4px_6px_-1px_#0000001a,0px_2px_4px_-2px_#0000001a] border-0"
              >
                <CardContent className="p-0">
                  {/* Hotel Image */}
                  <div className="relative h-48">
                    <div
                      className="w-full h-full bg-cover bg-[50%_50%]"
                      style={{ backgroundImage: `url(${hotel.image})` }}
                    >
                      <Badge
                        className={`absolute top-3 left-3 ${hotel.badgeColor} text-white rounded-full px-3 py-1 text-[10.2px] font-bold leading-4`}
                      >
                        {hotel.badge}
                      </Badge>
                      <img
                        className="absolute w-8 h-8 top-3 right-3"
                        alt="Heart button"
                        src={hotel.heartIcon}
                      />
                    </div>
                  </div>

                  {/* Hotel Details */}
                  <div className="p-4">
                    {/* Name and Rating */}
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="[font-family:'Inter',Helvetica] font-normal text-gray-900 text-[15.3px] leading-7 tracking-[0] flex-1">
                        {hotel.name}
                      </h3>
                      <div className="flex items-center gap-1 ml-4">
                        <StarIcon className="w-4 h-4 fill-current text-yellow-400" />
                        <span className="[font-family:'Inter',Helvetica] font-medium text-black text-[11.9px] leading-5 tracking-[0]">
                          {hotel.rating}
                        </span>
                      </div>
                    </div>

                    {/* Location and Reviews */}
                    <div className="flex items-center gap-1 mb-5 text-[11.9px] leading-5 tracking-[0]">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-gray-600">
                        {hotel.location}
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-normal text-gray-600">
                        •
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-normal text-gray-600">
                        {hotel.reviewCount}
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-normal text-gray-600">
                        reviews
                      </span>
                    </div>

                    {/* Amenities */}
                    <div className="flex gap-2 mb-6">
                      {hotel.amenities.map((amenity, amenityIndex) => (
                        <Badge
                          key={`amenity-${index}-${amenityIndex}`}
                          variant="secondary"
                          className="bg-gray-100 text-gray-900 text-[10.2px] leading-4 tracking-[0] px-2 py-1 rounded flex items-center gap-1"
                        >
                          {amenity.icon && (
                            <img
                              className="w-3 h-3"
                              alt={amenity.name}
                              src={amenity.icon}
                            />
                          )}
                          <span className="[font-family:'Inter',Helvetica] font-normal">
                            {amenity.name}
                          </span>
                        </Badge>
                      ))}
                    </div>

                    {/* Pricing and Actions */}
                    <div className="flex justify-between items-end">
                      {/* Price */}
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <img
                            className="w-6 h-[26px] object-cover mr-1"
                            alt="Saudi riyal symbol"
                            src="figmaAssets/saudi-riyal-symbol-svg-1-26.png"
                          />
                          <span className="[font-family:'Inter',Helvetica] font-bold text-gray-900 text-[27.4px] leading-[50.1px] tracking-[0]">
                            200
                          </span>
                        </div>
                        <div className="flex items-center text-[11.9px] leading-5 tracking-[0]">
                          <img
                            className="w-[13px] h-[15px] object-cover mr-1"
                            alt="Saudi riyal symbol"
                            src="figmaAssets/saudi-riyal-symbol-svg-1-26.png"
                          />
                          <span className="[font-family:'Inter',Helvetica] font-normal text-black">
                            100 per Person
                          </span>
                        </div>
                        <span className="[font-family:'Inter',Helvetica] font-normal text-black text-[8px] leading-5 tracking-[0] ml-12">
                          Per Night
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="h-auto px-6 py-4 rounded-lg border-[#42cccc] text-[#42cccc] text-[11.9px] leading-5 tracking-[0] [font-family:'Inter',Helvetica] font-normal"
                        >
                          Find Roommate
                        </Button>
                        <Button className="h-auto px-4 py-2 bg-[#42cccc] hover:bg-[#42cccc]/90 rounded-lg text-white text-[11.9px] leading-5 tracking-[0] [font-family:'Inter',Helvetica] font-normal flex flex-col items-center">
                          <div className="flex items-center">
                            <ZapIcon className="w-[13px] h-2" />
                            <span>Instant</span>
                          </div>
                          <span>Book</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Hotels Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="h-auto px-8 py-4 rounded-md border-2 border-[#42cccc] text-[#42cccc] text-[13.6px] leading-6 tracking-[0] [font-family:'Inter',Helvetica] font-medium"
          >
            View All Hotels
          </Button>
        </div>
      </div>
    </section>
  );
};
