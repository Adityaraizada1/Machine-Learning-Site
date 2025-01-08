"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Link from "next/link"; // Import Next.js Link for navigation
import Image from "next/image"; // Import Next.js Image component
import { FlipWords } from "@/components/ui/flip-words";
import { ShootingStars } from "@/components/ui/shooting-stars"; // Import ShootingStars component
import { StarsBackground } from "@/components/ui/stars-background";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [logos, setLogos] = useState<{ src: string; alt: string }[]>([]);

  // List of logos
  const logoList = [
    { src: "/google-logo.png", alt: "Google Logo" },
    { src: "/amazon-logo.png", alt: "Amazon Logo" },
    { src: "/microsoft-logo.png", alt: "Microsoft Logo" },
    { src: "/facebook-logo.png", alt: "Facebook Logo" },
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading

    // Randomly select logos
    const shuffledLogos = logoList.sort(() => 0.5 - Math.random()).slice(0, 3);
    setLogos(shuffledLogos);
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
              <Link href="/docs">
                <span className="flex items-center gap-2 justify-center underline">
                  Read More
                </span>
              </Link>

              {/* Trusted By Section */}
              <div className="mt-10 px-6 py-4 bg-white/10 backdrop-blur-md rounded-lg flex flex-col items-center">
                <p className="text-sm text-gray-400 mb-4">Trusted by industry leaders</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-xs sm:max-w-md">
                  {logos.map((logo, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center bg-white/20 rounded-md p-2"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={80} // Adjust size for mobile
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
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
