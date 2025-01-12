"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Docs = () => {
  return (
    <>
      <Navbar />
      <div className="relative bg-black text-white min-h-screen">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-24 pb-16 mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="max-w-4xl text-center mx-auto mb-16 space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Documentation
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Explore detailed guides, tutorials, and resources to level up your knowledge in machine learning.
            </p>
            <p className="text-sm sm:text-base text-gray-400">
              Whether you're a beginner or an expert, we've got something for everyone.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 - Getting Started */}
            <Link href="/introduction" className="group">
              <div className="h-full bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-8 
                            transition duration-300 hover:border-white/10 hover:bg-gray-800/50 hover:shadow-xl hover:shadow-white/5">
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-blue-400 transition duration-300">
                    Getting Started
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition duration-300">
                    Learn the basics of machine learning and set up your first model in minutes.
                  </p>
                  <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300">
                    Read More 
                    <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 2 - Video Guides */}
            <Link href="/video" className="group">
              <div className="h-full bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-8 
                            transition duration-300 hover:border-white/10 hover:bg-gray-800/50 hover:shadow-xl hover:shadow-white/5">
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-blue-400 transition duration-300">
                    Video Guides
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition duration-300">
                    Explore Videos to learn more about machine learning and AI.
                  </p>
                  <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300">
                    Watch Now 
                    <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 3 - API References */}
            <Link href="/api-references" className="group">
              <div className="h-full bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-8 
                            transition duration-300 hover:border-white/10 hover:bg-gray-800/50 hover:shadow-xl hover:shadow-white/5">
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-blue-400 transition duration-300">
                    API References
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition duration-300">
                    Explore our comprehensive API documentation to integrate AI features effortlessly.
                  </p>
                  <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300">
                    Explore APIs 
                    <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 4 - Community Support */}
            <Link href="/community" className="group">
              <div className="h-full bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-8 
                            transition duration-300 hover:border-white/10 hover:bg-gray-800/50 hover:shadow-xl hover:shadow-white/5">
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-blue-400 transition duration-300">
                    Community Support
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition duration-300">
                    Join the community to collaborate, discuss, and learn with other AI enthusiasts.
                  </p>
                  <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300">
                    Join Now 
                    <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 5 - FAQ */}
            <Link href="/faq" className="group">
              <div className="h-full bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-8 
                            transition duration-300 hover:border-white/10 hover:bg-gray-800/50 hover:shadow-xl hover:shadow-white/5">
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-blue-400 transition duration-300">
                    FAQ
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition duration-300">
                    Have questions? Find quick answers in our frequently asked questions section.
                  </p>
                  <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300">
                    Learn More 
                    <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Docs;
