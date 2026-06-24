import app from "./app";
import { connectDb } from "./config/database";
import { port, apiUrl } from "./config";

const codespaceName = process.env.CODESPACE_NAME;
const apiHostMessage = codespaceName
  ? `Codespace-aware API URL set to https://${codespaceName}-8000.app.github.dev`
  : `Local API URL set to ${apiUrl}`;

connectDb()
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Backend listening on port ${port}`);
      console.log(apiHostMessage);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });
