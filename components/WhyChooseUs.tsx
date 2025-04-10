import React from "react";
import Image from "next/image";
import InnovationIcon from "@/public/images/InnovationImage.png";
import QualityIcon from "@/public/images/QualityImage.png";
import ClientIcon from "@/public/images/ClientImage.png";

interface Feature {
  title: string;
  description: string;
  image: any;
}

const features: Feature[] = [
  {
    title: "Innovation",
    description:
      "Adopting the latest technologies and creative solutions to lead industry trends.",
    image: InnovationIcon,
  },
  {
    title: "Quality",
    description:
      "Maintaining the highest standards for flawless and effective results.",
    image: QualityIcon,
  },
  {
    title: "Client-Centricity",
    description:
      "Understanding and exceeding client needs while building strong, collaborative relationships.",
    image: ClientIcon,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="bg-white p-1 mt-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-black">
        Why choose us
      </h2>

      <div className="flex justify-center gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col bg-white p-6 border rounded-lg shadow-lg w-full max-w-sm"
          >
            <div className="flex justify-between items-center mb-4 ">
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <Image
                src={feature.image}
                alt={`${feature.title} icon`}
                height="16"
                width="16"
                className="flex-shrink-0"
              />
            </div>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;