"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const leaderboardSchema = new mongoose_1.Schema({
    position: { type: Number, required: true },
    user: { type: String, required: true },
    team: { type: String, required: true },
    points: { type: Number, required: true }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Leaderboard", leaderboardSchema);
