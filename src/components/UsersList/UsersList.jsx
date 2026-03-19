import { useState, useEffect } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Klaida:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Kraunasi...</p>;
  }

  return (
    <section>
      <h2>Users list</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <br />
            {user.email}
            <br />
            {user.phone}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UsersList;
