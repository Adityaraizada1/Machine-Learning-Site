"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaDiscord, FaSlack, FaGithub, FaPeopleArrows, FaComments, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";

const CommunityPage = () => {
  useEffect(() => {
    document.title = "ML | Community";
    return () => {
      document.title = "ML | One on One";
    };
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Navbar />
      <section className="relative bg-black text-white min-h-screen">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 pt-24">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Header Section */}
            <motion.div 
              className="text-center space-y-4"
              {...fadeInUp}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                Join Our <span className="text-blue-500">Community</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                Be part of a growing community of learners, developers, and enthusiasts working together to make machine learning accessible to everyone.
              </p>
            </motion.div>

            {/* Community Features */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-center space-y-4 group">
                <FaPeopleArrows className="text-5xl text-blue-500 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold">Collaborate</h3>
                <p className="text-gray-300 leading-relaxed">
                  Work on exciting projects, share ideas, and collaborate with peers to create impactful machine learning solutions.
                </p>
              </div>

              <div className="text-center space-y-4 group">
                <FaComments className="text-5xl text-purple-500 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold">Engage</h3>
                <p className="text-gray-300 leading-relaxed">
                  Participate in discussions, ask questions, and get guidance from experienced community members and mentors.
                </p>
              </div>

              <div className="text-center space-y-4 group">
                <FaHandsHelping className="text-5xl text-green-500 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold">Contribute</h3>
                <p className="text-gray-300 leading-relaxed">
                  Help improve the platform by submitting tutorials, fixing bugs, or mentoring beginners.
                </p>
              </div>
            </motion.div>

            {/* Join Us Section */}
            <motion.div 
              className="text-center space-y-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                  How to Get Involved <span className="text-blue-500">?</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                  Whether you're a beginner or an expert, there's a place for you in our community. Choose a platform below to connect with us.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-16">
                <Link href="https://discord.gg/your-community-link" target="_blank" className="group">
                  <div className="flex flex-col items-center space-y-4">
                    <FaDiscord className="text-6xl text-[#5865F2] opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300" />
                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors">Join Discord</span>
                  </div>
                </Link>

                <Link href="https://slack.com/your-community-link" target="_blank" className="group">
                  <div className="flex flex-col items-center space-y-4">
                    <FaSlack className="text-6xl text-[#E01E5A] opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300" />
                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors">Join Slack</span>
                  </div>
                </Link>

                <Link href="https://github.com/Adityaraizada1/Machine-Learning-Site" target="_blank" className="group">
                  <div className="flex flex-col items-center space-y-4">
                    <FaGithub className="text-6xl text-white opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300" />
                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors">Contribute on GitHub</span>
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              className="text-center space-y-6 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                Let's Build the Future Together!
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to democratize machine learning education and empower individuals worldwide. Together, we can achieve great things.
              </p>
              <Link 
                href="https://github.com/Adityaraizada1/Machine-Learning-Site"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
              >
                <span className="border-b border-blue-400/30 group-hover:border-blue-300">Start Contributing</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default CommunityPage;
