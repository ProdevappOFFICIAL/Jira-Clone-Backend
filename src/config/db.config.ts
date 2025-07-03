import mongoose from "mongoose";
import { config } from "./app.config";

export const connectDatabase = async () => {
  try {
    mongoose.connect(config.MONGO_URI);
    console.log("API connected to MONGODB");
  } catch (error) {
    console.log("Error while connecting API to MONGODB ", error);
    process.exit(1);
  }
};
