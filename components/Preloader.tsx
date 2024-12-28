"use client";

// app/components/Preloader.tsx
import { useState, useEffect } from 'react';

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
      }, 30); // Adjust the interval for speed (lower value = faster)
      return () => clearInterval(timer); // Cleanup the interval on component unmount
    }
  }, [progress]);

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      {!isCompleted ? (
        <div className="w-72 h-2 bg-gray-300 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      ) : (
        <div className="text-4xl font-bold text-blue-500">
          Progress Completed!
        </div>
      )}
    </div>
  );
};

export default Preloader;
