import app from "./app";
import { connectDb } from "./config/database";
import { port, apiUrl, codespaceName } from "./config";

const apiHostMessage = codespaceName
  ? `Codespace-aware API URL set to ${apiUrl}`
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
