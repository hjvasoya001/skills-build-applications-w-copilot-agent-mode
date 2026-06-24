import { Schema, model } from "mongoose";

export interface WorkoutDocument {
  title: string;
  description: string;
  durationMinutes: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  muscleGroups: string[];
}

const workoutSchema = new Schema<WorkoutDocument>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    difficulty: { type: String, required: true, enum: ["beginner", "intermediate", "advanced"] },
    muscleGroups: { type: [String], required: true }
  },
  { timestamps: true }
);

export default model<WorkoutDocument>("Workout", workoutSchema);
