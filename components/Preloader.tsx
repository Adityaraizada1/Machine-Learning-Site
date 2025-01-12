"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (progress < 100) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            setIsCompleted(true);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 25);
      return () => clearInterval(timer);
    }
  }, [progress]);

  return (
    <div className="fixed inset-0 flex justify-center items-center flex-col bg-black">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/preloader-png.png" // Make sure to add your logo.png to the public folder
          alt="Logo"
          width={190}
          height={190}
          className="animate-pulse"
        />
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 relative">
        {!isCompleted ? (
          <>
            {/* Progress Bar */}
            <div className="w-full h-[2px] bg-neutral-800 rounded-full">
              <div
                className="h-full bg-white rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            {/* Progress Percentage */}
            <div className="text-white text-sm mt-2 text-center font-light">
              {progress}%
            </div>
          </>
        ) : (
          <div className="text-2xl font-light text-white mt-4 animate__animated animate__fadeIn animate__delay-1s">
            Welcome
          </div>
        )}
      </div>
    </div>
  );
};

export default Preloader;
