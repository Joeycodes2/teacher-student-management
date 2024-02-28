import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// const MONGODB_URI = process.env.MONGODB_URI as string;
const MONGODB_URI =
  "mongodb+srv://joeycodes:gtVW4NPTNOPnCkCQ@cluster1.szkp3ml.mongodb.net/teacherstudentapp";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
