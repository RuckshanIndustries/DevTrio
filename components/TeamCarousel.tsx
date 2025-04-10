import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { EmployeeCard } from "./EmployeeCard";
import { employeeList } from "@/data/employees";

export function TeamCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className=" w-screen  max-w-screen-2xl"
    >
      <CarouselContent >
        {employeeList.map((employee) => (
          <CarouselItem key={employee.id} className="md:basis-1/2 lg:basis-1/4 ">
            <EmployeeCard
              name={employee.name}
              description={employee.description}
              imgSrc={employee.imgSrc}
              url={employee.url}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
