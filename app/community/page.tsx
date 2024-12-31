"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaDiscord, FaSlack, FaGithub, FaPeopleArrows, FaComments, FaHandsHelping } from "react-icons/fa";

const CommunityPage = () => {
  // Change document title when Source page is loaded
  useEffect(() => {
      document.title = "ML | Community"; // Set the title
      return () => {
          document.title = "ML | One on One"; // Reset on unmount
      };
  }, []);

  return (

    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen px-4 sm:px-8 lg:px-16 pt-24">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold mb-6">Join Our <span className="text-blue-500">Community</span></h1>
          <p className="text-md sm:text-lg text-gray-300">
            Be part of a growing community of learners, developers, and enthusiasts working together to make machine learning accessible to everyone.
          </p>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <FaPeopleArrows className="text-5xl text-blue-500" />
            <h3 className="text-xl font-semibold">Collaborate</h3>
            <p className="text-sm text-gray-300">
              Work on exciting projects, share ideas, and collaborate with peers to create impactful machine learning solutions.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <FaComments className="text-5xl text-purple-500" />
            <h3 className="text-xl font-semibold">Engage</h3>
            <p className="text-sm text-gray-300">
              Participate in discussions, ask questions, and get guidance from experienced community members and mentors.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <FaHandsHelping className="text-5xl text-green-500" />
            <h3 className="text-xl font-semibold">Contribute</h3>
            <p className="text-sm text-gray-300">
              Help improve the platform by submitting tutorials, fixing bugs, or mentoring beginners.
            </p>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">How to Get Involved <span className="text-blue-500">?</span></h2>
          <p className="text-md sm:text-lg text-gray-300 mb-8">
            Whether you're a beginner or an expert, there's a place for you in our community. Choose a platform below to connect with us.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Join on Discord */}
            <Link
              href="https://discord.gg/your-community-link" // Replace with your actual Discord link
              target="_blank"
              className="flex flex-col items-center text-center text-blue-400 hover:text-blue-500 transition duration-300"
            >
              <FaDiscord className="text-6xl mb-4" />
              <span className="text-lg font-semibold">Join Discord</span>
            </Link>
            {/* Join on Slack */}
            <Link
              href="https://slack.com/your-community-link" // Replace with your actual Slack link
              target="_blank"
              className="flex flex-col items-center text-center text-purple-400 hover:text-purple-500 transition duration-300"
            >
              <FaSlack className="text-6xl mb-4" />
              <span className="text-lg font-semibold">Join Slack</span>
            </Link>
            {/* Contribute on GitHub */}
            <Link
              href="https://github.com/Adityaraizada1/Machine-Learning-Site" // Replace with your GitHub repository
              target="_blank"
              className="flex flex-col items-center text-center text-gray-400 hover:text-gray-500 transition duration-300"
            >
              <FaGithub className="text-6xl mb-4" />
              <span className="text-lg font-semibold">Contribute on GitHub</span>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-800 rounded-lg p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let’s Build the Future Together!</h2>
          <p className="text-md sm:text-lg text-gray-300 mb-6">
            Our mission is to democratize machine learning education and empower individuals worldwide. Together, we can achieve great things.
          </p>
          <Link
            href="https://github.com/Adityaraizada1/Machine-Learning-Site"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded transition duration-300"
          >
            Start Contributing
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CommunityPage;
