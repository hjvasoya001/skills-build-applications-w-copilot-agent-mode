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

  if (Array.isArray(payload?.leaderboard)) {
    return payload.leaderboard;
  }

  return [];
}

function Leaderboard({ apiBaseUrl }) {
  const [leaderboard, setLeaderboard] = useState([]);
  const [error, setError] = useState("");
  const endpointPath = "/api/leaderboard/";
  const codespacesEndpoint = `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;
  const endpointUrl = import.meta.env.VITE_CODESPACE_NAME
    ? codespacesEndpoint
    : `${apiBaseUrl}${endpointPath}`;

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const response = await fetch(endpointUrl);
        const data = await response.json();
        setLeaderboard(normalizeResponse(data));
      } catch (fetchError) {
        setError("Unable to load leaderboard.");
      }
    }

    fetchLeaderboard();
  }, [apiBaseUrl, endpointUrl]);

  return (
    <section>
      <h2 className="h4">Leaderboard</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ol className="list-group list-group-numbered">
        {leaderboard.map((entry, index) => (
          <li className="list-group-item" key={entry._id || entry.id || `${entry.user || "entry"}-${index}`}>
            <strong>{entry.user || "Unknown user"}</strong>
            <div className="small text-muted">{entry.team || "No team"} · {entry.points || 0} pts</div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Leaderboard;
