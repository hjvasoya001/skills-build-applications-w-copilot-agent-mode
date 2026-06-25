"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codespaceName = exports.apiUrl = exports.port = void 0;
const port = 8000;
exports.port = port;
const codespaceName = process.env.CODESPACE_NAME;
exports.codespaceName = codespaceName;
const localUrl = `http://localhost:${port}`;
const codespacesUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : localUrl;
const apiUrl = process.env.API_URL || codespacesUrl;
exports.apiUrl = apiUrl;
