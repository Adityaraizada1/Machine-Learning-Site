"use client";

import React from "react";
import Link from "next/link";

const ComingSoon: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center space-y-6 px-4">
        {/* Heading */}
        <h1 className="text-4xl font-bold">Something Amazing is Coming Soon!</h1>

        {/* Subheading */}
        <p className="text-lg text-gray-300">
          We're working hard to bring you an incredible experience. Stay tuned!
        </p>

        {/* Link to Home */}
        <div className="pt-6">
          <Link
            href="/docs"
            className="text-xs sm:text-sm font-medium text-gray-300 border border-gray-500 rounded-full py-1 px-3 hover:bg-gray-700 hover:border-gray-400 hover:text-white transition duration-300"
          >
            Return to Docs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

