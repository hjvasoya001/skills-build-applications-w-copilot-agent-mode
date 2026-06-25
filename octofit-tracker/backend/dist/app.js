"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routesWithDb_1 = __importDefault(require("./routesWithDb"));
const app = (0, express_1.default)();
const codespaceName = process.env.CODESPACE_NAME;
const codespaceFrontendOrigin = codespaceName
    ? `https://${codespaceName}-5173.app.github.dev`
    : "";
const allowedOrigins = ["http://localhost:5173", codespaceFrontendOrigin].filter(Boolean);
app.use((req, res, next) => {
    const requestOrigin = req.headers.origin;
    if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
        res.header("Access-Control-Allow-Origin", requestOrigin);
        res.header("Vary", "Origin");
    }
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
        res.sendStatus(204);
        return;
    }
    next();
});
app.use(express_1.default.json());
app.use("/api", routesWithDb_1.default);
app.get("/", (req, res) => {
    res.json({ message: "OctoFit Tracker backend is running." });
});
exports.default = app;
