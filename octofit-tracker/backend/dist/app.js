"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routesWithDb_1 = __importDefault(require("./routesWithDb"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", routesWithDb_1.default);
app.get("/", (req, res) => {
    res.json({ message: "OctoFit Tracker backend is running." });
});
exports.default = app;
