"use client";
import React from "react";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";

export default function SparklesPreview() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Main Heading */}
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Comming Soon!
      </h1>

      {/* Sparkles Effect */}
      <div className="relative w-full max-w-5xl h-80 my-8">
        {/* Gradient Lines */}
        <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
        <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
        {/* <div className="absolute inset-x-40 top-4 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-3/4 blur-sm" /> */}
        {/* <div className="absolute inset-x-40 top-4 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-3/4" /> */}

        {/* Sparkles Core */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(450px_300px_at_top,transparent_20%,white)]"></div>
      </div>

      {/* Return to Home Button */}
      <Link
        href="/"
        className="relative z-20 mt-6 px-6 py-2 text-sm md:text-base font-medium text-gray-200 bg-gray-800 rounded-full border border-gray-700 hover:bg-gray-700 hover:border-gray-500 transition duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
}
