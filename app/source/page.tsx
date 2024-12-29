"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaGithub, FaReact, FaCss3, FaNodeJs, FaSlack} from "react-icons/fa"; // Added Next.js icon
import { RiNextjsLine } from "react-icons/ri";
import React, { useEffect } from "react";

const SourcePage = () => {
    // Change document title when Source page is loaded
    useEffect(() => {
        document.title = "ML | Sources"; // Set the title
        return () => {
            document.title = "ML | One on One"; // Reset on unmount
        };
    }, []);

    return (
        <>
            <Navbar />
            <section className="bg-black text-white min-h-screen flex flex-col items-center px-6 sm:px-12 lg:px-24 py-16 pt-24">
                <div className="w-full max-w-6xl space-y-16">
                    {/* Header Section */}
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            Project <span className="text-blue-500">Sources</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12">
                            Learn about the sources and technologies that made this project possible. We are
                            committed to transparency and giving credit where it's due.
                        </p>
                    </div>

                    {/* How We Use the Sources Section */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-semibold text-center mb-6">How We Use the Sources</h2>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed text-justify">
                            Our project leverages multiple open-source tools, libraries, and frameworks to
                            provide the best user experience and functionality. We use a combination of frontend
                            and backend technologies to ensure a seamless integration and rapid development.
                        </p>
                    </div>

                    {/* Contributors or Tools Section */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-semibold text-center mb-6">Contributors & Tools</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {/* Tool 1 - React */}
                            <div className="flex flex-col items-center text-center space-y-3">
                                <FaReact className="text-4xl text-blue-500" />
                                <div>
                                    <h3 className="text-lg font-semibold">React</h3>
                                    <p className="text-sm text-gray-300">A JavaScript library for building user interfaces, ensuring a smooth and fast user experience.</p>
                                </div>
                            </div>
                            {/* Tool 2 - Tailwind CSS */}
                            <div className="flex flex-col items-center text-center space-y-3">
                                <FaCss3 className="text-4xl text-blue-500" />
                                <div>
                                    <h3 className="text-lg font-semibold">Tailwind CSS</h3>
                                    <p className="text-sm text-gray-300">A utility-first CSS framework for styling, making UI development faster and more efficient.</p>
                                </div>
                            </div>
                            {/* Tool 3 - Node.js */}
                            <div className="flex flex-col items-center text-center space-y-3">
                                <FaNodeJs className="text-4xl text-green-500" />
                                <div>
                                    <h3 className="text-lg font-semibold">Node.js</h3>
                                    <p className="text-sm text-gray-300">A JavaScript runtime for backend development, allowing for non-blocking, event-driven server-side applications.</p>
                                </div>
                            </div>
                            {/* Tool 4 - Slack */}
                            <div className="flex flex-col items-center text-center space-y-3">
                                <FaSlack className="text-4xl text-purple-500" />
                                <div>
                                    <h3 className="text-lg font-semibold">Slack</h3>
                                    <p className="text-sm text-gray-300">A team communication and collaboration platform, enabling efficient communication and workflow.</p>
                                </div>
                            </div>
                            {/* Tool 5 - Next.js */}
                            <div className="flex flex-col items-center text-center space-y-3">
                                <RiNextjsLine className="text-4xl text-black" />
                                <div>
                                    <h3 className="text-lg font-semibold">Next.js</h3>
                                    <p className="text-sm text-gray-300">A powerful React framework for building fast, scalable, and optimized web applications.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GitHub Repo Section */}
                    <div className="text-center mt-12">
                        <h2 className="text-3xl font-semibold mb-6">Contribute on GitHub</h2>
                        <p className="text-lg sm:text-xl text-gray-300 mb-4">
                            This project is open-source! Check out the repository on GitHub and contribute to make it even better.
                        </p>
                        <Link
                            href="https://github.com/Adityaraizada1/Machine-Learning-Site" // Replace with your actual repo URL
                            target="_blank"
                            className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-300"
                        >
                            <FaGithub className="mr-2 text-2xl" /> View on GitHub
                        </Link>
                    </div>

                    {/* Get in Touch Section */}
                    <div className="text-center mt-12">
                        <h2 className="text-3xl font-semibold mb-6">Have Questions?</h2>
                        <p className="text-lg sm:text-xl text-gray-300 mb-4">
                            If you have any questions or would like to contribute to the project, feel free to{" "}
                            <Link
                                href="mailto:adityaraizada59@gmail.com Inquiry&body=Hello, I would like to discuss a potential collaboration." // Replace with your email address
                                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                            >
                                get in touch
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SourcePage;
