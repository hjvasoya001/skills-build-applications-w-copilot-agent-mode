const port = 8000;
const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/octofit_db";
const codespaceName = process.env.CODESPACE_NAME;

const localUrl = `http://localhost:${port}`;
const codespacesUrl = codespaceName
  ? `https://${codespaceName}-8000.githubpreview.dev`
  : localUrl;

const apiUrl = process.env.API_URL || codespacesUrl;

export { port, mongoUri, apiUrl, codespaceName };
