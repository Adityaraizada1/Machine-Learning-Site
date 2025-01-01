"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineExclamationCircle } from "react-icons/ai";

const UpdateAlert = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-4 animate-fade-in"
      style={{ maxWidth: "90%", width: "fit-content" }}
    >
      <AiOutlineExclamationCircle size={24} className="text-black" />
      <p className="text-sm md:text-base font-medium">
        ⚠️ The website is working but currently undergoing updates. Some features might not be available.
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="text-black hover:text-gray-800 focus:outline-none"
      >
        <AiOutlineClose size={22} />
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
      `}</style>
    </div>
  );
};

export default UpdateAlert;
