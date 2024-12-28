"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Docs = () => {
  return (
    <>
      {/* Sticky Navbar */}
      <Navbar />
      <div className="bg-black text-white min-h-screen px-4 md:px-10 pt-32">
        {/* Header Section */}
        <div className="max-w-4xl text-center mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Documentation</h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Explore detailed guides, tutorials, and resources to level up your knowledge in machine learning.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="text-gray-400 mb-4">
              Learn the basics of machine learning and set up your first model in minutes.
            </p>
            <Link
              href="/introduction"
              className="flex items-center justify-center text-blue-400 font-semibold hover:text-blue-500 transition duration-300"
            >
              Read More <FaArrowRight className="ml-2 transition-transform transform hover:translate-x-1" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Advanced Guides</h2>
            <p className="text-gray-400 mb-4">
              Dive into advanced topics like neural networks, NLP, and AI ethics.
            </p>
            <Link
              href="/docs/advanced-guides"
              className="flex items-center justify-center text-blue-400 font-semibold hover:text-blue-500 transition duration-300"
            >
              Read More <FaArrowRight className="ml-2 transition-transform transform hover:translate-x-1" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">API References</h2>
            <p className="text-gray-400 mb-4">
              Explore our comprehensive API documentation to integrate AI features effortlessly.
            </p>
            <Link
              href="/docs/api-references"
              className="flex items-center justify-center text-blue-400 font-semibold hover:text-blue-500 transition duration-300"
            >
              Read More <FaArrowRight className="ml-2 transition-transform transform hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Docs;
