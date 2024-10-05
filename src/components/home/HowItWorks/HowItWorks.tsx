"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      title: "Create Your Profile",
      description:
        "Sign up and set up your personal cooking profile. Add your bio, favorite cuisines, and connect with other food enthusiasts.",
    },
    {
      title: "Explore and Share Recipes",
      description:
        "Browse through a vast collection of recipes from all around the world. Share your own unique creations by uploading recipes with photos, ingredients, and step-by-step instructions.",
    },
    {
      title: "Follow and Connect",
      description:
        "Follow your favorite chefs and home cooks to stay updated on their latest recipes. Build your network by connecting with others and gain inspiration from their cooking styles.",
    },
    {
      title: "Rate, Comment, and Upvote",
      description:
        "Rate dishes you've tried, leave comments, and upvote your favorite recipes. Engage with the community by providing feedback and recommendations.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <div className="mt-24 pb-20">
        <div className="mb-4 flex items-center justify-center gap-8 sm:mb-8 md:mb-5">
          <div className="flex items-center justify-center gap-12">
            <h2 className="!text-5xl font-bold text-gray-900 lg:text-4xl">
              How It <span className="text-secondary">Works</span>
            </h2>
          </div>
        </div>

        <div ref={ref} className="p-4 max-w-xl mx-auto mt-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              className="flex mb-6"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.6 }}
            >
              <div className="mr-4 flex flex-col items-center">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-800">
                    <svg
                      className="h-6 w-6 text-blue-800"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 5l0 14" />
                      <path d="M18 13l-6 6" />
                      <path d="M6 13l6 6" />
                    </svg>
                  </div>
                </div>
                <div className="h-full w-px bg-gray-400 " />
              </div>

              <div className="pt-1 pb-8">
                <p className="mb-2 text-2xl font-bold text-gray-900">
                  {step.title}
                </p>
                <p className="text-gray-700 text-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
          <div className="flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900 bg-blue-900">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-1 ">
              <p className="mb-2 text-xl font-bold text-gray-900">
                And you are ready to be a part of the community!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;