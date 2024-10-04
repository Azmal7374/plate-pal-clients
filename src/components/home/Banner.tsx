"use client"
// eslint-disable-next-line import/order
import { Card, CardBody } from "@nextui-org/react";
import BannerButton from "./BannerButton";
import MotionCar from "./MotionCar";
export default function Banner() {
  return (
    <Card className="py-4 flex" shadow="none">
      <CardBody className="overflow-visible py-2 ">
        <div className="md:flex gap-4 items-center  justify-between">
          <div className="md:w-2/5 ">
            <h1 className="text-6xl font-bold mb-2 text-default-900">
            Discover and Share the World's<span className="text-red-500"> Best </span>{" "}
            Recipes
            </h1>
            <h4 className=" text-xl text-gray-500 my-4">
            Find your perfect recipe for every occasion with our diverse collection of delicious and easy-to-follow dishes.
            </h4>
            <BannerButton />
          </div>
          <MotionCar />
        </div>
      </CardBody>
    </Card>
  );
}
