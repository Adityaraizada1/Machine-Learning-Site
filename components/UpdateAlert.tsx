"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineExclamationCircle } from "react-icons/ai";
import Link from "next/link";

const UpdateAlert = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-3 rounded-lg shadow-lg z-50 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 animate-fade-in"
      style={{ maxWidth: "95%", width: "fit-content" }}
    >
      <AiOutlineExclamationCircle
        size={20}
        className="text-black md:size-24"
      />
      <p className="text-xs md:text-sm font-medium text-center md:text-left leading-tight">
        ⚠️ The website is working but currently undergoing updates. Some features might not be available.
      </p>
      <div className="flex items-center space-x-2">
        <Link
          href="/"
          className="bg-black text-white px-3 py-1 text-xs md:text-sm rounded-md hover:bg-gray-800 focus:outline-none"
        >
          Back to Home
        </Link>
        <button
          onClick={() => setIsVisible(false)}
          className="text-black hover:text-gray-800 focus:outline-none"
        >
          <AiOutlineClose size={18} className="md:size-22" />
        </button>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translate(-50%, -10%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        @media (max-width: 768px) {
          .fixed {
            max-width: 90%;
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default UpdateAlert;
