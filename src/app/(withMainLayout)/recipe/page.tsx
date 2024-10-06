/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";

import Loading from "@/src/components/shared/Loading/Loading";
import RecipeCard from "@/src/components/shared/RecipeCard";
import { useGetAllRecipe } from "@/src/hooks/recipe.hook";
import { useGetUserInfo } from "@/src/hooks/user.hook";
import { useUser } from "@/src/utlis/useruser";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Button} from "@nextui-org/react";
import Image from "next/image";
import { motion } from 'framer-motion'
import { useState, useEffect } from "react";


const RecipePage = () => {
  const { user } = useUser();

  const { data: allRecipe, isLoading } = useGetAllRecipe();

  const { data: userInfo, isLoading: isUserInfoLoading } = useGetUserInfo(
    user?._id as string
  );

  const [sortedRecipes, setSortedRecipes] = useState<any[]>([]);
  const [sortCriterion, setSortCriterion] = useState<string>("upvote");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = () => {
    if (!searchQuery) {
      setSortedRecipes(allRecipe?.data || []);
    } else {
      const filteredRecipes = allRecipe?.data.filter(
        (recipe: any) =>
          recipe?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          recipe?.content?.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSortedRecipes(filteredRecipes);
    }
  };

  useEffect(() => {
    if (allRecipe?.data?.length > 0) {
      const sorted = [...allRecipe?.data].sort((a: any, b: any) => {
        if (sortCriterion === "upvote") {
          return (b?.upvote?.length || 0) - (a?.upvote?.length || 0);
        } else if (sortCriterion === "rating") {
          const avgRatingA =
            a?.rating?.reduce((acc: number, cur: any) => acc + cur?.rating, 0) /
            (a?.rating?.length || 1);
          const avgRatingB =
            b?.rating?.reduce((acc: number, cur: any) => acc + cur?.rating, 0) /
            (b?.rating?.length || 1);

          return avgRatingB - avgRatingA;
        }

        return 0;
      });

      setSortedRecipes(sorted);
    }
  }, [sortCriterion, allRecipe]);

  if (isLoading || isUserInfoLoading) {
    return <Loading />;
  }

  return (
    <div>
   

   <div className="relative flex flex-col md:flex-row items-center justify-between bg-black text-white py-12 px-6 md:px-12 opacity-[4]">
  {/* Left Section - Text Content */}
  <div className="md:w-1/2 space-y-6">
    {/* Heading */}
    <h1 className="text-5xl font-bold">Food Your Way</h1>

    {/* Paragraph */}
    <p className="text-lg text-gray-400">
      Meet the all-in-one food app for recipe saving, meal planning, grocery shopping, and recipe sharing.
    </p>

    {/* Sign Up Button */}
    <Button color="warning" size="lg" className="mt-4">
      Sign up
    </Button>

    {/* Custom Rating */}
    <div className="flex items-center space-x-2 mt-4">
      <div className="flex text-yellow-400">
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill={i < 4 ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        ))}
      </div>
      <p className="text-gray-300">4.8 rating</p>
    </div>
  </div>

  {/* Right Section - Image */}
  <div className="md:w-1/2 mt-8 md:mt-0 relative h-72 md:h-auto w-full md:w-auto">
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg animate-fade-in-up">
      <img
        src="https://img.freepik.com/premium-photo/massaman-curry-hearty-vegetable-stew-dark-ceramic-bowl-garnished-with-fresh-parsley_801714-17763.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid"
        alt="Mom and child cooking"
        className="rounded-lg w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
      />
    </div>
  </div>
</div>


<div className="p-4 md:p-0 bg-slate-200 mt-10">
  <div className="py-20">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-screen-xl mx-auto mb-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:p-4"
    >
      {/* Select for sorting */}
      <Select
        label="Sort By"
        onChange={(event) => setSortCriterion(event.target.value)}
        className="transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <SelectItem key={"upvote"}>Upvote</SelectItem>
        <SelectItem key={"rating"}>Rating</SelectItem>
      </Select>

      {/* Search input */}
      <Input
        label="Search Recipe"
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          handleSearch();
        }}
        className="transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="w-[90%] mx-auto mt-10"
    >
      {sortedRecipes?.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              scale: 0.8,
            },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {sortedRecipes?.map((recipe: any, index: number) => (
           
              <RecipeCard
                key={index}
                button={"show details"}
                isPremiumUser={userInfo?.premiumMembership}
                recipe={recipe}
              />
           
          ))}
        </motion.div>
      ) : (
        <div className="text-center text-3xl text-red-500">
          No Recipe Found
        </div>
      )}
    </motion.div>
  </div>
</div>

    </div>
  );
};

export default RecipePage;