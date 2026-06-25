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
  const endpointPath = "/api/users/";
  const codespacesEndpoint = `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`;
  const endpointUrl = import.meta.env.VITE_CODESPACE_NAME
    ? codespacesEndpoint
    : `${apiBaseUrl}${endpointPath}`;

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(endpointUrl);
        const data = await response.json();
        setUsers(normalizeResponse(data));
      } catch (fetchError) {
        setError("Unable to load users.");
      }
    }

    fetchUsers();
  }, [apiBaseUrl, endpointUrl]);

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
