"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useUser } from "@/app/context/UserContext"; // Import the UserContext
import { FaCheckCircle } from "react-icons/fa"; // Import the icon for success message

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    username: string | null;
    email: string | null;
  }>({
    username: null,
    email: null,
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const router = useRouter();
  const { setUser } = useUser(); // Access setUser from the context

  const handleSignUp = async () => {
    let valid = true;
    setFieldErrors({ username: null, email: null });

    if (!username) {
      setFieldErrors((prev) => ({ ...prev, username: "Username is required" }));
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setFieldErrors((prev) => ({
        ...prev,
        email: !email ? "Email is required" : "Invalid email format",
      }));
      valid = false;
    }

    if (!valid) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/auth/signup", {
        username,
        email,
        password,
      });

      const { message, user } = response.data; // Get the response data
      if (message === "User created successfully") {
        // Save user to context and localStorage
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));

        // Toast and success message
        toast.success("Signup successful!");
        setSuccessMessage("Signup successful! Redirecting to login...");
        
        // Redirect after showing success message
        setTimeout(() => {
          setSuccessMessage(null);
          router.push("/login");
        }, 3000); // Redirect after 3 seconds
      } else {
        setError(response.data.error || "Error signing up");
      }
    } catch (err: unknown) {
      // TypeScript error handling using 'unknown' and type assertion
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || "Error signing up");
      } else {
        setError("Error signing up");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center px-4">
      <div className="w-full max-w-lg bg-neutral-900 p-8 rounded-xl shadow-lg">
        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-500 text-white p-4 rounded-md flex items-center mb-4">
            <FaCheckCircle className="mr-2 text-lg" />
            <span>{successMessage}</span>
          </div>
        )}

        <div className="flex justify-center mb-6">
          <svg
            fill="none"
            height="36"
            viewBox="0 0 32 32"
            width="36"
            className="text-blue-500"
          >
            <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-center text-white mb-6">Sign Up</h1>

        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {fieldErrors.username && (
              <p className="text-red-500 text-xs mt-1">{fieldErrors.username}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {fieldErrors.email && (
              <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={handleSignUp}
            disabled={loading}
            className={`w-full py-3 text-white font-semibold rounded-md transition-all ${
              loading ? "bg-neutral-700 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          {/* Error message */}
          {error && <div className="mt-4 text-sm text-red-500 text-center">{error}</div>}
        </div>

        <div className="text-center mt-4 text-sm text-neutral-400">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 cursor-pointer">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
