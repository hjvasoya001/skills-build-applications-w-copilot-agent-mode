"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Activity_1 = __importDefault(require("./models/Activity"));
const Leaderboard_1 = __importDefault(require("./models/Leaderboard"));
const Team_1 = __importDefault(require("./models/Team"));
const User_1 = __importDefault(require("./models/User"));
const Workout_1 = __importDefault(require("./models/Workout"));
const router = (0, express_1.Router)();
router.get("/users", async (req, res) => {
    const users = await User_1.default.find();
    res.json({ message: "Users endpoint", users });
});
router.get("/teams", async (req, res) => {
    const teams = await Team_1.default.find();
    res.json({ message: "Teams endpoint", teams });
});
router.get("/activities", async (req, res) => {
    const activities = await Activity_1.default.find();
    res.json({ message: "Activities endpoint", activities });
});
router.get("/leaderboard", async (req, res) => {
    const leaderboard = await Leaderboard_1.default.find().sort({ position: 1 });
    res.json({ message: "Leaderboard endpoint", leaderboard });
});
router.get("/workouts", async (req, res) => {
    const workouts = await Workout_1.default.find();
    res.json({ message: "Workouts endpoint", workouts });
});
exports.default = router;
