import express from "express";
import routes from "./routesWithDb";

const app = express();
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

app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.json({ message: "OctoFit Tracker backend is running." });
});

export default app;
