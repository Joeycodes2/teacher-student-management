import React from "react";
import mongoose from "mongoose";

const mongoUri = process.env.MONGODB_URI;
const connectionString = mongoUri as string;

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(connectionString);

    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
