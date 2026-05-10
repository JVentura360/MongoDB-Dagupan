import React, { useState, useEffect } from "react";
import User from "./User";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <h2 className="status">Loading users...</h2>;
  }

  if (error) {
    return <h2 className="status error">Error: {error}</h2>;
  }

  return (
    <div className="App">
      <h1>User List</h1>

      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;