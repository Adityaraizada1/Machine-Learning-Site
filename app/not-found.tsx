"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiHome, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-12">
        {/* 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.h1 
            className="text-[150px] sm:text-[200px] font-bold leading-none select-none
              bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50"
          >
            404
          </motion.h1>
          
          {/* Glitch Layers */}
          <motion.div 
            className="absolute inset-0 text-[150px] sm:text-[200px] font-bold text-red-500/20 select-none"
            animate={{ 
              x: [-2, 2, -2],
              y: [2, -2, 2],
            }}
            transition={{ 
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            404
          </motion.div>
          <motion.div 
            className="absolute inset-0 text-[150px] sm:text-[200px] font-bold text-blue-500/20 select-none"
            animate={{ 
              x: [2, -2, 2],
              y: [-2, 2, -2],
            }}
            transition={{ 
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            404
          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
            Page Not Found
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-lg mx-auto">
            Oops! Looks like you've ventured into the unknown. The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="/"
            className="group flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl 
              hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            <FiHome className="w-5 h-5" />
            <span>Return Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 px-6 py-3 border border-white/10 rounded-xl 
              hover:bg-white/5 transition-all duration-300"
          >
            <FiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Go Back</span>
          </button>
        </motion.div>
      </div>

      {/* Decorative Border */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
}
