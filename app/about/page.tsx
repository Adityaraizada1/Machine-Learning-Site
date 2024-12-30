"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image"
import React, { useEffect } from "react";
import { MdVerified } from "react-icons/md";
import Footer from "@/components/Footer";

const AboutUs = () => {

    // Change document title when About Us page is loaded
    useEffect(() => {
        // Set custom title for About Us page
        document.title = "ML | About Us";

        // Optional: Clean up by resetting the title when the component is unmounted
        return () => {
            document.title = "ML | One on One"; // Reset to default title or any other title
        };
    }, []);

    return (
        <><Navbar /><section className="bg-black text-white min-h-screen flex flex-col items-center px-6 sm:px-12 lg:px-24 py-16 pt-24">
            <div className="w-full max-w-6xl space-y-16">
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        About <span className="text-blue-500">Us</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                        We are passionate innovators, driven to make technology accessible
                        and impactful for everyone. With a strong belief in the power of
                        collaboration, we strive to bring meaningful solutions to life.
                    </p>
                </div>

                {/* Who We Are Section */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-semibold text-center">Who We Are</h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed text-justify">
                        <span className="relative">
                            <span className="absolute inset-0 bg-green-400 opacity-50 rounded-md -bottom-1.5"></span>
                            <span className="relative z-10">We are a team of visionaries</span>
                        </span>{' '}
                        and creators who aim to design solutions that address modern
                        challenges. Our mission revolves around harnessing technology to
                        transform ideas into reality, helping businesses and individuals
                        achieve their goals effectively.
                    </p>
                </div>

                {/* Why We Do It Section */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-semibold text-center">Why We Do It</h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed text-justify">
                        Our journey is fueled by the belief that{' '}
                        <span className="relative">
                            <span className="absolute inset-0 bg-green-400 opacity-50 rounded-md -bottom-1.5"></span>
                            <span className="relative z-10">technology can be a catalyst for positive change.</span>
                        </span>{' '}
                        By bridging the gap between innovation and real-world needs, we
                        empower people to make smarter, faster decisions and enhance their
                        lives.
                    </p>
                </div>

                {/* Meet Our Team Section */}
                 <div className="space-y-8">
                        <h2 className="text-3xl font-semibold text-center">Meet Our Team</h2>
                        <div className="flex flex-wrap justify-center gap-8">
                            {/* Team Member 1 */}
                            <div className="w-full sm:w-1/2 lg:w-1/4 text-center">
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    <Image
                                        src="/team-member-1.jpg"
                                        alt="Aditya Raizada"
                                        fill // This replaces the "layout" prop
                                        style={{ objectFit: "cover" }} // This replaces the "objectFit" prop
                                        className="rounded-full"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold flex justify-center items-center gap-2">
                                    Aditya Raizada
                                    <MdVerified className="text-blue-500 text-sm" /> {/* Verification icon */}
                                </h3>
                                <p className="text-gray-300">Co-founder & CEO</p>
                            </div>
                            {/* Team Member 2 */}
                            <div className="w-full sm:w-1/2 lg:w-1/4 text-center">
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    <Image
                                        src="/team-member-2.jpeg"
                                        alt="Saket Gupta"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="rounded-full"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold flex justify-center items-center gap-2">
                                    Saket Gupta
                                    <MdVerified className="text-blue-500 text-sm" /> {/* Verification icon */}
                                </h3>
                                <p className="text-gray-300">Co-founder & CTO</p>
                            </div>
                            {/* Team Member 3 */}
                            <div className="w-full sm:w-1/2 lg:w-1/4 text-center">
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    <Image
                                        src="/team-member-3.jpg"
                                        alt="Vibhav Sharma"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="rounded-full"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold flex justify-center items-center gap-2">
                                    Vibhav Sharma
                                    <MdVerified className="text-blue-500 text-sm" /> {/* Verification icon */}
                                </h3>
                                <p className="text-gray-300">Lead Designer</p>
                            </div>
                            {/* Team Member 4 */}
                            <div className="w-full sm:w-1/2 lg:w-1/4 text-center">
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    <Image
                                        src="/team-member-4.jpg"
                                        alt="Jyotiermaan Rai"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="rounded-full"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold flex justify-center items-center gap-2">
                                    Jyotiermaan Rai
                                    <MdVerified className="text-blue-500 text-sm" /> {/* Verification icon */}
                                </h3>
                                <p className="text-gray-300">Lead Designer</p>
                            </div>
                        </div>
                    </div>

                {/* Contact Us Section */}
                <div className="text-center mt-12">
                    <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
                    <p className="text-lg sm:text-xl text-gray-300 mb-4">
                        Have any questions or want to collaborate with us?{" "}
                        <Link
                            href="mailto:adityaraizada59@gmail.com Inquiry&body=Hello, I would like to discuss a potential collaboration." // Replace with your email address
                            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                        >
                            Contact Us
                        </Link>
                    </p>
                </div>
            </div>
            <Footer />
        </section></>
    );
};

export default AboutUs;
