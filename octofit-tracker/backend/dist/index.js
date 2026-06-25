"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
const config_1 = require("./config");
const apiHostMessage = config_1.codespaceName
    ? `Codespace-aware API URL set to ${config_1.apiUrl}`
    : `Local API URL set to ${config_1.apiUrl}`;
(0, database_1.connectDb)()
    .then(() => {
    console.log("Connected to MongoDB");
    app_1.default.listen(config_1.port, () => {
        console.log(`Backend listening on port ${config_1.port}`);
        console.log(apiHostMessage);
    });
})
    .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
});
