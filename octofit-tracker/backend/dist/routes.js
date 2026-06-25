"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
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
exports.default = router;
