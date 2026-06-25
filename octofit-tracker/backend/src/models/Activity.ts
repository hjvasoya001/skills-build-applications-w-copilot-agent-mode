import { Schema, model, Types } from "mongoose";

export interface ActivityDocument {
  user: string;
  workout: string;
  durationMinutes: number;
  caloriesBurned: number;
  recordedAt: Date;
}

const activitySchema = new Schema<ActivityDocument>(
  {
    user: { type: String, required: true },
    workout: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    recordedAt: { type: Date, required: true }
  },
  { timestamps: true }
);

export default model<ActivityDocument>("Activity", activitySchema);
