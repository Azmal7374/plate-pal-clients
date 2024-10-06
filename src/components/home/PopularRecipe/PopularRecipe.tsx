/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
"use client"
import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";

const recipes = [
  { title: "Chocolate Cake", image: "https://img.freepik.com/premium-photo/table-with-several-bowls-vegetables-including-tomatoes-peppers-peppers_1243200-32696.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid" },
  { title: "Vegan Tacos", image: "https://img.freepik.com/premium-photo/table-with-various-bowls-food-including-vegetables-herbs-spices_1243200-32673.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid" },
  { title: "Pasta Alfredo", image: "https://img.freepik.com/premium-photo/herb-spicy-ingredients-making-thai-food-recipe-book-with-fresh-herbs-south-asia-spices-wooden-background_1308163-9339.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid" },
  // Add more recipe data
];

export default function PopularRecipes() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Popular Recipes</h2>

        {/* Tailwind Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {recipes.map((recipe, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              <Card isHoverable>
                {/* Recipe Image */}
                <Image
                  src={recipe.image}
                  layout="fill"
                  objectFit="cover"
                  alt={recipe.title}
                  className="rounded-lg"
                />

                {/* Recipe Title */}
                <CardFooter className="">
                  <h1 className="text-lg font-semibold text-center w-full text-black">
                    {recipe.title}
                  </h1>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
