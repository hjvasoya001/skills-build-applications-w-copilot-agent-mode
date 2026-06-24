import mongoose from "mongoose";
import { mongoUri } from "./config";

mongoose.set("strictQuery", true);

export const connectDb = () => mongoose.connect(mongoUri);
