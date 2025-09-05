import { CalendarIcon } from "lucide-react";
import React, { JSX } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[690px] bg-[url(figmaAssets/image.png)] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40">
        <div className="container mx-auto px-12 h-full flex flex-col justify-center items-center">
          <div className="text-center mb-20">
            <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-[40.8px] leading-[48px] mb-4">
              Find your stay, share the cost.
            </h1>
            <div className="[font-family:'Inter',Helvetica] font-normal text-white text-[17px] leading-7">
              <p>
                Discover premium hotels across Saudi Arabia and share the room,
                split the cost
              </p>
              <p>with costayers.</p>
            </div>
          </div>

          <Card className="w-full max-w-[908px] bg-white rounded-lg border-[6px] border-[#fbbe2d] shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="md:col-span-1">
                  <div className="relative">
                    <img
                      className="absolute w-8 h-[52px] top-0 left-0 z-10"
                      alt="Container"
                      src="figmaAssets/container-11.svg"
                    />
                    <Input
                      className="h-[52px] pl-12 pr-3 [font-family:'Inter',Helvetica] font-normal text-base border-gray-300"
                      placeholder="Where are you going? Search event & location"
                      defaultValue=""
                    />
                  </div>
                </div>

                <div className="relative">
                  <img
                    className="absolute w-8 h-[52px] top-0 left-0 z-10"
                    alt="Container"
                    src="figmaAssets/container-15.svg"
                  />
                  <div className="relative">
                    <Input
                      className="h-[52px] pl-12 pr-10 [font-family:'Inter',Helvetica] font-normal text-base border-gray-300"
                      placeholder="Check-in"
                      defaultValue=""
                    />
                    <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className="relative">
                  <img
                    className="absolute w-8 h-[52px] top-0 left-0 z-10"
                    alt="Container"
                    src="figmaAssets/container-15.svg"
                  />
                  <Input
                    className="h-[52px] pl-12 pr-10 [font-family:'Inter',Helvetica] font-normal text-base border-gray-300"
                    placeholder="Check-out"
                    defaultValue=""
                  />
                  <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div className="flex justify-center gap-[13px]">
                <Button className="px-[32px] py-[16px] bg-[#42cccc] hover:bg-[#42cccc]/90 text-white [font-family:'Inter',Helvetica] font-medium text-[15.3px] rounded-md">
                  Search Now
                </Button>
                <Button
                  variant="outline"
                  className="px-[32px] py-[16px] border-[#42cccc] text-[#42cccc] hover:bg-[#42cccc]/10 [font-family:'Inter',Helvetica] font-medium text-[13.6px] rounded-[9px]"
                >
                  Trending Event's
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
