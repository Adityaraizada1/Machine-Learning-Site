import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import Link from 'next/link'; // Import Next.js Link for navigation

const UnderConstruction: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center space-y-6 px-4">
        {/* Illustration */}
        <div className="max-w-md mx-auto">
          <Image
            src="/banner.jpg" // Path to your image in the public folder
            alt="Under Construction Illustration"
            width={500}
            height={300}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold">
          We're Building Something Amazing!
        </h1>

        {/* Subtext */}
        <p className="text-lg">
          This page is currently under construction. Stay tuned for updates! 🚧
        </p>

        {/* Button to return to Home */}
        <div>
          <Link href="/">
            <button className="px-6 py-3 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 transition">
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
