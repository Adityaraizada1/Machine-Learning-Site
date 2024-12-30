"use client";

import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const ApiReferences = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

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
      <section className="bg-black text-white min-h-screen flex flex-col items-center px-6 sm:px-12 lg:px-24 py-16 pt-24">
        <div className="w-full max-w-6xl space-y-16">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Machine Learning <span className="text-blue-500">API References</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Explore various machine learning APIs for data processing, model training, and evaluation.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full mb-8">
            <input
              type="text"
              placeholder="Search for APIs"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none"
            />
          </div>

          {/* API Categories */}
          <div className="space-y-16">
            {filteredApis.map((category) => (
              <div key={category.category}>
                <h2 className="text-3xl font-semibold text-center text-blue-400 mb-6">
                  {category.category}
                </h2>
                <div className="space-y-8">
                  {category.apis.map((api) => (
                    <div
                      key={api.name}
                      className="border-t-2 border-gray-600 pt-4"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-semibold">{api.name}</h3>
                        <button
                          onClick={() => toggleSection(api.name)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          {expandedSection === api.name ? "Hide Details" : "Show Details"}
                        </button>
                      </div>
                      {expandedSection === api.name && (
                        <div className="mt-4">
                          <p className="text-lg text-gray-300 leading-relaxed">
                            {api.description}
                          </p>
                          <a
                            href={api.link}
                            target="_blank"
                            className="text-blue-500 hover:text-blue-700 transition-colors duration-300 mt-2 inline-block"
                          >
                            Visit Documentation
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ApiReferences;
