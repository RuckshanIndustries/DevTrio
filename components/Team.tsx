"use client";
import React from "react";
import Image from "next/image";
import WhyChooseUs from "./WhyChooseUs";
import { TbSteam } from "react-icons/tb";
import { TeamCarousel } from "./TeamCarousel";

export default function Team() {
  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">
      <h5 className="text-center text-5xl font-bold mt-8">The DevTrio team</h5>
      <h5 className="text-center text-xl mb-4 font-normal pb-10 flex flex-row gap-3 items-center pt-5">
      <TbSteam />
      About us
      <TbSteam />
      </h5>

      <div className="flex flex-col lg:flex-row items-center gap-6 justify-center mb-8">
        <div className="relative w-full lg:w-1/3 h-96">
          <Image
            alt="a team working with laptops"
            src={"/images/team.jpg"}
            objectFit="cover"
            layout="fill"
            className="rounded-md"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="mb-4 text-justify">
            Welcome to DevTrio IT Solutions Ltd. We are passionate about turning
            your digital visions into tangible success. Based in the UK, with a
            remote team in Sri Lanka, we specialize in providing innovative web
            development, digital design, and mobile app development services.
            Our mission is to empower businesses with high-quality,
            client-focused solutions that drive growth and enhance digital.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            More about us
          </button>
        </div>
      </div>
      <WhyChooseUs />
      <h4 className="font-semibold text-3xl pb-6 text-center mt-24">
        Meet our team of creators, designers, and problem solvers
      </h4>
      <TeamCarousel />
    </div>
  );
}
