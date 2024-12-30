"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { FcFaq, FcAbout, FcDocument, FcBusinessman } from "react-icons/fc";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDocsDropdownOpen, setIsDocsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDocsDropdown = () => {
    setIsDocsDropdownOpen(!isDocsDropdownOpen);
  };

  return (
    <div>
      {/* Header with Starry Background */}
      <header className="flex items-center justify-between p-4 md:p-6 bg-black fixed top-0 left-0 right-0 z-20 shadow-lg">
        <div className="text-2xl font-bold text-white">
          <Link href="/">ML</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? (
            <FaTimes className="text-2xl text-white scale-90" />
          ) : (
            <FaBars className="text-2xl text-white scale-90" />
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {/* Docs Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDocsDropdown}
              className="text-white text-sm flex items-center gap-1 hover:text-blue-200 transition-colors duration-300"
            >
              <FcDocument className="text-base" /> Docs
            </button>
            {isDocsDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-black text-white shadow-md rounded-md w-48">
                <Link
                  href="/docs"
                  className="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors duration-300"
                >
                  Go to Docs
                </Link>
                <Link
                  href="/introduction"
                  className="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors duration-300"
                >
                  Getting Started
                </Link>
                <Link
                  href="/api-references"
                  className="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors duration-300"
                >
                  API References
                </Link>
                <Link
                  href="/soon"
                  className="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors duration-300"
                >
                  Advanced Guides
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/source"
            className="text-white text-sm flex items-center gap-1 hover:text-blue-200 transition-colors duration-300"
          >
            <FaGithub className="text-base" /> Source
          </Link>
          <Link
            href="/about"
            className="text-white text-sm flex items-center gap-1 hover:text-blue-200 transition-colors duration-300"
          >
            <FcAbout className="text-base" /> About
          </Link>
          <Link
            href="/faq"
            className="text-white text-sm flex items-center gap-1 hover:text-blue-200 transition-colors duration-300"
          >
            <FcFaq className="text-base" /> FAQs
          </Link>
          <Link
            href="/community"
            className="text-white text-sm flex items-center gap-1 hover:text-blue-200 transition-colors duration-300"
          >
            <FcBusinessman className="text-base" /> Community
          </Link>
        </nav>
      </header>

      {/* Sidebar Menu (Visible only on mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-black z-30 transition-transform transform md:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <div className="text-2xl font-bold text-white">ML</div>
          <div className="cursor-pointer" onClick={toggleMenu} aria-label="Close Menu">
          </div>
        </div>
        <nav className="flex flex-col p-6 space-y-4">
          <Link
            href="/docs"
            className="text-white text-lg flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            <FcDocument className="text-base" /> Docs
          </Link>
          <Link
            href="/source"
            className="text-white text-lg flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            <FaGithub className="text-base" /> Source
          </Link>
          <Link
            href="/about"
            className="text-white text-lg flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            <FcAbout className="text-base" /> About
          </Link>
          <Link
            href="/faq"
            className="text-white text-lg flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            <FcFaq className="text-base" /> FAQs
          </Link>
          <Link
            href="/community"
            className="text-white text-lg flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            <FcBusinessman className="text-base" /> Community
          </Link>
        </nav>
      </div>

      {/* Content Overlay for Mobile Menu (Blur Effect) */}
      <div
        className={`fixed inset-0 bg-opacity-50 backdrop-blur-sm z-10 ${isMenuOpen ? "block" : "hidden"}`}
        onClick={toggleMenu}
        aria-hidden={!isMenuOpen}
      />
    </div>
  );
};

export default Header;
