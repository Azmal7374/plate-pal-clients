
"use client";
import { Button } from "@nextui-org/react";

const BannerButton = () => {
  return (
    <div className="space-x-4">
      <Button onClick={() => console.log("Hello")} color="primary" radius="sm">
     Create Recipe
      </Button>
      <Button color="primary" variant="bordered" radius="sm">
        Learn More
      </Button>
    </div>
  );
};

export default BannerButton;
