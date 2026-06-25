import { Router } from "express";

const router = Router();

router.get("/users", (req, res) => {
  res.json({
    message: "Users endpoint",
    users: []
  });
});

router.get("/teams", (req, res) => {
  res.json({
    message: "Teams endpoint",
    teams: []
  });
});

router.get("/activities", (req, res) => {
  res.json({
    message: "Activities endpoint",
    activities: []
  });
});

router.get("/leaderboard", (req, res) => {
  res.json({
    message: "Leaderboard endpoint",
    leaderboard: []
  });
});

router.get("/workouts", (req, res) => {
  res.json({
    message: "Workouts endpoint",
    workouts: []
  });
});

export default router;
