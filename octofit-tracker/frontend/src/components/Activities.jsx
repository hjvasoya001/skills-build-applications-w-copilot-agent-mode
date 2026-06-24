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

  if (Array.isArray(payload?.activities)) {
    return payload.activities;
  }

  return [];
}

function Activities({ apiBaseUrl }) {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchActivities() {
      try {
        const response = await fetch(`${apiBaseUrl}/api/activities/`);
        const data = await response.json();
        setActivities(normalizeResponse(data));
      } catch (fetchError) {
        setError("Unable to load activities.");
      }
    }

    fetchActivities();
  }, [apiBaseUrl]);

  return (
    <section>
      <h2 className="h4">Activities</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul className="list-group">
        {activities.map((activity, index) => (
          <li className="list-group-item" key={activity._id || activity.id || `${activity.user || "activity"}-${index}`}>
            <strong>{activity.user || "Unknown athlete"}</strong>
            <div className="small text-muted">
              {activity.workout || "Workout"} · {activity.durationMinutes || 0} min · {activity.caloriesBurned || 0} cal
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Activities;
