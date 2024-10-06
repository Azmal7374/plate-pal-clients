/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
"use client";

// eslint-disable-next-line import/order
import { Card, CardBody } from "@nextui-org/react";
import BannerButton from "./BannerButton";
import MotionCar from "./MotionCar";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <Card className="py-4 flex" shadow="none">
      <CardBody className="overflow-visible py-2 ">
        <div className="md:flex gap-4 items-center justify-between">
          <motion.div
            className="md:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:5xl lg:text-6xl font-bold mb-2 text-default-900">
              Discover and Share the World's
              <span className="text-[#CDC2A5]"> Best </span> Recipes
            </h1>
            <h4 className="text-xl text-gray-500 my-4">
              Find your perfect recipe for every occasion with our diverse
              collection of delicious and easy-to-follow dishes.
            </h4>
           
              <BannerButton />
            </motion.div>

       
            <MotionCar />
        </div>
      </CardBody>
    </Card>
  );
}
