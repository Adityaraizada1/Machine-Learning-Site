"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiLogOut, FiChevronDown, FiBook, FiCode, FiFileText, FiTerminal } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { useUser } from "@/app/context/UserContext";

export const AcmeLogo = () => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="relative"
  >
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36" className="relative z-10">
      {/* Glowing Effect Layer */}
      <motion.path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        className="absolute"
        fill="white"
        fillRule="evenodd"
        initial={{ opacity: 0.1 }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
          filter: [
            "blur(3px) brightness(1.2)",
            "blur(2px) brightness(1.5)",
            "blur(3px) brightness(1.2)"
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Logo Layer */}
      <motion.path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        className="text-white"
        fill="currentColor"
        fillRule="evenodd"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut"
        }}
      />
    </svg>

    {/* Subtle Glow Background */}
    <div className="absolute inset-0 -z-10">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-white/10 to-blue-500/10 blur-xl animate-pulse-slow"
        style={{ transform: 'translate(-25%, -25%) scale(1.5)' }}
      />
    </div>
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [docsDropdownOpen, setDocsDropdownOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { 
      name: "Docs", 
      href: "/docs",
      hasDropdown: true,
      dropdownItems: [
        { name: "Documentation", href: "/docs", icon: FiBook },
        { name: "API References", href: "/api-references", icon: FiCode },
        { name: "Tutorials", href: "/soon", icon: FiFileText },
        { name: "Examples", href: "/soon", icon: FiTerminal },
      ]
    },
    { name: "About", href: "/about" },
    { name: "Source", href: "/source" },
    { name: "Videos", href: "/video" },
    { name: "FAQs", href: "/faq" },
    { name: "Community", href: "/community" },
  ];

  return (
    <Navbar
      isBordered={isScrolled}
      onMenuOpenChange={setIsMenuOpen}
      className={`fixed transition-all duration-300 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-md border-white/10" 
          : "bg-black border-transparent"
      }`}
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand as={Link} href="/" className="cursor-pointer">
          <AcmeLogo />
          <motion.p
            className="font-bold text-white ml-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            ML
          </motion.p>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Menu with Dropdown */}
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            {item.hasDropdown ? (
              <div className="relative">
                <motion.button
                  onClick={() => setDocsDropdownOpen(!docsDropdownOpen)}
                  className="flex items-center gap-1 text-white/90 hover:text-white transition-colors relative group py-1"
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/80 transition-all duration-300 group-hover:w-full" />
                  </span>
                  <motion.div
                    animate={{ rotate: docsDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative top-[1px]"
                  >
                    <FiChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {docsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-56 bg-black/90 backdrop-blur-md border border-white/10 
                        rounded-xl shadow-xl overflow-hidden"
                    >
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <Link
                          key={idx}
                          href={dropdownItem.href}
                          className="flex items-center gap-3 p-3 text-white/90 hover:text-white hover:bg-white/10 
                            transition-all duration-200"
                        >
                          <dropdownItem.icon className="w-4 h-4" />
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                href={item.href}
                className="text-white/90 hover:text-white transition-colors relative group py-1"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/80 transition-all duration-300 group-hover:w-full" />
              </Link>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* User Auth Section */}
      <NavbarContent justify="end">
        <NavbarItem>
          {user ? (
            <div className="relative">
              <motion.button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 text-white/90 hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Welcome!
                <motion.div
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiChevronDown />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl"
                  >
                    <motion.button
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      onClick={logout}
                      className="w-full flex items-center p-3 gap-2 text-white/90 hover:text-white transition-colors"
                    >
                      <FiLogOut />
                      Logout
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                as={Link}
                href="/"
                className="bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-colors"
                variant="flat"
              >
                Hola Amigos!
              </Button>
            </motion.div>
          )}
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-black/95 backdrop-blur-md pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.hasDropdown ? (
                <div className="py-2">
                  <button
                    onClick={() => setDocsDropdownOpen(!docsDropdownOpen)}
                    className="flex items-center justify-between w-full text-white/90 hover:text-white transition-colors"
                  >
                    <span className="text-lg">{item.name}</span>
                    <motion.div
                      animate={{ rotate: docsDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiChevronDown />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {docsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-2 pl-4 border-l border-white/10">
                          {item.dropdownItems.map((dropdownItem, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <Link
                                href={dropdownItem.href}
                                className="flex items-center gap-3 py-2 pl-2 text-white/80 hover:text-white 
                                  transition-colors rounded-lg hover:bg-white/5"
                              >
                                <dropdownItem.icon className="w-4 h-4" />
                                <span>{dropdownItem.name}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block py-2 text-lg text-white/90 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </motion.div>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}