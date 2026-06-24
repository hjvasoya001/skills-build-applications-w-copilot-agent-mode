import express from "express";
import routes from "./routesWithDb";

const app = express();

app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.json({ message: "OctoFit Tracker backend is running." });
});

export default app;
