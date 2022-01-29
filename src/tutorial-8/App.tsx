import "./App.scss";
import React from "react";

type Users = {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  position: string;
};

export default function App() {
  const [users, setUsers] = React.useState<Users[]>([]);

  async function getUsers() {
    try {
      const res = await fetch(
        "https://61f5353b62f1e300173c404c.mockapi.io/users"
      );
      const data = await res.json();
      setUsers(data);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="App">
      <ul>
        {users.map((obj: Users) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить список пользователей</button>
    </div>
  );
}
