import React from "react";
import { Card, CardContent } from "./ui/card";
import { GoNorthStar } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import ScrollToTopButton from "./ScrollToTopButton";

export default function SayHi() {
  return (
    <div className="flex flex-col items-center w-full min-h-[400px] bg-gradient-to-r from-[#e4f9ee] to-[#e5f2f4">
      <h5 className="text-5xl mt-36 mb-10 font-semibold flex flex-row gap-2 items-center">
        {<GoNorthStar size={35} color={"#3d3d3d"} />}
        Say hi
        {<GoNorthStar size={35} color={"#3d3d3d"} />}
      </h5>
      <Card className="border-none  text-black rounded-lg shadow-lg p-6">
        <CardContent>
          <div className="flex flex-col xl:flex-row items-center justify-between space-y-6 py-7 lg:gap-16 xl:gap-96">
            <div className="flex flex-col justify-center text-center lg:text-left lg:w-1/2">
              <h6 className="text-4xl font-semibold mb-2 text-center xl:whitespace-nowrap">
                Need an unfair advantage?
              </h6>
              <p className="text-xl xl:whitespace-nowrap text-center">
                Let&apos;s give a look at your projects! Feel free to reach out.
              </p>
            </div>
            <div className="flex flex-col justify-center text-center lg:text-right lg:w-1/2">
              <h6 className="text-4xl font-medium mb-2">info@devtrio.co.uk</h6>
              <hr className="border-t-2 border-gray-300 my-2 mx-auto lg:mx-0 w-2/3 lg:w-full" />
              <p className="text-lg text-center">or leave us a word</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-2 items-center justify-center w-full px-7">
        <Image
          src={"/svgs/DevTrioLogo.svg"}
          alt={"DevTrio UK Logo"}
          width={150}
          height={50}
        />
        <Link href={""}> Terms & Conditions </Link>
        <ScrollToTopButton/>
      </div>
    </div>
  );
}
