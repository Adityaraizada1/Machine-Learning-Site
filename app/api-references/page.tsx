"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiExternalLink, FiChevronDown, FiChevronUp, FiCode, FiDatabase, FiActivity } from "react-icons/fi";

const ApiReferences = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Get category icon based on category name
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Data Processing APIs":
        return <FiDatabase className="w-6 h-6" />;
      case "Model Training APIs":
        return <FiCode className="w-6 h-6" />;
      case "Model Evaluation APIs":
        return <FiActivity className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const apiData = [
    {
      category: "Data Processing APIs",
      apis: [
        {
          name: "TensorFlow.js",
          description: "TensorFlow.js is an open-source library for training and deploying machine learning models in the browser and Node.js.",
          link: "https://www.tensorflow.org/js",
        },
        {
          name: "scikit-learn",
          description: "A popular Python library for machine learning with efficient tools for data mining and data analysis.",
          link: "https://scikit-learn.org/stable/",
        },
        {
          name: "Pandas",
          description: "Pandas is an open-source data analysis and manipulation library for Python.",
          link: "https://pandas.pydata.org/",
        },
      ],
    },
    {
      category: "Model Training APIs",
      apis: [
        {
          name: "Google Cloud AI",
          description: "Machine learning services for model training, data storage, and deployment.",
          link: "https://cloud.google.com/products/ai",
        },
        {
          name: "AWS SageMaker",
          description: "Fully managed service for building, training, and deploying machine learning models.",
          link: "https://aws.amazon.com/sagemaker/",
        },
        {
          name: "Azure Machine Learning",
          description: "Cloud-based service for building, training, and deploying machine learning models.",
          link: "https://azure.microsoft.com/en-us/services/machine-learning/",
        },
      ],
    },
    {
      category: "Model Evaluation APIs",
      apis: [
        {
          name: "MLflow",
          description: "Open-source platform for managing the end-to-end machine learning lifecycle.",
          link: "https://mlflow.org/",
        },
        {
          name: "TensorBoard",
          description: "Visualization tools for TensorFlow, tracking metrics such as accuracy and loss.",
          link: "https://www.tensorflow.org/tensorboard",
        },
      ],
    },
  ];

  const filteredApis = apiData.map((category) => ({
    ...category,
    apis: category.apis.filter((api) =>
      api.name.toLowerCase().includes(searchTerm)
    ),
  }));

  return (
    <>
      <Navbar />
      <section className="bg-black text-white min-h-screen flex flex-col items-center px-6 sm:px-12 lg:px-24 py-24 pt-32">
        <motion.div 
          className="w-full max-w-6xl space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div 
            className="text-center space-y-8"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent 
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 leading-tight">
                Machine Learning API References
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Explore various machine learning APIs for data processing, model training, and evaluation.
              </p>
            </div>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            className="w-full max-w-2xl mx-auto relative group"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
              rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-75" />
            <div className="relative flex items-center">
              <FiSearch className="absolute left-5 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search for APIs..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-14 py-5 rounded-2xl bg-black/50 text-white placeholder-gray-400 
                  border border-white/10 focus:border-white/20 focus:outline-none focus:ring-2 
                  focus:ring-blue-500/20 backdrop-blur-sm transition-all duration-300 text-lg"
              />
            </div>
          </motion.div>

          {/* API Categories */}
          <div className="space-y-24">
            {filteredApis.map((category) => (
              <motion.div 
                key={category.category}
                variants={itemVariants}
                className="space-y-12"
              >
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                    flex items-center justify-center text-blue-400">
                    {getCategoryIcon(category.category)}
                  </div>
                  <h2 className="text-3xl font-semibold text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r 
                      from-blue-400 via-purple-400 to-pink-400">
                      {category.category}
                    </span>
                  </h2>
                </div>

                <div className="space-y-8">
                  <AnimatePresence>
                    {category.apis.map((api) => (
                      <motion.div
                        key={api.name}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm
                          hover:border-white/20 transition-all duration-300 bg-gradient-to-br 
                          from-black/50 to-blue-950/30"
                      >
                        <div 
                          className="p-8 cursor-pointer hover:bg-white/5 transition-colors"
                          onClick={() => toggleSection(api.name)}
                        >
                          <div className="flex justify-between items-center">
                            <h3 className="text-2xl font-semibold text-white/90">{api.name}</h3>
                            <motion.button
                              className="text-blue-400 hover:text-blue-300 transition-colors p-2"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {expandedSection === api.name ? <FiChevronUp /> : <FiChevronDown />}
                            </motion.button>
                          </div>
                        </div>
                        
                        <motion.div
                          initial={false}
                          animate={{ height: expandedSection === api.name ? "auto" : 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-8 pt-0 space-y-6 bg-white/5">
                            <p className="text-lg text-gray-300 leading-relaxed">
                              {api.description}
                            </p>
                            <a
                              href={api.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 
                                rounded-xl text-blue-400 hover:text-blue-300 transition-all group
                                hover:bg-blue-500/20"
                            >
                              Visit Documentation
                              <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="mt-32">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default ApiReferences;
