import Link from "next/link";
import React from "react";
const Hero = () => {
  return (
    <div>
      <div>
        <section className="pt-8 lg:pt-32 ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
            <div className="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-8">
              <span className="font-inter text-xs font-medium text-gray-900 ml-3">
                Explore the facilities we offer.
              </span>
              <Link
                className="w-8 h-8 rounded-full flex justify-center items-center bg-button"
                href={"/recipe"}
              >
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 17 16"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  />
                </svg>
              </Link>
            </div>

            <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
              Reserve Your Ideal Sports Facility
              <span className="text-secondary"> Anytime, Anywhere</span>
            </h1>
            <p className="max-w-xl mx-auto text-center text-base font-normal leading-7 text-gray-600 mb-9">
              Unlock access to the best sports facilities around you. Whether
              it’s football, hockey, or any other sport, secure your spot with
              just a few clicks.
            </p>
            <Link
              className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-button shadow-xs hover:bg-button-dark transition-all duration-500"
              href={"/recipe"}
            >
              Book Now
              <svg
                className="ml-2"
                fill="none"
                height="20"
                viewBox="0 0 20 20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;