/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
"use client";
import Image from "next/image";

const ingredients = [
  { name: "Tomatoes", image: "https://img.freepik.com/premium-photo/freshly-harvested-tomatoes-wicker-basket-with-basil-leaves-beautiful-display-organic_1293074-213241.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid" },
  { name: "Basil", image: "https://img.freepik.com/free-photo/red-peppers-with-fresh-green-seasoning_329181-1342.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid" },
  { name: "Garlic", image: "https://img.freepik.com/free-photo/garlic-cherry-tomatoes-with-salt-shaker_23-2148357128.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid" },
  { name: "Olive Oil", image: "https://img.freepik.com/free-photo/close-up-olive-oil-condiments_23-2147753738.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid" },
  { name: "Cheese", image: "https://img.freepik.com/free-photo/cheese-slices-served-wood-boards_140725-1511.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid" },
  { name: "Chicken", image: "https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid" },
];

export default function PopularIngredients() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Popular Ingredients</h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover the most popular ingredients used in our recipes!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={ingredient.image}
                alt={ingredient.name}
                layout="responsive"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white text-lg text-center">
                {ingredient.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
