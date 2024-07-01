import mongoose from "mongoose";

export const connect = async () => {
  const uri = process.env.MONGO_URI as string;

  if (!uri) throw new Error("Please add your Mongo URI to .env.local");

  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
  }
};
