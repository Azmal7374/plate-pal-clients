/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
"use client";
import { useState } from "react";

export default function NewsletterSignUp() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add your email subscription logic here (e.g., API call)
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Stay Updated!</h2>
        <p className="mt-4 text-lg text-gray-600">
          Subscribe to our newsletter for the latest recipes and updates.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="p-2 bg-[#F78014] text-white rounded-r-lg hover:bg-[#b57234] transition duration-200"
            >
              Subscribe
            </button>
          </div>
        </form>

        {submitted && (
          <p className="mt-4 text-green-500">
            Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  );
}
