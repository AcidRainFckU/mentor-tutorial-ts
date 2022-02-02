import "./App.scss";
import React from "react";
import axios from "axios";

type Users = {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  position: string;
};

type Data = {
  email: string;
  name: string;
};

export default function App() {
  const [users, setUsers] = React.useState<Users[]>([]);
  const [email, setEmail] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [data, setData] = React.useState<any>({
    email: "",
    name: "",
  });

  const [uploading, setUploading] = React.useState<boolean>(false);

  async function getUsers() {
    try {
      const { data } = await axios.get(
        "https://61f5353b62f1e300173c404c.mockapi.io/users"
      );
      setUsers(data);
    } catch (e) {
      console.error(e);
    }
  }

  const createUser = () => {
    setData({
      email: email,
      name: name,
    });
  };
  React.useEffect(() => {
    if (email.length > 0 && name.length > 0) {
      axios.post("https://61f5353b62f1e300173c404c.mockapi.io/users", data);
    }
  }, [data]);

  const uploadFile = async () => {
    const fileElem = document.querySelector("#file") as HTMLInputElement;
    const file = fileElem.files![0];

    setUploading(true);

    const formData = new FormData();

    formData.append("file", file);

    await axios.post("http://localhost:9999", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setUploading(false);
  };

  return (
    <div className="App">
      <ul>
        {users.map((obj: Users) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить список пользователей</button>
      <br />
      <br />
      <br />
      <br />
      <div className="form">
        <h4>Создать пользователя</h4>
        <input
          id="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
        <input
          id="name"
          onChange={(event) => setName(event.target.value)}
          placeholder="Имя"
        />
        <button onClick={createUser}>Отправить</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <h4>Загрузка файла</h4>
        <input id="file" type="file" />
        <button disabled={uploading} onClick={uploadFile}>
          Загрузить
        </button>
        {uploading && <p>Идёт загрузка...</p>}
      </div>
    </div>
  );
}
