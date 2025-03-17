import mongoose from "mongoose";
import config from "../config";

const connectToMongo = () => {
  mongoose
    .connect(config?.mongo?.uri)
    .then(() => {
      console.log("🟢 [MONGO] connected to mongo");
    })
    .catch((error) => {
      console.error("🔴 [MONGO] unable to connect to mongo", error);
    });
};

export default connectToMongo;
