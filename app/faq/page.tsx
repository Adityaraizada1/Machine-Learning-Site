"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
      <section className="relative bg-black text-white min-h-screen">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 pt-24">
          <div className="max-w-3xl mx-auto">
            {/* Header Section */}
            <motion.div 
              className="text-center space-y-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                Frequently Asked <span className="text-blue-500">Questions</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300">
                Your go-to resource for common queries about our Machine Learning One-on-One platform.
              </p>
            </motion.div>

            {/* FAQ List */}
            <motion.div 
              className="space-y-4 divide-y divide-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {faqs.map((faq, index) => (
                <div key={index} className="pt-4 first:pt-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-start gap-4 group text-left"
                  >
                    <h3 className="text-lg font-medium group-hover:text-blue-400 transition-colors duration-200">
                      {faq.question}
                    </h3>
                    <motion.div 
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <FaChevronDown 
                        className="text-blue-500 w-4 h-4 transition-transform" 
                      />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 pb-2 text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>

            {/* Contact Section */}
            <motion.div 
              className="mt-20 text-center space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                Still have questions?
              </h2>
              <p className="text-gray-300">
                Can't find the answer you're looking for? Please{' '}
                <a
                  href="mailto:adityaraizada59@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 border-b border-blue-400/30 hover:border-blue-300"
                >
                  contact us
                </a>
                .
              </p>
            </motion.div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default FaqPage;
