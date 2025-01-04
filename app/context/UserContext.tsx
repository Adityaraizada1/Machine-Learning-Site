"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";

// Define user type
interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
}

// Context type
interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
}

// Create the context with default value undefined
const UserContext = createContext<UserContextType | undefined>(undefined);

// UserProvider Component: Wraps your app and provides user data
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          console.log("Loaded user from localStorage: ", parsedUser); // Debugging line
          setUser(parsedUser);
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
    }
  }, [user]);

  // Logout function
  const logout = () => {
    setUser(null); // Clear user data from state
    if (typeof window !== "undefined") {
      localStorage.removeItem("user"); // Clear from localStorage
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook to use user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// Export the context itself for manual usage (optional)
export { UserContext };
