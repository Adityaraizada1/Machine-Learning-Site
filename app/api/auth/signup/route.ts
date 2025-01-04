import { NextResponse, NextRequest } from "next/server"; // Import NextRequest
import connectDB from "@/lib/mongoose";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  const { username, email, password } = await req.json();

  // Validate input fields
  if (!username || !email || !password) {
    return NextResponse.json(
      { error: "Username, email, and password are required" },
      { status: 400 }
    );
  }

  try {
    // Connect to the database
    await connectDB();

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email is already in use" }, { status: 400 });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Return a successful response with user details
    return NextResponse.json(
      {
        message: "User created successfully",
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error creating user:", error);

    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}
