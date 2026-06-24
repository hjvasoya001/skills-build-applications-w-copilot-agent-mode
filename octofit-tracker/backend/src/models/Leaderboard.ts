import { Schema, model } from "mongoose";

export interface LeaderboardDocument {
  position: number;
  user: string;
  team: string;
  points: number;
}

const leaderboardSchema = new Schema<LeaderboardDocument>(
  {
    position: { type: Number, required: true },
    user: { type: String, required: true },
    team: { type: String, required: true },
    points: { type: Number, required: true }
  },
  { timestamps: true }
);

export default model<LeaderboardDocument>("Leaderboard", leaderboardSchema);
