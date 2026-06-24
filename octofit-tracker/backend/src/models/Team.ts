import { Schema, model } from "mongoose";

export interface TeamDocument {
  name: string;
  description: string;
  coach: string;
  members: string[];
}

const teamSchema = new Schema<TeamDocument>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    coach: { type: String, required: true },
    members: { type: [String], default: [] }
  },
  { timestamps: true }
);

export default model<TeamDocument>("Team", teamSchema);
