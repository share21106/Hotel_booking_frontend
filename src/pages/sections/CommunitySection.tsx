import React, { JSX } from "react";
import { Button } from "../../components/ui/button";

export const CommunitySection = (): JSX.Element => {
  const footerSections = [
    {
      title: "About costay",
      links: [
        { text: "Our Story", href: "#" },
        { text: "How It Works", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Press", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Help Center", href: "#" },
        { text: "Safety Information", href: "#" },
        { text: "Cancellation Options", href: "#" },
        { text: "Contact Us", href: "#" },
      ],
    },
    {
      title: "Hotels",
      links: [
        { text: "List Your Hotels", href: "#" },
        { text: "Hotels Resources", href: "#" },
        { text: "Community Forum", href: "#" },
        { text: "Costay Certified Hotel", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Terms of Service", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Cookie Policy", href: "#" },
      ],
    },
  ];

  return (
    <section className="relative w-full">
      <div className="relative w-full h-[332px]">
        <div className="relative w-full h-[330px] bg-[url(figmaAssets/screenshot-2025-08-31-at-6-02-34-pm-1.png)] bg-cover bg-center">
          <div className="flex flex-col items-center justify-center h-full px-4">
            <h1 className="w-full max-w-[1033px] [font-family:'Inter',Helvetica] font-bold text-white text-[42px] text-center tracking-[0] leading-8 mb-[23px]">
              Start your journey with CoStay today.
            </h1>

            <p className="w-full max-w-[1033px] [font-family:'Inter',Helvetica] font-medium text-white text-xl text-center tracking-[0] leading-8 mb-16">
              Join thousands of travelers enjoying shared accommodations and
              authentic experiences
            </p>

            <div className="flex gap-4">
              <Button className="w-[170px] h-[52px] bg-[#42cccc] hover:bg-[#3bb8b8] rounded-md h-auto">
                <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[13.6px] text-center tracking-[0] leading-6">
                  Signup Free
                </span>
              </Button>

              <Button
                variant="secondary"
                className="w-[211px] h-[52px] bg-white hover:bg-gray-50 rounded-[9px] h-auto"
              >
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#42cccc] text-[13.6px] text-center tracking-[0] leading-6">
                  List Your Hotel
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full bg-[#42cccc]">
        <div className="max-w-[1280px] mx-auto px-4 py-12">
          <div className="grid grid-cols-4 gap-8 mb-16">
            {footerSections.map((section, index) => (
              <div key={index} className="w-[280px]">
                <h3 className="[font-family:'Inter',Helvetica] font-normal text-black text-[15.3px] tracking-[0] leading-7 mb-4">
                  {section.title}
                </h3>
                <nav className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="block [font-family:'Inter',Helvetica] font-normal text-black text-[13.6px] tracking-[0] leading-6 hover:underline"
                    >
                      {link.text}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-8 mb-16">
            <div className="col-start-4 w-[280px]">
              <h3 className="[font-family:'Inter',Helvetica] font-normal text-black text-[15.3px] tracking-[0] leading-7 mb-4">
                Follow Us
              </h3>
              <img
                className="w-[280px] h-6"
                alt="Social media icons"
                src="figmaAssets/container-16.svg"
              />
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="text-center">
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#1e1e1e] text-[13.6px] text-center tracking-[0] leading-6">
                © 2025 CoStay. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
