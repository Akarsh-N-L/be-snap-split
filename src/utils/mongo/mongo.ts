import config from "../../config";
import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    await mongoose.connect(config.mongo.connectionUri);
    console.log("Connected to MongoDB ✅");
  } catch (error) {
    console.log("Error connecting to MongoDB ❌");
    throw error;
  }
};

export default connectToMongo;
