"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [logos, setLogos] = useState<{ src: string; alt: string }[]>([]);

  const logoList = [
    { src: "/google-logo.png", alt: "Google Logo" },
    { src: "/amazon-logo.png", alt: "Amazon Logo" },
    { src: "/microsoft-logo.png", alt: "Microsoft Logo" },
    { src: "/facebook-logo.png", alt: "Facebook Logo" },
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
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
          <div className="relative bg-black text-white min-h-screen flex flex-col justify-center items-center">
            {/* Background Effects */}
            <ShootingStars />
            <StarsBackground />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

            <div className="relative z-10 text-center w-full max-w-3xl px-4 md:px-6">
              {/* Main Content */}
              <div className="space-y-6">
                {/* Heading Section */}
                <div className="space-y-3">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 animate-fade-in">
                    Build<FlipWords words={words} className="text-white" />
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-xl mx-auto animate-fade-up">
                    Level up your AI skills and own the future.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <Link href="/docs">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 transition-all duration-300 group">
                      <span className="text-sm font-medium">Read More</span>
                      <svg 
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                </div>

                {/* Trusted By Section */}
                <div className="mt-12 pt-6 border-t border-white/10">
                  <p className="text-xs font-medium text-neutral-400 mb-4 tracking-wider">
                    TRUSTED BY ENGINEERS AT
                  </p>
                  <div className="flex flex-wrap justify-center gap-6 items-center">
                    {logos.map((logo, index) => (
                      <div
                        key={index}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-white/5 rounded-lg blur-xl transition-opacity group-hover:opacity-100 opacity-0" />
                        <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-3 transition-transform hover:-translate-y-1">
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={80}
                            height={40}
                            className="object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-0 w-full py-4 text-center text-xs">
              <Link
                href="/terms"
                className="text-neutral-500 hover:text-white transition-colors duration-300"
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
