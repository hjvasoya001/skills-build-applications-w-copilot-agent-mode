import { Router } from "express";
import Activity from "./models/Activity";
import Leaderboard from "./models/Leaderboard";
import Team from "./models/Team";
import User from "./models/User";
import Workout from "./models/Workout";

const router = Router();

router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json({ message: "Users endpoint", users });
});

router.get("/teams", async (req, res) => {
  const teams = await Team.find();
  res.json({ message: "Teams endpoint", teams });
});

router.get("/activities", async (req, res) => {
  const activities = await Activity.find();
  res.json({ message: "Activities endpoint", activities });
});

router.get("/leaderboard", async (req, res) => {
  const leaderboard = await Leaderboard.find().sort({ position: 1 });
  res.json({ message: "Leaderboard endpoint", leaderboard });
});

router.get("/workouts", async (req, res) => {
  const workouts = await Workout.find();
  res.json({ message: "Workouts endpoint", workouts });
});

export default router;
