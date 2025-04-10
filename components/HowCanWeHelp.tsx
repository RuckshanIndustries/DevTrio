import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Star from "@/public/images/star.png";
import First from "@/public/images/helpSectionFirst.png";
import Second from "@/public/images/helpSectionSecond.png.png";
import Third from "@/public/images/helpSectionThird.png.png";

interface Service {
  title: string;
  description: string;
  items: string[];
  image: any;
}

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Crafting responsive, user-friendly websites that drive engagement and deliver seamless user experiences. We specialize in custom website design, e-commerce solutions, and CMS development.",
    items: ["CMS Integration", "E-Commerce Solutions", "Responsive Designs"],
    image: First,
  },
  {
    title: "Digital Design",
    description:
      "Creating visually appealing designs to elevate your brand identity. We specialize in logo and branding, graphic design, UI/UX, and motion graphics. Our goal is to make your brand stand out.",
    items: ["Logo & Branding", "UI/UX Design", "Motion & Animations"],
    image: Second,
  },
  {
    title: "Mobile App Development",
    description:
      "Developing high-performance mobile applications tailored to your business needs. We specialize in iOS and Android development, cross-platform solutions with React Native and Flutter, and app store optimization.",
    items: [
      "iOS & Android Apps",
      "Cross-Platform Solutions",
      "App Store Optimization",
    ],
    image: Third,
  },
];

const HowCanWeHelp: React.FC = () => {
  return (
    <div className="bg-secondary-400 p-4 px-40 mt-10">
      <h2 className="text-5xl font-bold text-center mb-4 text-black">
        How Can We Help You?
      </h2>
      <div className="flex justify-center items-center mb-10">
        <Image src={Star} alt="logo-lg" height="16" width="16" priority />
        <h2 className="text-base font-normal text-center text-black mx-2">
          Our Services
        </h2>
        <Image src={Star} alt="logo-lg" height="16" width="16" priority />
      </div>
      <Separator className="flex-grow bg-slate-500 h-0.5 mx-2" />
      <div className="flex flex-col">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <Card className="border-none bg-secondary-200 text-black">
              <CardHeader className="flex flex-row justify-between space-x-4 pt-6">
                <CardTitle className="text-4xl font-bold mt-0 flex-1">
                  {service.title}
                </CardTitle>
                <Image
                  src={service.image}
                  alt={`${service.title} icon`}
                  height="32"
                  width="32"
                  className="flex-shrink-0"
                />
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row justify-start py-4 mt-4">
                  <div className="md:w-1/2 pr-6">
                    <p className="text-2xl mb-6">{service.description}</p>
                  </div>
                  <div className="md:w-1/4 flex flex-col justify-center space-y-2"></div>
                  <div className="md:w-1/2 flex flex-col justify-center space-y-2">
                    {service.items.map((item, idx) => (
                      <React.Fragment key={idx}>
                        <span className="flex text-2xl items-center gap-x-4 py-space-3xs font-bold text-accent-500 xl:gap-x-space-md xl:py-space-2xs">
                          <span className="font-mono text-2xl font-medium leading-[200%] text-secondary-75">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          {item}
                        </span>
                        {idx < service.items.length - 1 && (
                          <Separator className="bg-slate-500 w-full" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            {index < services.length - 1 && (
              <Separator className="flex-grow bg-slate-500 h-0.5 mx-2" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HowCanWeHelp;
