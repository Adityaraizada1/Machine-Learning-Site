"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const VideoPage = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    useEffect(() => {
        document.title = "ML | Videos";
        return () => {
            document.title = "ML | One on One";
        };
    }, []);

    const videos = [
        {
            link: "https://www.youtube.com/embed/ukzFI9rgwfU?si=1n87IESoiDTmrT-X",
            title: "Introduction to Machine Learning",
            description: "Learn the basics of machine learning and its applications in the modern world.",
            channel: "Simplilearn",
            duration: "45 mins"
        },
        {
            link: "https://www.youtube.com/embed/6M5VXKLf4D4?si=S2RW4lp0JNKGEAIc",
            title: "Deep Learning Basics",
            description: "An overview of deep learning concepts and frameworks.",
            channel: "Simplilearn",
            duration: "30 mins"
        },
        {
            link: "https://www.youtube.com/embed/9NsfX9W80rw?si=QMOI7Hu4YJTDkHHB",
            title: "TensorFlow Tutorial",
            description: "Step-by-step guidance on using TensorFlow for building ML models.",
            channel: "Intellipaat",
            duration: "60 mins"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const handleVideoClick = (videoLink: string) => {
        const autoplayLink = videoLink.includes('?') 
            ? `${videoLink}&autoplay=1` 
            : `${videoLink}?autoplay=1`;
        setActiveVideo(autoplayLink);
    };

    return (
        <>
            <Navbar />
            <section className="relative bg-black text-white min-h-screen">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

                {/* Video Modal */}
                {activeVideo && (
                    <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 mt-16">
                        <div className="relative w-full h-full max-w-[90%] max-h-[80vh] flex items-center justify-center">
                            {/* Close button - Positioned outside */}
                            <button
                                onClick={() => setActiveVideo(null)}
                                className="absolute -top-12 right-0 z-50 text-white/80 hover:text-white 
                                         flex items-center gap-2 px-4 py-2 rounded-lg
                                         bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                                aria-label="Close video"
                            >
                                <span className="text-sm font-medium">Close</span>
                                <IoClose size={20} />
                            </button>

                            {/* Video Container */}
                            <div className="relative w-full h-0 pb-[56.25%] bg-black/50 rounded-xl overflow-hidden">
                                <iframe
                                    src={activeVideo}
                                    className="absolute top-0 left-0 w-full h-full"
                                    allowFullScreen
                                    allow="autoplay"
                                    style={{ maxHeight: '80vh' }}
                                ></iframe>
                            </div>
                        </div>

                        {/* Background overlay close */}
                        <div 
                            className="absolute inset-0 -z-10" 
                            onClick={() => setActiveVideo(null)}
                        />
                    </div>
                )}

                <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 pt-24">
                    <div className="max-w-7xl mx-auto space-y-16">
                        {/* Header Section */}
                        <motion.div 
                            className="text-center space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                                Watch <span className="text-blue-500">Videos</span>
                            </h1>
                            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                                Explore our collection of carefully selected videos to enhance your learning experience in Machine Learning.
                            </p>
                        </motion.div>

                        {/* Video Grid Section */}
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {videos.map((video, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group relative"
                                >
                                    <div 
                                        className="aspect-video relative rounded-xl overflow-hidden cursor-pointer"
                                        onClick={() => handleVideoClick(video.link)}
                                    >
                                        {/* Thumbnail overlay */}
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                                        
                                        {/* Play button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-blue-500/80 text-white 
                                                        transform group-hover:scale-110 transition-all duration-300 group-hover:bg-blue-500">
                                                <FaPlay className="ml-1 w-4 h-4 sm:w-6 sm:h-6" />
                                            </div>
                                        </div>

                                        {/* Video thumbnail */}
                                        <iframe
                                            className="w-full h-full pointer-events-none"
                                            src={video.link}
                                            title={video.title}
                                        ></iframe>
                                    </div>

                                    <div className="mt-4 space-y-2">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors duration-300">
                                                {video.title}
                                            </h3>
                                            <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full">
                                                {video.duration}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {video.description}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            By <span className="text-blue-400">{video.channel}</span>
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Credits Section */}
                        <motion.div 
                            className="max-w-4xl mx-auto space-y-4 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                                Credits
                            </h2>
                            <p className="text-base text-gray-300">
                                We extend our gratitude to the following YouTube channels for their amazing content:
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 mt-4">
                                {Array.from(new Set(videos.map(v => v.channel))).map((channel, index) => (
                                    <span 
                                        key={index}
                                        className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full"
                                    >
                                        {channel}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Get in Touch Section */}
                        <motion.div 
                            className="text-center space-y-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                                Have Suggestions?
                            </h2>
                            <p className="text-base text-gray-300">
                                Found a video that should be featured here?{" "}
                                <a
                                    href="mailto:adityaraizada59@gmail.com?subject=Video Suggestion"
                                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
                                >
                                    Get in touch
                                    <svg 
                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </p>
                        </motion.div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
};

export default VideoPage;
