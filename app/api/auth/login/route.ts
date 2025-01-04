import { NextResponse } from "next/server";
import connectDB from "@/lib/mongoose";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
  }

  try {
    // Connect to the database
    await connectDB();

    // Check if the user exists by email
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found. Please sign up first." }, { status: 400 });
    }

    // Verify if the provided password matches the stored hash
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return NextResponse.json({ error: "Incorrect password. Please try again." }, { status: 400 });
    }

    // Successfully logged in, include username and email in the response
    const { username, email: userEmail } = user; // Destructure the username and email
    return NextResponse.json(
      { message: "Login successful", user: { username, email: userEmail } },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Error logging in" }, { status: 500 });
  }
}
