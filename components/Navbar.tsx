"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiLogOut, FiChevronDown } from "react-icons/fi"; // Use FiChevronDown for dropdown arrow
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
import { useUser } from "@/app/context/UserContext"; // Ensure the UserContext is properly set up

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useUser(); // Access user context

  const menuItems = [
    { name: "Docs", href: "/docs" },
    { name: "About", href: "/about" },
    { name: "Source", href: "/source" },
    { name: "FAQs", href: "/faq" },
    { name: "Community", href: "/community" },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  function toggleDropdown(): void {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <Navbar
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      style={{
        backgroundColor: "black",
        color: "white",
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Navbar Content */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Link href="/">
            <AcmeLogo />
          </Link>
          <p className="font-bold text-inherit" style={{ color: "white" }}>
            ML
          </p>
        </NavbarBrand>
      </NavbarContent>

      {/* Center Menu Items */}
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
        style={{ textAlign: "center" }}
      >
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={item.href}
              style={{ color: "white", textDecoration: "none" }}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* User Auth Section */}
      <NavbarContent justify="end">
        <NavbarItem>
          {user ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 text-white"
              >
                Welcome !{/* Welcome, {user?.name || "User"}!  fix this*/}
                <FiChevronDown className="text-white" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black text-white rounded-md shadow-lg">
                  <button
                    onClick={logout}
                    className="w-full flex items-center p-2 gap-2 hover:bg-gray-700 rounded-md"
                  >
                    <FiLogOut className="text-xl" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Button
              as={Link}
              href="/"
              className="text-white"
              variant="flat"
            >
              Hola Amigos!
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu
        style={{
          backgroundColor: "black",
          color: "white",
          height: "100vh",
          paddingTop: "1rem",
        }}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              href={item.href}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1.25rem",
              }}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}