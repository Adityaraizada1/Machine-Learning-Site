"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiClock, FiMail } from "react-icons/fi";

const ComingSoon: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative px-6 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        className="relative z-10 max-w-2xl mx-auto text-center space-y-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Icon */}
        <motion.div 
          variants={itemVariants}
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 
            flex items-center justify-center backdrop-blur-sm border border-white/10">
            <FiClock className="w-12 h-12 text-blue-400" />
          </div>
        </motion.div>

        {/* Title & Subtitle Container */}
        <div className="space-y-8">
          <motion.h1 
            variants={itemVariants}
            className="text-6xl sm:text-7xl font-bold bg-clip-text text-transparent 
              bg-gradient-to-r from-white via-white to-white/70 leading-tight"
          >
            Coming Soon
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-400 leading-relaxed max-w-xl mx-auto"
          >
            We're working hard to bring something amazing to life. Stay tuned for updates 
            and exciting new features!
          </motion.p>
        </div>

        {/* Notification Section */}
        <motion.div 
          variants={itemVariants}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 space-y-6"
        >
          <h2 className="text-2xl font-semibold text-white/90">Get Notified</h2>
          <p className="text-lg text-gray-400">
            Want to be the first to know when we launch? Drop us an email!
          </p>
          <Link
            href="mailto:adityaraizada59@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500/10 text-blue-400 
              rounded-xl hover:bg-blue-500/20 transition-all duration-300 group text-lg"
          >
            <FiMail className="w-5 h-5" />
            Contact Us
          </Link>
        </motion.div>

        {/* Return Button */}
        <motion.div variants={itemVariants} className="pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-6 py-3 text-white/90 hover:text-white 
              transition-colors group text-lg"
          >
            <FiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Return to Home
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
};

export default ComingSoon;
