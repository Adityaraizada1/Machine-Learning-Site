"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineExclamationCircle } from "react-icons/ai";

const UpdateAlert = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2 md:space-x-4 animate-fade-in"
      style={{ maxWidth: "95%", width: "fit-content" }}
    >
      <AiOutlineExclamationCircle
        size={20}
        className="text-black md:size-24"
      />
      <p className="text-xs md:text-sm font-medium leading-tight">
        ⚠️ The website is working but currently undergoing updates. Some features might not be available.
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="text-black hover:text-gray-800 focus:outline-none"
      >
        <AiOutlineClose size={18} className="md:size-22" />
      </button>
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
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default UpdateAlert;
