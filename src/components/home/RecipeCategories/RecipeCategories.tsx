/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
"use client";
import Image from "next/image";

// Static category data
const categories = [
  {
    title: "Desserts",
    image: "https://img.freepik.com/free-photo/view-plate-filled-with-delicious-sweet-cupcake-desserts_23-2150679686.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
  },
  {
    title: "Vegan",
    image: "https://img.freepik.com/premium-photo/wooden-table-with-vegetables-word-world-it_1262027-27109.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
  },
  {
    title: "Pasta",
    image: "https://img.freepik.com/premium-photo/plate-pasta-with-tomato-sauce-basil-wooden-table_1025556-104497.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
  },
  {
    title: "Grilled",
    image: "https://img.freepik.com/free-photo/grill-with-variety-meats-it_188544-8372.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
  },
  {
    title: "Salads",
    image: "https://img.freepik.com/premium-photo/fresh-salads-with-glutenfree-dressings-ar-generative-ai_1169665-123402.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
  },
  {
    title: "Soups",
    image: "https://img.freepik.com/free-photo/flat-lay-delicious-autumn-food_23-2148666917.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
  },
];

export default function RecipeCategories() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Recipe Categories</h2>

        {/* Tailwind Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="relative w-full h-48">
                <Image
                  src={category.image}
                  layout="fill"
                  objectFit="cover"
                  alt={category.title}
                  className="rounded-lg transition duration-500 ease-in-out hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 hover:opacity-70">
                <h1 className="text-lg font-semibold text-white text-center">
                  {category.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
