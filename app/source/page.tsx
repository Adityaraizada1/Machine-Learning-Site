"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaGithub, FaReact, FaCss3, FaNodeJs, FaSlack } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandVscode } from "react-icons/tb";
import { MdFilter9Plus } from "react-icons/md";
import React, { useEffect } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const SourcePage = () => {
    useEffect(() => {
        document.title = "ML | Sources";
        return () => {
            document.title = "ML | One on One";
        };
    }, []);

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const tools = [
        { icon: FaReact, name: "React", color: "text-blue-500", description: "A JavaScript library for building user interfaces, ensuring a smooth and fast user experience." },
        { icon: FaCss3, name: "Tailwind CSS", color: "text-blue-500", description: "A utility-first CSS framework for styling, making UI development faster and more efficient." },
        { icon: FaNodeJs, name: "Node.js", color: "text-green-500", description: "A JavaScript runtime for backend development, allowing for non-blocking, event-driven server-side applications." },
        { icon: FaSlack, name: "Slack", color: "text-purple-500", description: "A team communication and collaboration platform, enabling efficient communication and workflow." },
        { icon: RiNextjsLine, name: "Next.js", color: "text-white", description: "A powerful React framework for building fast, scalable, and optimized web applications." },
        { icon: FaGithub, name: "GitHub", color: "text-gray-300", description: "A platform for version control and collaboration, hosting our project's codebase securely." },
        { icon: TbBrandVscode, name: "VS Code", color: "text-blue-500", description: "A powerful code editor with extensive support for debugging, plugins, and development environments." },
        { icon: MdFilter9Plus, name: "Many more", color: "text-white", description: "" },
    ];

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
                                Project <span className="text-blue-500">Sources</span>
                            </h1>
                            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
                                Learn about the sources and technologies that made this project possible. We are
                                committed to transparency and giving credit where it's due.
                            </p>
                        </motion.div>

                        {/* How We Use the Sources Section */}
                        <motion.div 
                            className="space-y-6 max-w-4xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                                How We Use the Sources
                            </h2>
                            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                                Our project leverages multiple open-source tools, libraries, and frameworks to
                                provide the best user experience and functionality. We use a combination of frontend
                                and backend technologies to ensure a seamless integration and rapid development.
                            </p>
                        </motion.div>

                        {/* Tools Section */}
                        <div className="space-y-12">
                            <motion.h2 
                                className="text-3xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Contributors & Tools
                            </motion.h2>
                            <motion.div 
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                {tools.map((tool, index) => (
                                    <motion.div
                                        key={index}
                                        className="group text-center space-y-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                    >
                                        <tool.icon className={`text-5xl ${tool.color} mx-auto transform group-hover:scale-110 transition-transform duration-300`} />
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors duration-300">
                                                {tool.name}
                                            </h3>
                                            {tool.description && (
                                                <p className="text-sm text-gray-400 leading-relaxed">
                                                    {tool.description}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* GitHub and Contact Sections */}
                        <motion.div 
                            className="space-y-16 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            {/* GitHub Section */}
                            <div className="space-y-4">
                                <h2 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                                    Contribute on GitHub
                                </h2>
                                <p className="text-gray-300 max-w-2xl mx-auto">
                                    This project is open-source! Check out the repository on GitHub and contribute to make it even better.
                                </p>
                                <Link
                                    href="https://github.com/Adityaraizada1/Machine-Learning-Site"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
                                >
                                    <FaGithub className="text-2xl" />
                                    <span className="border-b border-blue-400/30 group-hover:border-blue-300">View on GitHub</span>
                                </Link>
                            </div>

                            {/* Contact Section */}
                            <div className="space-y-4">
                                <h2 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                                    Have Questions?
                                </h2>
                                <p className="text-gray-300">
                                    If you have any questions or would like to contribute to the project, feel free to{" "}
                                    <Link
                                        href="mailto:adityaraizada59@gmail.com"
                                        className="text-blue-400 hover:text-blue-300 transition-colors duration-300 border-b border-blue-400/30 hover:border-blue-300"
                                    >
                                        get in touch
                                    </Link>
                                    .
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
};

export default SourcePage;
