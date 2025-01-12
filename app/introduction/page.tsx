"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { motion } from "framer-motion";

const IntroductionPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [content, setContent] = useState<{ heading: string; content: string }>({
    heading: "Introduction to Machine Learning",
    content: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
          <p class="text-lg text-white/90">
            Machine learning is a field of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div class="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
            <h3 class="text-xl font-semibold text-white mb-4">Core Concepts</h3>
            <ul class="space-y-3 text-white/80">
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                Supervised Learning
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                Unsupervised Learning
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-pink-500 rounded-full"></span>
                Reinforcement Learning
              </li>
            </ul>
          </div>

          <div class="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
            <h3 class="text-xl font-semibold text-white mb-4">Applications</h3>
            <ul class="space-y-3 text-white/80">
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                Image Recognition
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                Natural Language Processing
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-pink-500 rounded-full"></span>
                Predictive Analytics
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-8 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 class="text-xl font-semibold text-white mb-4">Getting Started</h3>
          <p class="text-white/80">
            Begin your machine learning journey by understanding the fundamentals. We'll guide you through the essential concepts, tools, and practical applications.
          </p>
        </div>
      </div>
    `,
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Main Layout */}
      <div className="flex">
        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
          setContent={setContent} 
        />

        {/* Main Content */}
        <main className="flex-1 px-4 md:px-8 pt-20 md:ml-72">
          <motion.div 
            className="max-w-4xl mx-auto py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {content.heading}
            </motion.h1>

            <motion.div
              className="prose prose-invert max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default IntroductionPage;
