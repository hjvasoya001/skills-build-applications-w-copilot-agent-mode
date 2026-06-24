const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;

const localUrl = `http://localhost:${port}`;
const codespacesUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : localUrl;

const apiUrl = process.env.API_URL || codespacesUrl;

export { port, apiUrl, codespaceName };
