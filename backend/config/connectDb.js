import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB successfully...");
  } catch (error) {
    console.log("❌ Failed to connect to MongoDB", error.message);
  }
};

export default connectDb;
