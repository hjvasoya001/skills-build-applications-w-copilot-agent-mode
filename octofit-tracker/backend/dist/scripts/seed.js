"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const Activity_1 = __importDefault(require("../models/Activity"));
const Leaderboard_1 = __importDefault(require("../models/Leaderboard"));
const Team_1 = __importDefault(require("../models/Team"));
const User_1 = __importDefault(require("../models/User"));
const Workout_1 = __importDefault(require("../models/Workout"));
/**
 * Seed the octofit_db database with test data.
 */
async function seed() {
    try {
        await (0, database_1.connectDb)();
        console.log("Seed the octofit_db database with test data");
        await Promise.all([
            User_1.default.deleteMany({}),
            Team_1.default.deleteMany({}),
            Workout_1.default.deleteMany({}),
            Activity_1.default.deleteMany({}),
            Leaderboard_1.default.deleteMany({})
        ]);
        const teams = await Team_1.default.create([
            {
                name: "Coastal Crushers",
                description: "Team of endurance athletes focused on waterfront training.",
                coach: "Monica Shaw",
                members: ["amber@example.com", "diego@example.com"]
            },
            {
                name: "Urban Sprinters",
                description: "High-intensity workouts for city professionals.",
                coach: "Ravi Patel",
                members: ["jessica@example.com", "nina@example.com"]
            }
        ]);
        const users = await User_1.default.create([
            {
                name: "Amber Liu",
                email: "amber@example.com",
                role: "athlete",
                team: teams[0].name,
                joinedAt: new Date("2025-11-01T08:30:00Z")
            },
            {
                name: "Diego Ramos",
                email: "diego@example.com",
                role: "athlete",
                team: teams[0].name,
                joinedAt: new Date("2025-12-15T09:15:00Z")
            },
            {
                name: "Jessica Lin",
                email: "jessica@example.com",
                role: "athlete",
                team: teams[1].name,
                joinedAt: new Date("2026-01-10T10:00:00Z")
            },
            {
                name: "Nina Carter",
                email: "nina@example.com",
                role: "coach",
                team: teams[1].name,
                joinedAt: new Date("2024-10-20T11:45:00Z")
            }
        ]);
        const workouts = await Workout_1.default.create([
            {
                title: "Morning Strength Circuit",
                description: "Full-body circuit with weights and bodyweight exercises.",
                durationMinutes: 45,
                difficulty: "intermediate",
                muscleGroups: ["legs", "back", "core"]
            },
            {
                title: "Sunrise Run",
                description: "Outdoor endurance run for building aerobic capacity.",
                durationMinutes: 30,
                difficulty: "beginner",
                muscleGroups: ["legs", "cardio"]
            },
            {
                title: "HIIT Burner",
                description: "High-intensity interval training to boost metabolism.",
                durationMinutes: 25,
                difficulty: "advanced",
                muscleGroups: ["full body", "cardio"]
            }
        ]);
        const activities = await Activity_1.default.create([
            {
                user: users[0].email,
                workout: workouts[0].title,
                durationMinutes: 45,
                caloriesBurned: 380,
                recordedAt: new Date("2026-06-20T07:00:00Z")
            },
            {
                user: users[1].email,
                workout: workouts[1].title,
                durationMinutes: 30,
                caloriesBurned: 250,
                recordedAt: new Date("2026-06-21T07:30:00Z")
            },
            {
                user: users[2].email,
                workout: workouts[2].title,
                durationMinutes: 25,
                caloriesBurned: 330,
                recordedAt: new Date("2026-06-22T18:15:00Z")
            }
        ]);
        const leaderboard = await Leaderboard_1.default.create([
            {
                position: 1,
                user: users[0].email,
                team: teams[0].name,
                points: 620
            },
            {
                position: 2,
                user: users[2].email,
                team: teams[1].name,
                points: 590
            },
            {
                position: 3,
                user: users[1].email,
                team: teams[0].name,
                points: 540
            }
        ]);
        console.log(`Created ${users.length} users, ${teams.length} teams, ${workouts.length} workouts, ${activities.length} activities, and ${leaderboard.length} leaderboard entries.`);
        process.exit(0);
    }
    catch (error) {
        console.error("Seeding error:", error);
        process.exit(1);
    }
}
seed();
