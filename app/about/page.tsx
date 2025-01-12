"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image"
import React, { useEffect } from "react";
import { MdVerified } from "react-icons/md";
import Footer from "@/components/Footer";
import HyperText from "@/components/ui/hyper-text";

const AboutUs = () => {
    useEffect(() => {
        document.title = "ML | About Us";
        return () => {
            document.title = "ML | One on One";
        };
    }, []);

    return (
        <>
            <Navbar />
            <section className="relative bg-black text-white min-h-screen">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

                <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16 pt-24">
                    <div className="w-full max-w-6xl space-y-20">
                        {/* Header Section */}
                        <div className="text-center space-y-4">
                            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                                About <span className="text-blue-500">Us</span>
                            </h1>
                            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                                We are passionate innovators, driven to make technology accessible
                                and impactful for everyone. With a strong belief in the power of
                                collaboration, we strive to bring meaningful solutions to life.
                            </p>
                        </div>

                        {/* Who We Are Section */}
                        <div className="space-y-4 max-w-4xl mx-auto">
                            <h2 className="text-3xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                                Who We Are
                            </h2>
                            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                                <span className="text-blue-400 border-b border-blue-500/20">
                                    We are a team of visionaries
                                </span>{' '}
                                and creators who aim to design solutions that address modern
                                challenges. Our mission revolves around harnessing technology to
                                transform ideas into reality, helping businesses and individuals
                                achieve their goals effectively.
                            </p>
                        </div>

                        {/* Why We Do It Section */}
                        <div className="space-y-4 max-w-4xl mx-auto">
                            <h2 className="text-3xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                                Why We Do It
                            </h2>
                            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                                Our journey is fueled by the belief that{' '}
                                <span className="text-blue-400 border-b border-blue-500/20">
                                    technology can be a catalyst for positive change.
                                </span>{' '}
                                By bridging the gap between innovation and real-world needs, we
                                empower people to make smarter, faster decisions and enhance their
                                lives.
                            </p>
                        </div>

                        {/* Meet Our Team Section */}
                        <div className="space-y-12">
                            <h2 className="text-3xl font-semibold text-center">
                                <HyperText>Meet Our Team</HyperText>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
                                {[
                                    { name: "Aditya Raizada", role: "Co-founder & CEO", image: "/team-member-1.jpg" },
                                    { name: "Saket Gupta", role: "Co-founder & CTO", image: "/team-member-2.jpeg" },
                                    { name: "Vibhav Sharma", role: "Lead Designer", image: "/team-member-3.jpg" },
                                    { name: "Jyotiermaan Rai", role: "Lead Designer", image: "/team-member-4.jpg" },
                                    { name: "Sheril Dhiman", role: "Intern, Dev", image: "/team-member-5.jpg" },
                                ].map((member, index) => (
                                    <div key={index} className="group text-center">
                                        <div className="relative w-32 h-32 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-70" />
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                style={{ objectFit: "cover" }}
                                                className="rounded-full relative z-10"
                                            />
                                        </div>
                                        <h3 className="text-lg font-semibold flex justify-center items-center gap-2">
                                            {member.name}
                                            <MdVerified className="text-blue-500 text-sm" />
                                        </h3>
                                        <p className="text-gray-400 text-sm">{member.role}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Us Section */}
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <h2 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                                Get in Touch
                            </h2>
                            <p className="text-base sm:text-lg text-gray-300">
                                Have any questions or want to collaborate with us?{" "}
                                <Link
                                    href="mailto:adityaraizada59@gmail.com"
                                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
                                >
                                    Contact Us
                                    <svg 
                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
};

export default AboutUs;
