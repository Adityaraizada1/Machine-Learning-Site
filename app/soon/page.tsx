"use client";

import React from "react";
import Link from "next/link";

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
        Coming Soon
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-400 text-center mb-8 px-4">
        We're working hard to bring something amazing to life. Stay tuned!
      </p>

      {/* Return to Home Button */}
      <Link
        href="/"
        className="mt-10 px-6 py-2 text-sm md:text-base font-medium text-gray-200 bg-gray-800 rounded-full border border-gray-700 hover:bg-gray-700 hover:border-gray-500 transition duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default ComingSoon;
