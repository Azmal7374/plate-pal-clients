/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" 
         style={{ backgroundImage: `url('http://localhost:3000/_next/image?url=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Ftable-with-various-bowls-food-including-vegetables-herbs-spices_1243200-32673.jpg%3Fga%3DGA1.1.1302518135.1720608685%26semt%3Dais_hybrid&w=1200&q=75')` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="relative z-10 text-white text-center flex flex-col justify-center items-center h-full"
      >
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Discover, Share & Cook!
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          A world of delicious recipes at your fingertips. Find your next meal inspiration.
        </motion.p>

        {/* Button */}
        <Link  href="/register" className="bg-[#F78014] text-white rounded-full text-xl font-bold md:mt-3 lg:mt-0 p-2 md:p-4 w-40" >
            Sign Up
          </Link>
      </motion.div>
    </div>
  );
};

export default HeroSection;
