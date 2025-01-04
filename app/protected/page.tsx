"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProtectedPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) return <div>Loading...</div>;

  return <div>Welcome to the Protected Page!</div>;
};

export default ProtectedPage;
