import mongoose, { Schema, Document } from "mongoose";

// Define the User interface, extending Document to work with Mongoose
interface IUser extends Document {
  email: string;
  password: string;
  username: string; // Add username here
}

// Define the User schema
const UserSchema: Schema<IUser> = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,  // Make username required
      unique: true,    // Ensure usernames are unique
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Check if the model already exists, otherwise create a new one
const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
