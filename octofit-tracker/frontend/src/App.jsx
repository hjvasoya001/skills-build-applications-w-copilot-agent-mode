import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import Activities from "./components/Activities";
import Leaderboard from "./components/Leaderboard";
import Teams from "./components/Teams";
import Users from "./components/Users";
import Workouts from "./components/Workouts";

const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : "http://localhost:8000/api";

function App() {
  return (
    <div className="container py-4">
      <header className="mb-4">
        <h1 className="mb-2">OctoFit Tracker</h1>
        <p className="text-muted mb-3">
          React presentation tier for users, teams, activities, leaderboard, and workouts.
        </p>
        <p className="small mb-0">
          API base URL: <code>{apiBaseUrl}</code>
        </p>
      </header>

      <nav className="nav nav-pills flex-wrap gap-2 mb-4">
        <NavLink to="/users" className="nav-link">Users</NavLink>
        <NavLink to="/teams" className="nav-link">Teams</NavLink>
        <NavLink to="/activities" className="nav-link">Activities</NavLink>
        <NavLink to="/leaderboard" className="nav-link">Leaderboard</NavLink>
        <NavLink to="/workouts" className="nav-link">Workouts</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="/users" element={<Users apiBaseUrl={apiBaseUrl} />} />
        <Route path="/teams" element={<Teams apiBaseUrl={apiBaseUrl} />} />
        <Route path="/activities" element={<Activities apiBaseUrl={apiBaseUrl} />} />
        <Route path="/leaderboard" element={<Leaderboard apiBaseUrl={apiBaseUrl} />} />
        <Route path="/workouts" element={<Workouts apiBaseUrl={apiBaseUrl} />} />
      </Routes>
    </div>
  );
}

export default App;
