import { Schema, model } from "mongoose";

export interface UserDocument {
  name: string;
  email: string;
  role: "athlete" | "coach" | "admin";
  team: string;
  joinedAt: Date;
}

const userSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true, enum: ["athlete", "coach", "admin"] },
    team: { type: String, required: true },
    joinedAt: { type: Date, required: true }
  },
  { timestamps: true }
);

export default model<UserDocument>("User", userSchema);
