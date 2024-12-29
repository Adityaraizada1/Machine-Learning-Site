"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Link from "next/link"; // Import Next.js Link for navigation
import { FlipWords } from "@/components/ui/flip-words";
import { FaArrowRight } from "react-icons/fa"; // Import React Icons
import { ShootingStars } from "@/components/ui/shooting-stars"; // Import ShootingStars component
import { StarsBackground } from "@/components/ui/stars-background";

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
          <div className="relative bg-black text-white min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16">
            {/* Background Shooting Stars */}
            <ShootingStars />
            <StarsBackground />
            
            <div className="relative z-10 text-center w-full max-w-3xl">
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Build<FlipWords words={words} className="text-white" />
                <br />
                <span className="block mt-2 text-lg sm:text-xl md:text-2xl">
                  Level up your AI skills and own the future.
                </span>
              </h1>

              {/* Call to Action Button */}
              <Link
                href="/docs"
                className="mt-6 inline-block py-2 px-4 bg-blue-500 text-sm font-semibold rounded-full border-2 border-blue-500 hover:bg-blue-700 hover:border-blue-700 transition duration-300"
              >
                <span className="flex items-center gap-2 justify-center">
                  Read More{" "}
                  <FaArrowRight className="text-sm transition-transform duration-300 transform hover:translate-x-2" />
                </span>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
