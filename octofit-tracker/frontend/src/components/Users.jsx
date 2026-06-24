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

  if (Array.isArray(payload?.users)) {
    return payload.users;
  }

  return [];
}

function Users({ apiBaseUrl }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`${apiBaseUrl}/users/`);
        const data = await response.json();
        setUsers(normalizeResponse(data));
      } catch (fetchError) {
        setError("Unable to load users.");
      }
    }

    fetchUsers();
  }, [apiBaseUrl]);

  return (
    <section>
      <h2 className="h4">Users</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul className="list-group">
        {users.map((user, index) => (
          <li className="list-group-item" key={user._id || user.id || `${user.email || "user"}-${index}`}>
            <strong>{user.name || "Unknown user"}</strong>
            <div className="small text-muted">{user.email || "No email"}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Users;
