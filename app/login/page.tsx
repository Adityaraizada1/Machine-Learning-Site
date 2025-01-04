"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useUser } from "@/app/context/UserContext"; // Import the context

const Login = () => {
  const { setUser } = useUser(); // Get setUser function from context
  const [username, setUsername] = useState(""); // Add username state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // To store error messages
  const router = useRouter();

  const handleLogin = async () => {
    if (!username || !email || !password) {
      setErrorMessage("Username, email, and password are required");
      return;
    }

    setLoading(true);
    setErrorMessage(null); // Clear any previous error messages

    try {
      const response = await axios.post("/api/auth/login", { username, email, password });

      if (response.data.message) {
        // Assuming response.data contains user information
        setUser(response.data.user); // Set user in context
        router.push("/"); // Redirect to homepage on successful login
      } else {
        setErrorMessage(response.data.error || "Error logging in");
      }
    } catch (err: unknown) {
      // TypeScript error handling using 'unknown' and type assertion
      if (axios.isAxiosError(err)) {
        setErrorMessage(err.response?.data?.error || "Something went wrong");
      } else {
        setErrorMessage("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-neutral-900 p-6 rounded-lg shadow-lg">
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
        <h1 className="text-2xl font-bold text-center text-white mb-4">Login</h1>
        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {!username && (
              <p className="text-red-500 text-xs mt-1">Username is required</p>
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
            {!email && (
              <p className="text-red-500 text-xs mt-1">Email is required</p>
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
            {!password && (
              <p className="text-red-500 text-xs mt-1">Password is required</p>
            )}
          </div>
          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full py-3 text-white font-semibold rounded-md transition-all ${
              loading ? "bg-neutral-700 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </div>

        {/* Display error message if there's an issue */}
        {errorMessage && (
          <div className="mt-4 text-sm text-red-500 text-center">
            {errorMessage}
          </div>
        )}

        <div className="text-center mt-4 text-sm text-neutral-400">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-500 cursor-pointer"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
