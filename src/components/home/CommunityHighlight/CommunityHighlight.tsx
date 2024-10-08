/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
"use client";
import Image from "next/image";

const communityHighlights = [
  {
    title: "User's Spicy Vegan Chili",
    image: "https://img.freepik.com/free-photo/delicious-brazilian-food-composition_23-2148739225.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
    user: "JaneDoe123",
  },
  {
    title: "John's Homemade Pizza",
    image: "https://img.freepik.com/free-photo/high-angle-view-fresh-tasty-pizza-surrounded-with-vegetables-spices-herbs-kitchen-counter_23-2148076075.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
    user: "JohnTheChef",
  },
  {
    title: "Sophia's Classic Lasagna",
    image: "https://img.freepik.com/premium-photo/plate-food-with-glass-wine-it_1304175-39582.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
    user: "SophiaCooks",
  },
];

export default function CommunityHighlight() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Community Highlights</h2>
        <p className="mt-4 text-lg text-gray-600">
          Check out these amazing recipes shared by our talented community members!
        </p>

        {/* Tailwind Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {communityHighlights.map((highlight, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-200">
              <Image
                src={highlight.image}
                alt={highlight.title}
                layout="responsive"
                width={400}
                height={250}
                className="rounded-lg"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900">{highlight.title}</h3>
                <p className="text-gray-600">Shared by: {highlight.user}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
