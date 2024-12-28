"use client";

import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Link from 'next/link';  // Import Next.js Link for navigation
import { FlipWords } from '@/components/ui/flip-words';
import { FaArrowRight } from 'react-icons/fa';  // Import React Icons

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading
  }, []);

  const words = ["and Master.", "your AI.", "and Learn.", "the bot.", "cuz it's future."];

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 md:px-24">
            <div className="text-center max-w-4xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Build <FlipWords words={words} className="text-white" />
                <br />
                <span className="text-xl sm:text-2xl md:text-3xl">Level up your AI skills and own the future.</span>
              </h1>
              <Link
                href="/docs"
                className="mt-6 inline-block py-2 px-4 bg-blue-500 text-md font-semibold rounded-full border-2 border-blue-500 hover:bg-blue-700 hover:border-blue-700 transition duration-300"
              >
                <span className="flex items-center gap-2">
                  Read More <FaArrowRight className="text-lg transition-transform duration-300 transform hover:translate-x-2" />
                </span>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
