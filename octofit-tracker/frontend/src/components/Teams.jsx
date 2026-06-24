import { useEffect, useState } from "react";

function normalizeResponse(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (Array.isArray(payload?.results)) {
    return payload.results;
  }

  if (Array.isArray(payload?.items)) {
    return payload.items;
  }

  if (Array.isArray(payload?.teams)) {
    return payload.teams;
  }

  return [];
}

function Teams({ apiBaseUrl }) {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await fetch(`${apiBaseUrl}/api/teams/`);
        const data = await response.json();
        setTeams(normalizeResponse(data));
      } catch (fetchError) {
        setError("Unable to load teams.");
      }
    }

    fetchTeams();
  }, [apiBaseUrl]);

  return (
    <section>
      <h2 className="h4">Teams</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul className="list-group">
        {teams.map((team, index) => (
          <li className="list-group-item" key={team._id || team.id || `${team.name || "team"}-${index}`}>
            <strong>{team.name || "Unnamed team"}</strong>
            <div className="small text-muted">{team.description || "No description"}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Teams;
