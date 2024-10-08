/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
"use client";
import { Card } from "@nextui-org/react";

const premiumFeatures = [
  { title: "Exclusive Recipes", description: "Access to unique recipes from top chefs." },
  { title: "Ad-Free Experience", description: "Enjoy browsing without any interruptions." },
  { title: "Advanced Meal Planning", description: "Create customized meal plans effortlessly." },
  { title: "Priority Support", description: "Get assistance from our team faster." },
  { title: "Early Access to New Features", description: "Be the first to try out our latest updates." },
  { title: "Downloadable Recipe Books", description: "Save your favorite recipes in a printable format." },
];

export default function PremiumFeatures() {
  return (
    <section className="py-16  ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Premium Features</h2>
        <p className="mt-4 text-lg text-gray-600">
          Unlock exclusive benefits with our premium membership!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {premiumFeatures.map((feature, index) => (
            <Card key={index} isHoverable className="shadow-lg transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
