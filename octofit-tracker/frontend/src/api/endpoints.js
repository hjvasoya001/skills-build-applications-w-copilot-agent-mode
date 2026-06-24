const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

export const apiBaseUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev`
  : "http://localhost:8000";

export const endpoints = {
  activities: "/api/activities/",
  leaderboard: "/api/leaderboard/",
  teams: "/api/teams/",
  users: "/api/users/",
  workouts: "/api/workouts/"
};

export const buildApiUrl = (path) => `${apiBaseUrl}${path}`;
