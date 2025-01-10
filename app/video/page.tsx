"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useEffect } from "react";

const VideoPage = () => {
    // Change document title when Video page is loaded
    useEffect(() => {
        document.title = "ML | Videos"; // Set the title
        return () => {
            document.title = "ML | One on One"; // Reset on unmount
        };
    }, []);

    const videos = [
        {
            link: "https://www.youtube.com/embed/ukzFI9rgwfU?si=1n87IESoiDTmrT-X",
            title: "Introduction to Machine Learning",
            description: "Learn the basics of machine learning and its applications in the modern world.",
            channel: "Simplilearn",
        },
        {
            link: "https://www.youtube.com/embed/6M5VXKLf4D4?si=S2RW4lp0JNKGEAIc",
            title: "Deep Learning Basics",
            description: "An overview of deep learning concepts and frameworks.",
            channel: "Simplilearn",
        },
        {
            link: "https://www.youtube.com/embed/9NsfX9W80rw?si=QMOI7Hu4YJTDkHHB",
            title: "TensorFlow Tutorial",
            description: "Step-by-step guidance on using TensorFlow for building ML models.",
            channel: "Intellipaat",
        },
    ];

    return (
        <>
            <Navbar />
            <section className="bg-black text-white min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-16 py-16 pt-24">
                <div className="w-full max-w-6xl space-y-16">
                    {/* Header Section */}
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            Watch <span className="text-blue-500">Videos</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12">
                            Explore our collection of carefully selected videos to enhance your learning experience in Machine Learning.
                        </p>
                    </div>

                    {/* Video Grid Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((video, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center space-y-4 bg-gray-800 p-4 rounded-lg shadow-lg"
                            >
                                <iframe
                                    className="w-full h-52 sm:h-64 lg:h-72 rounded-lg"
                                    src={video.link}
                                    title={video.title}
                                    allowFullScreen
                                ></iframe>
                                <h3 className="text-lg font-semibold text-center">{video.title}</h3>
                                <p className="text-sm text-gray-300 text-center">{video.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Credits Section */}
                    <div className="bg-gray-900 p-6 rounded-lg text-center">
                        <h2 className="text-2xl font-semibold mb-4">Credits</h2>
                        <p className="text-lg text-gray-300 mb-4">
                            We extend our gratitude to the following YouTube channels for their amazing content:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                            {videos.map((video, index) => (
                                <li key={index}>
                                    <strong>{video.channel}</strong>: {video.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get in Touch Section */}
                    <div className="text-center mt-12">
                        <h2 className="text-3xl font-semibold mb-6">Have Suggestions?</h2>
                        <p className="text-lg sm:text-xl text-gray-300 mb-4">
                            Found a video that should be featured here? Feel free to{" "}
                            <a
                                href="mailto:adityaraizada59@gmail.com?subject=Video Suggestion&body=I would like to suggest the following video..."
                                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                            >
                                get in touch
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default VideoPage;
