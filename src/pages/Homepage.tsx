import React, { JSX } from "react";
import { Button } from "../components/ui/button";
import { CommunitySection } from "./sections/CommunitySection";
import { TrendingDestination } from "./sections/TrendingDestination";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { PopularHotelsSection } from "./sections/PopularHotelsSection";
import { TopEventsSection } from "./sections/TopEventsSection";
import { TravelingDestinationsSection } from "./sections/TravelingDestinationsSection";

export const Homepage = (): JSX.Element => {
  return (
    <div className="flex items-center gap-2.5 relative bg-white w-full min-w-[1497px]">
      <div className="flex flex-col items-center gap-0.5 relative flex-1 grow">
        <header className="relative w-[1280px] h-16">
          <nav className="relative w-[1216px] h-16 left-8">
            <div className="absolute w-[82px] h-8 top-4 left-0">
              <div className="relative h-8">
                <img
                  className="absolute w-[65px] h-[67px] -top-4 left-0"
                  alt="Original logo symbol"
                  src="figmaAssets/original-logo-symbol-1.png"
                />
              </div>
            </div>

            <div className="absolute w-48 h-10 top-3 left-[1024px]">
              <Button
                variant="outline"
                className="absolute px-[16px] py-[10.5px] h-10 top-0 left-0 rounded-[9px] border border-solid border-[#42cccc] bg-transparent text-[#42cccc] hover:bg-[#42cccc] hover:text-white [font-family:'Inter',Helvetica] font-medium text-[13.6px] tracking-[0]"
              >
                Sign In
              </Button>

              <Button className="absolute px-[16px] py-[10.5px] h-10 top-0 left-[98px] bg-[#42cccc] hover:bg-[#42cccc]/90 rounded-md [font-family:'Inter',Helvetica] font-medium text-white text-[13.6px] tracking-[0] h-auto">
                Register
              </Button>
            </div>

            <div className="absolute px-[16px] py-[10.5px] h-10 top-3 left-[920px]">
              <Button
                variant="ghost"
                className="w-[123px] top-2.5 left-[-57px] font-medium text-[#42cccc] hover:text-[#42cccc]/80 hover:bg-transparent text-center absolute h-[19px] [font-family:'Inter',Helvetica] text-[13.6px] tracking-[0] leading-6 whitespace-nowrap bg-transparent"
              >
                List your Hotel
              </Button>
            </div>
          </nav>
        </header>

        <HeroSection />
        <TravelingDestinationsSection />
        <TrendingDestination />
        <HowItWorksSection />
        <TopEventsSection />
        <PopularHotelsSection />
        <CommunitySection />
      </div>
    </div>
  );
};
