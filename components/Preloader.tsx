"use client";

import { useState, useEffect } from "react";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (progress < 100) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            setIsCompleted(true); // When progress reaches 100, show the text
            return 100;
          }
          return prevProgress + 1; // Increment progress
        });
      }, 25); // Adjust the interval for a smoother effect
      return () => clearInterval(timer); // Cleanup the interval on component unmount
    }
  }, [progress]);

  return (
    <div className="flex justify-center items-center h-screen flex-col bg-black/[0.9]">
      {/* Progress Bar */}
      {!isCompleted ? (
        <div className="w-72 h-2 bg-neutral-700 rounded-full">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-300 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      ) : (
        <div className="text-4xl font-semibold text-white mt-4 animate__animated animate__fadeIn animate__delay-1s">
          Progress Completed!
        </div>
      )}
    </div>
  );
};

export default Preloader;
