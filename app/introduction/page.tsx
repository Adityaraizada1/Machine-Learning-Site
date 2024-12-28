"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";

const IntroductionPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Set default content with heading and HTML string
  const [content, setContent] = useState<{ heading: string; content: string }>({
    heading: "Introduction to Machine Learning",
    content: `
      <div class="space-y-4">
        <p class="text-lg text-gray-800">
          Machine learning is a field of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.
        </p>
        <div class="bg-blue-50 p-4 rounded-lg shadow">
          <h2 class="text-xl font-semibold text-gray-700">Key Features:</h2>
          <ul class="list-disc pl-5 space-y-2">
            <li>Learning from data</li>
            <li>Improving model performance</li>
            <li>Making predictions</li>
          </ul>
        </div>
        <img src="https://via.placeholder.com/600x300" alt="Machine Learning" class="rounded-lg shadow-md w-full" />
      </div>
    `,
  });

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} setContent={setContent} />

      {/* Main Content */}
      <div
        className={`flex-1 p-6 transition-all duration-300 ease-in-out 
                    ${isSidebarOpen ? "ml-64" : "ml-0"} 
                    md:ml-64 overflow-auto`}
      >
        {/* Render Content Dynamically */}
        {content.heading && (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold mb-4">{content.heading}</h1>
            <div
              className="prose lg:prose-xl"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroductionPage;
