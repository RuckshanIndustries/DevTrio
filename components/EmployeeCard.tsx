"use client";
import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

type Employee = {
  name: string;
  description: string;
  imgSrc: string;
  url: string;
};

export function EmployeeCard(employee: Readonly<Employee>) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Or a loading spinner / skeleton
  }

  return (
    <div className="h-[28rem] w-full flex items-center justify-center ">
      <PinContainer title="LinkedIn" href={employee.url}>
        <div className="flex basis-full flex-col  tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[28rem] ">
          <div className="flex flex-1 w-full rounded-lg relative ">
            <Image
              src={employee.imgSrc}
              alt={""}
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="m-5">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black text-center">
              {employee.name}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal text-center">
              <span className="text-slate-500 ">{employee.description} </span>
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
