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

  if (Array.isArray(payload?.workouts)) {
    return payload.workouts;
  }

  return [];
}

function Workouts({ apiBaseUrl }) {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWorkouts() {
      try {
        const response = await fetch(`${apiBaseUrl}/api/workouts/`);
        const data = await response.json();
        setWorkouts(normalizeResponse(data));
      } catch (fetchError) {
        setError("Unable to load workouts.");
      }
    }

    fetchWorkouts();
  }, [apiBaseUrl]);

  return (
    <section>
      <h2 className="h4">Workouts</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul className="list-group">
        {workouts.map((workout, index) => (
          <li className="list-group-item" key={workout._id || workout.id || `${workout.title || "workout"}-${index}`}>
            <strong>{workout.title || "Untitled workout"}</strong>
            <div className="small text-muted">{workout.durationMinutes || 0} min · {workout.difficulty || "unknown"}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Workouts;
