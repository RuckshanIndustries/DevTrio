"use client";
import React, { ReactElement, ReactNode, useEffect } from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import Image from "next/image";

export default function Hero() {
  const green = "143, 211, 166";
  const blue = "111, 188, 237";
  const indigo = "133, 160, 242";
  useEffect(() => {
    const handleInteraction = () => {
      const video = document.getElementById("hero-video") as HTMLVideoElement;
      if (video) {
        video.play();
        window.removeEventListener("click", handleInteraction);
      }
    };

    window.addEventListener("click", handleInteraction);

    return () => window.removeEventListener("click", handleInteraction);
  }, []);
  return (
    <div className=" ">
      <BackgroundGradientAnimation
        gradientBackgroundStart={"rgb(248, 253, 251)"}
        gradientBackgroundEnd={"rgb(248, 253, 251)"}
        firstColor={green}
        secondColor={green}
        thirdColor={blue} 
        fourthColor={green}
        fifthColor={indigo}
        pointerColor={indigo}
        className="relative flex items-center justify-center h-full"
      >
        <div className="z-50 inset-0 flex text-black px-4  text-3xl text-center flex-col gap-6 ">
          <div className="flex flex-row">
            <Image
              src={"/svgs/DevTrioLogo.svg"}
              alt={"DevTrio UK Logo"}
              width={100}
              height={50}
            />
          </div>
          <div className="mt-10 mb-24 ">
            <p className=" drop-shadow-2xl text-black md:text-4xl lg:text-7xl font-bold pointer-events-none">
              Transforming Digital Visions Into Reality
            </p>
            <p className=" text-lg text-center pt-4 pointer-events-none">
              Helping business owners and start-ups gain an unfair advantage
              through industry-leading, results-driven marketing websites
            </p>
            {/* Video Background */}

            <div className="items-center flex flex-col mt-20">
              <video
                id="hero-video"
                controls
                preload="none"
                className="w-3/4 max-w-full h-auto rounded-xl"
                autoPlay
                muted={false}
         
              >
                <source src="/videos/intro.mp4" type="video/mp4" />
                <track
                  src="/path/to/captions.vtt"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
