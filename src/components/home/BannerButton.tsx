/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */

"use client";
import { Button } from "@nextui-org/react";

const BannerButton = () => {
  return (
    <div className="flex justify-center items-center md:block">

      <Button className="bg-[#F78014] text-white rounded-full text-2xl font-bold md:mt-3 lg:mt-0 ">
       Sign Up
      </Button>
    </div>
  );
};

export default BannerButton;
