"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Link from "next/link"; // Import Next.js Link for navigation
import { FlipWords } from "@/components/ui/flip-words";
import { FaArrowRight } from "react-icons/fa"; // Import React Icons
import { ShootingStars } from "@/components/ui/shooting-stars"; // Import ShootingStars component
import { StarsBackground } from "@/components/ui/stars-background";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

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

            <div className="relative z-10 text-center w-full max-w-3xl px-4 sm:px-6 md:px-8">
              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-6 leading-tight animate__animated animate__fadeIn animate__delay-1s">
                Build<FlipWords words={words} className="text-white" />
                <br />
                <span className="block mt-2 text-lg sm:text-xl md:text-2xl animate__animated animate__fadeIn animate__delay-2s">
                  Level up your AI skills and own the future.
                </span>
              </h1>

              {/* Call to Action Button */}
              <Link
                href="/docs"
                className=""
              >
                <span className="flex items-center gap-2 justify-center">
                  <InteractiveHoverButton />
                </span>
              </Link>
            </div>

            {/* Footer (Terms and Conditions) */}
            <footer className="absolute bottom-0 w-full py-4 text-center text-sm sm:text-base">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms and Conditions
              </Link>
            </footer>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
