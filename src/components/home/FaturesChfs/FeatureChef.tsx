/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
"use client";
import Image from "next/image";

const featuredChefs = [
  {
    name: "Gordon Ramsay",
    image: "https://img.freepik.com/premium-photo/male-chef-smiling-professional-cook-restaurant-kitchen_1061358-141812.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
    bio: "World-renowned chef known for his exceptional culinary skills and television appearances.",
    recipes: 12,
  },
  {
    name: "Jamie Oliver",
    image: "https://img.freepik.com/free-photo/portrait-thoughtful-man-with-long-hair-retro-style-dark-photo-studio_613910-17092.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
    bio: "A passionate chef dedicated to promoting healthy eating and cooking for families.",
    recipes: 15,
  },
  {
    name: "Martha Stewart",
    image: "https://img.freepik.com/premium-photo/painting-woman-reading-book-with-pot-flowers-book-titled-calculator_1217673-164045.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
    bio: "Author and television personality known for her expertise in cooking and home living.",
    recipes: 10,
  },
];

export default function FeaturedChefs() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Featured Chefs</h2>
        <p className="mt-4 text-lg text-gray-600">
          Meet our talented chefs who share their culinary masterpieces with you!
        </p>

        {/* Tailwind Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {featuredChefs.map((chef, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-200">
              <Image
                src={chef.image}
                alt={chef.name}
                layout="responsive"
                width={400}
                height={250}
                className="rounded-lg"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900">{chef.name}</h3>
                <p className="text-gray-600 mt-2">{chef.bio}</p>
                <p className="text-gray-500 mt-1">Recipes: {chef.recipes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
