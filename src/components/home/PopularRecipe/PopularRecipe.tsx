/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
"use client"
import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";

// Static recipe data
const recipes = [
  {
    title: "Chocolate Cake",
    image: "https://img.freepik.com/free-photo/front-view-chocolate-cake-stand_23-2148834043.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
  },
  {
    title: "Vegan Tacos",
    image: "https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food-top-view_2829-14371.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
  },
  {
    title: "Pasta Alfredo",
    image: "https://img.freepik.com/premium-photo/bowl-pasta-with-parsley-parsley-top_1246444-3117.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
  },
  {
    title: "Caesar Salad",
    image: "https://img.freepik.com/premium-photo/caesar-salad-quiet-corner-yummy-delicious-caesar-salad-gourmet-salad-photography_1020697-672190.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
  },
  {
    title: "Spaghetti Carbonara",
    image: "https://img.freepik.com/premium-vector/delicious-plate-spaghetti-carbonara-topped-vector-art_790714-100.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
  },
  {
    title: "Beef Tacos",
    image: "https://img.freepik.com/free-photo/mexican-tacos-with-beef-tomato-sauce-salsa_2829-14194.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
  },
];

export default function PopularRecipes() {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Popular Recipes</h2>

        {/* Tailwind Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <Card isHoverable className="transition duration-300 hover:shadow-xl">
                {/* Recipe Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={recipe.image}
                    layout="fill"
                    objectFit="cover"
                    alt={recipe.title}
                    className="rounded-lg transition duration-500 ease-in-out hover:scale-110"
                  />
                </div>

                {/* Recipe Title */}
                <CardFooter className="bg-white">
                  <h1 className="text-lg font-semibold text-center w-full text-black">
                    {recipe.title}
                  </h1>
                  {/* Add an interactive button */}
                  <button className="mt-2 w-full bg-[#F78014] text-white py-2 rounded hover:bg-[#b16823] transition duration-300">
                    View Recipe
                  </button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
