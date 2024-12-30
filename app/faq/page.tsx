"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Machine Learning One-on-One?",
      answer:
        "It's a free platform where anyone can learn machine learning step-by-step through interactive guides, tutorials, and community collaboration.",
    },
    {
      question: "How can I contribute to the platform?",
      answer:
        "You can contribute by submitting tutorials, fixing bugs, improving documentation, or mentoring beginners in the community.",
    },
    {
      question: "Do I need any prior knowledge to start?",
      answer:
        "No, this platform is designed for complete beginners. Start with our 'Getting Started' guide to learn the basics.",
    },
    {
      question: "Is this platform completely free?",
      answer:
        "Yes, our mission is to democratize machine learning education and make it accessible to everyone, free of cost.",
    },
    {
      question: "How can I join the community?",
      answer:
        "Sign up on our platform and join our Slack or Discord channels to connect with other learners and contributors.(Under Construction)",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen px-4 sm:px-8 lg:px-16 pt-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold mb-6">Frequently Asked <span className="text-blue-500">Sources</span></h1>
          <p className="text-md sm:text-lg text-gray-300">
            Your go-to resource for common queries about our Machine Learning One-on-One platform.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-4 hover:bg-gray-800/20 transition duration-200"
            >
              <div
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-lg sm:text-xl font-semibold">{faq.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-400" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-4 text-sm sm:text-md text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FaqPage;
