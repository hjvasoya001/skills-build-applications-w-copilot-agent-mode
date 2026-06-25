const envCodespaceName = import.meta.env.VITE_CODESPACE_NAME;

function detectCodespaceNameFromHost() {
  if (typeof window === "undefined") {
    return "";
  }

  const host = window.location.hostname;
  const match = host.match(/^([a-z0-9-]+)-\d+\.app\.github\.dev$/i);
  return match ? match[1] : "";
}

const resolvedCodespaceName = envCodespaceName || detectCodespaceNameFromHost();

export const apiBaseUrl = resolvedCodespaceName
  ? `https://${resolvedCodespaceName}-8000.app.github.dev`
  : "http://localhost:8000";

export const endpoints = {
  activities: "/api/activities/",
  leaderboard: "/api/leaderboard/",
  teams: "/api/teams/",
  users: "/api/users/",
  workouts: "/api/workouts/"
};

export const buildApiUrl = (path) => `${apiBaseUrl}${path}`;
